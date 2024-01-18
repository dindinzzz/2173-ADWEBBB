import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  imageUrl:string="assets/apple.png";
  imageW: number = 110;
  imageH: number = 100;

  staff = [
    { firstName: 'Denise', lastName: 'Diaz', email: 'denisedgsantos0702@gmail.com', role: 'User' },
    { firstName: 'James', lastName: 'Reynolds', email: 'james.reynolds@test.com', role: 'Admin' },
    { firstName: 'Djoan', lastName: 'Jaworski', email: 'djoan.jaworski@test.com', role: 'Admin' },
    { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User' },
    { firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' }
    ];

}

