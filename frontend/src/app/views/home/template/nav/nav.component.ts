import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened: boolean;
  type = window.localStorage.getItem('type')
  constructor() { }

  ngOnInit(): void {
    console.log(this.type);
  }

}
