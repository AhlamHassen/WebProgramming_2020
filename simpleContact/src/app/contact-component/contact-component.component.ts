import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent {
  @Input()
  title: string = "Ms. Ahlam Hassen";
  
  @Input()
  address: string = "14 Thompson Cresent Broadmeadows";
  
  @Input()
  backgroundImage : string = "url('../../assets/gon.png')";
  constructor() { }

  getUrl(){
    return this.backgroundImage;
  }

}
