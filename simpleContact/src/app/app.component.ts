import { Component, Input } from '@angular/core';
import { Contact } from './contact-component/contact'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 showContacts :boolean = true;
  
 contact: string[] = ["ahlam", "hassen", "saleh"];

//  onToggle() : void{
//    this.showContacts = !this.showContacts;
//  }


  

}
