import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imageUrl:string="assets/apple.png";
  imageW: number = 110;
  imageH: number = 100;
}
