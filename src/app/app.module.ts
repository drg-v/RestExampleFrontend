import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InhabitantsComponent } from './inhabitants/inhabitants.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewInhabitantComponent } from './new-inhabitant/new-inhabitant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateInhabitantComponent } from './update-inhabitant/update-inhabitant.component';

@NgModule({
  declarations: [
    AppComponent,
    InhabitantsComponent,
    NewInhabitantComponent,
    UpdateInhabitantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
