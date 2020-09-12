import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  year: number;

  constructor(){
    this.year = new Date().getFullYear();
  }
  
}
