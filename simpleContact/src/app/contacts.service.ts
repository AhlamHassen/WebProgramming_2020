import { Injectable } from '@angular/core';
import { Contact } from './contact-component/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts : Contact[] = [ 
    new Contact("Mr", "Gon Freecs", "123 Somewhere in Japan", "url('assets/gon.png')"),
    new Contact("Mr", "Killua Zoldyick", "1212 Melbourne Victoria", "url('assets/killua.jpg')"),
    new Contact("Mr", "Squidward", "346 somewhere in the ocean", "url('assets/squidward.png')"),
    new Contact("Mr", "Unknown", "Unkown", "url('assets/profile.png')")
    
  ];

  showContacts: boolean = true;

  constructor() { }
}
