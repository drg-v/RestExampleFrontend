import { Component, OnInit } from '@angular/core';
import { InhabitantsService } from '../inhabitants.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Inhabitant } from '../inhabitant';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-inhabitant',
  templateUrl: './update-inhabitant.component.html',
  styleUrls: ['./update-inhabitant.component.css']
})
export class UpdateInhabitantComponent implements OnInit {

	public inhabitant;

	inhabitantForm = new FormGroup({
	name: new FormControl('', Validators.required),
	surname: new FormControl('', Validators.required),
	patronymic: new FormControl('', Validators.required),
	flat_id: new FormControl('', Validators.required)
	});

  constructor(private service: InhabitantsService,
			  private route: ActivatedRoute,
			  private router: Router) { }

  ngOnInit(): void {
  	    const inhabitantId: string = this.route.snapshot.paramMap.get('id');
    	this.service.get(inhabitantId).subscribe(data => { this.inhabitant = data; console.log(this.inhabitant)});

  }

  onSubmit() {
  	let instance = {hab_id: this.inhabitant.hab_id as number,
  					name: this.inhabitantForm.get("name").value as string,
  					surname: this.inhabitantForm.get("surname").value as string,
  					patronymic: this.inhabitantForm.get("patronymic").value as string,
  					flat_id: this.inhabitantForm.get("flat_id").value as number};

  	this.service.update(instance);
  	this.router.navigate(['/inhabitants']);
  }

}
