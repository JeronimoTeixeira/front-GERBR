import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { MeasurerService } from 'src/app/service/measurer/measurer.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register-measurer',
  templateUrl: './register-measurer.component.html',
  styleUrls: ['./register-measurer.component.css']
})
export class RegisterMeasurerComponent implements OnInit {
  public users:Array<Select2OptionData> = [];
  public measurer = {
    id_user: '',
    city: '',
    state: '',
    district: '',
    street: '',
    cep: '',
    complement: '',
  }
  constructor(
    private measurerService: MeasurerService, 
    private userService: UserService,
    private notification: NotificationService
    ) { }

  ngOnInit(): void {
  }

  insert(){
    this.measurerService.registerMeasurer(this.measurer).subscribe(response=>{
      console.log(response)
      this.notification.showSuccess('Registered meter', 'Success')
    }, error=>{
      this.notification.showError(error.statusText,'ERRO')
    })
  }

}
