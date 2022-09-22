import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  ids: Array<String> = ['one', 'two', 'three', 'four']
  constructor() { }

  ngOnInit() {
  }

}
