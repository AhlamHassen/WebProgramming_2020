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

 onToggle() : void{
   this.showContacts = !this.showContacts;
 }


  contacts : Contact[] = [ 
    new Contact("Mr", "Gon Freecs", "123 Somewhere in Japan", "url('assets/gon.png')"),
    new Contact("Mr", "Killua Zoldyick", "1212 Melbourne Victoria", "url('assets/killua.jpg')"),
    new Contact("Mr", "Squidward", "346 somewhere in the ocean", "url('assets/squidward.png')"),
    new Contact("Mr", "Unknown", "Unkown", "url('assets/profile.png')")
    
  ];

}
