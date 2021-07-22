import { Select2OptionData } from 'ng-select2';
import { DashboardService } from './../../service/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { MeasurerService } from './../../service/measurer/measurer.service';
import { RecordService } from 'src/app/service/records/records.service';
import { Measure } from 'src/app/models/dashboard/measure';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  public measurers:Array<Select2OptionData> = [];
  public body = {
    id_measurer: 1,
    dateStart: null,
    dateFinal: null
  }
  public measures:Array<Measure> = []
  constructor(private dashboardService: DashboardService, 
    private measurerService: MeasurerService,
    private recordsService: RecordService,
    private notification: NotificationService
    ) { }

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
    }, error=>{
      this.notification.showError(error.statusText,'ERRO')
    })
  }

  updateSelect(event){
    this.body.id_measurer = event;
  }

  consult(){
    this.recordsService.records(this.body).subscribe(response=>{
      this.measures = response.value;
      console.log(this.measures);
      this.notification.showSuccess('Consultation success', 'Success')
    }, error=>{
      this.notification.showError(error.statusText,'ERRO')
    })
  }

}
