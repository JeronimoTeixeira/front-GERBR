import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterMeasurerComponent } from '../register-measurer/register-measurer.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialogUser() {
    const dialogRef = this.dialog.open(RegisterUserComponent);
  }
  openDialogMeasurer(){
    const dialogRef = this.dialog.open(RegisterMeasurerComponent);
  }

}
