import { Component } from '@angular/core';
import { InhabitantsService } from './inhabitants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inhabitants;
  public columnsToDisplay = ["ID", "Surname", "Name", "Patronymic", "Flat ID"]

  constructor(public service: InhabitantsService) {
  	this.service.getAll()
    .subscribe((data) => {this.inhabitants = data; console.log(this.inhabitants);});
  }

}
