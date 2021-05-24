import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InhabitantsComponent} from './inhabitants/inhabitants.component';
import { NewInhabitantComponent} from './new-inhabitant/new-inhabitant.component';
import { UpdateInhabitantComponent} from './update-inhabitant/update-inhabitant.component';
import { AppComponent} from './app.component';

const routes: Routes = [
	{path: '', redirectTo: 'inhabitants', pathMatch: 'full' },
	{path: 'inhabitants', component: InhabitantsComponent },
	{path: 'inhabitants/new', component: NewInhabitantComponent },
	{path: 'inhabitants/update/:id', component: UpdateInhabitantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
