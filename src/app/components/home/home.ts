import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
userName: string = 'Laith alshaar';
img:string = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85';
mydata:string='Custom Attribute Data';


changedata(e: InputEvent): void {
  console.log(e.data);
}
}
