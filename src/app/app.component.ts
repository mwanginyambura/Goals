// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Goals';
// }
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <h1> My Goals </h1>
//     <p> My goal for today is {{goal}} </p>
//   `
// })
// export class AppComponent {
//   goal = 'Watch Finding Nemo';
// }
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   constructor(){}
// }
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//     goals: string[];
//
//   constructor(){
//
//     this.goals = ["Watch Finding Nemo","Buy Cookies","Get new phone case"];
//   }
// }

import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
      new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14)),
        new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018, 6, 9)),
        new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018, 1, 12)),
        new Goal(4, 'Get Dog Food', 'Pupper likes expensive sancks', new Date(2018, 0, 18)),
        new Goal(5, 'Solve math homework', 'Damn Math', new Date(2018, 2, 14)),
        new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2018, 3, 14)),
    ]
}
