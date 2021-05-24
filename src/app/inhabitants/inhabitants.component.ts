import { Component, OnInit } from '@angular/core';
import { InhabitantsService } from '../inhabitants.service';

@Component({
  selector: 'app-inhabitants',
  templateUrl: './inhabitants.component.html',
  styleUrls: ['./inhabitants.component.css']
})
export class InhabitantsComponent implements OnInit {

    public inhabitants;
  public columnsToDisplay = ["ID", "Surname", "Name", "Patronymic", "Flat ID", "edit", "delete"]

  constructor(public service: InhabitantsService) {
  	this.service.getAll()
    .subscribe((data) => {this.inhabitants = data; console.log(this.inhabitants);});
  }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    console.log("deleting");
    console.log(id);
    this.service.delete(id);
    this.service.getAll()
    .subscribe((data) => {this.inhabitants = data; console.log(this.inhabitants);});
  }

}
