import { Select2OptionData } from 'ng-select2';
import { DashboardService } from './../../service/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { MeasurerService } from './../../service/measurer/measurer.service';
import { RecordService } from 'src/app/service/records/records.service';
import { Measure } from 'src/app/models/dashboard/measure';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  public measurers:Array<Select2OptionData> = [];
  public body = {
    id_measurer: null,
    dateStart: null,
    dateFinal: null
  }
  public measures:Array<Measure> = []
  constructor(private dashboardService: DashboardService, 
    private measurerService: MeasurerService,
    private recordsService: RecordService) { }

  ngOnInit(): void {
    this.selectMeasurer()
  }

  selectMeasurer(){
    this.measurerService.consultMeasurers().subscribe(response=>{
      response.value.forEach((element,indice) => {
        this.measurers.push({
          "id":element.id.toString(),
          "text":"Medidor " + (indice+1)
        })
      });
    })
  }

  updateSelect(event){
    this.body.id_measurer = event;
  }

  consult(){
    this.recordsService.records(this.body).subscribe(response=>{
      this.measures = response.value;
      console.log(this.measures);
    })
  }

}
