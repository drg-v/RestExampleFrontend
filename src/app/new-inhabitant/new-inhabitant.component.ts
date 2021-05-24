import { Component, OnInit } from '@angular/core';
import { InhabitantsService } from '../inhabitants.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Inhabitant } from '../inhabitant';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-new-inhabitant',
  templateUrl: './new-inhabitant.component.html',
  styleUrls: ['./new-inhabitant.component.css']
})
export class NewInhabitantComponent implements OnInit {


	inhabitantForm = new FormGroup({
		name: new FormControl('', Validators.required),
		surname: new FormControl('', Validators.required),
		patronymic: new FormControl('', Validators.required),
		flat_id: new FormControl('', Validators.required)
		});
	
  constructor(public service: InhabitantsService, private router: Router) {
  	
  }

  ngOnInit(): void {
  }

  onSubmit() {
  	let instance = {hab_id: 0 as number,
  					name: this.inhabitantForm.get("name").value as string,
  					surname: this.inhabitantForm.get("surname").value as string,
  					patronymic: this.inhabitantForm.get("patronymic").value as string,
  					flat_id: this.inhabitantForm.get("flat_id").value as number};

  	this.service.create(instance);
  	this.router.navigate(['/inhabitants']);
  }

}
