import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today: number= Date.now()
  constructor(private route: Router) {}
 
  todopage(){
    this.route.navigate(['/to-do'])
 }
}
