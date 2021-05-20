import { NgSelect2Module, Select2OptionData } from 'ng-select2';
import { DashboardService } from './../../service/dashboard/dashboard.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Measure } from 'src/app/models/dashboard/measure';
import { MeasureAddress } from 'src/app/models/dashboard/measureAddress';
import { MeasurerService } from 'src/app/service/measurer/measurer.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  map: mapboxgl.Map;
  lng: number;
  lat: number;
  marker1: mapboxgl.Marker;
  style = 'mapbox://styles/mapbox/streets-v11';
  @ViewChild("measuresDay",{static:true}) elementDay: ElementRef;
  @ViewChild("measuresMonth",{static:true}) elementMonth: ElementRef;
  @ViewChild("measuresWeek",{static:true}) elementWeek: ElementRef;
  public lastValues: Array<Measure> = [];
  public measurers:Array<Select2OptionData> = [];
  public measurersAddress: Array<MeasureAddress> = [];
  public charts:Array<Chart> = []
  public body = {
    id_measurer: 1,
    date: new Date().toISOString().split('T')[0]
  }
  constructor(
    private dashboardService: DashboardService, 
    private measurerService: MeasurerService
    ) { }
    
  ngOnInit(): void {
      this.selectMeasurer()
      this.consult()
  }

  selectMeasurer(){
    this.measurerService.consultMeasurers().subscribe(response=>{
      response.value.forEach((element,indice) => {
        var id = indice + 1
        this.measurers.push({
          "id":id.toString(),
          "text":"Medidor " + (indice+1)
          
        })
        this.measurersAddress.push({
          "id":element.id.toString(),
          "address":element["complement"] + ' ' + element["street"] + ' ' + element["city"]
        })
      });
      this.updateSelect("1")
    })
  }

  updateSelect(event){
    this.body.id_measurer = event;
    this.charts.forEach(element=>{
      element.destroy()
    })
    this.consultCoordinatesDashboard()
    this.consult()
  }

  consult(){
    this.dashboardService.consultDay(this.body).subscribe(response=>{
      this.lastValues = response.value;
      let label = [];
      let data = [];
      this.lastValues.forEach(element=>{
        label.push(element.date)
        data.push(element.value)
      })
      var borderColor = "rgba(0, 121, 193)"
      this.generateGrafic(this.elementDay, label, data, 'line', borderColor)
    });

    this.dashboardService.consultMonth(this.body).subscribe(response=>{
      var values = response.value;
      let label = [];
      let data = [];
      values.forEach(element=>{
        label.push(element.date)
        data.push(element.value)
      })
      var borderColor = "rgba(0, 121, 193,0.3)"
      var backgroundColor = ["rgba(0, 121, 193)", "coral", "darkorchid", "rgba(0, 121, 193)","coral", "darkorchid", "rgba(0, 121, 193)","coral", "darkorchid", "rgba(0, 121, 193)", "coral", "darkorchid"]
      this.generateGrafic(this.elementMonth, label.reverse(), data.reverse(), 'bar', borderColor, backgroundColor)
    });

    this.dashboardService.consultWeek(this.body).subscribe(response=>{
      var values = response.value;
      let label = [];
      let data = [];
      values.forEach(element=>{
        label.push(element.date)
        data.push(element.value)
      })
      var borderColor = "rgba(178, 140, 255)"
      this.generateGrafic(this.elementWeek, label, data, 'line', borderColor)
    });
  }
  
  consultCoordinatesDashboard(){
    console.log(this.body.id_measurer -1)
    console.log(this.measurersAddress[this.body.id_measurer -1]["address"])
    var body = {
      address: this.measurersAddress[this.body.id_measurer -1]["address"],
      token: environment.mapbox.accessToken
    }
    this.dashboardService.consultCoordinates(body).subscribe(response=>{
      this.lng = response.features[0].center[0]
      this.lat = response.features[0].center[1]
      this.generateMap()

    })
  }

  generateMap(){
    mapboxgl.accessToken = environment.mapbox.accessToken;
    if(this.marker1){
      console.log("remove")
      this.marker1.remove()
      this.marker1 = null;
      this.map.remove()
      this.map = null;
    }
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
      cordinate:[this.lng, this.lat]
    });
    this.marker1 = new mapboxgl.Marker()
    .setLngLat([this.lng, this.lat])
    .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  generateGrafic(element: ElementRef ,label: any[], data: any[], type: string, borderColor: string, backgroundColor:any = "rgba(0, 0, 0, 0)") {
    var tooltips = {}
    if(type === "line"){
      tooltips = {
        mode: "nearest",
        intersect: false
      }
    }
    this.charts.push(new Chart(element.nativeElement, {
      type: type,
      data:{
        labels: label,
        datasets:[
          {
            data: data,
            backgroundColor: backgroundColor,
            opacity:"0.5",
            borderColor: borderColor,
            OverflowEvent: "hover"
          }
        ]
      },
      options: {
        elements:{
          line:{
              tension:0
          }
        },
        tooltips: tooltips,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            scaleLabel: {
            display: false,
            },
            ticks:{
            display: false
            }
            }]
          }
      }
    }))
  }

}
