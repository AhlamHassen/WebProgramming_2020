import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 showContacts :boolean = false;
  
 contact: string[] = ["ahlam", "hassen", "saleh"];

 onToggle() : void{
   this.showContacts = !this.showContacts;
 }

 // @Input()
  // contact : Contact[] = [ 
  //   new Contact("Mr", "Gon Freecs", "123 Somewhere in Japan", "url('assets/squidward.png')")
    
  // ];

}
