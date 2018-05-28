import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public title: string;
  public logo: string;

  constructor() { }

  ngOnInit() {
    this.title = 'KeepCoding';
    this.logo = '../../../assets/logo_angular.svg';
  }

}
