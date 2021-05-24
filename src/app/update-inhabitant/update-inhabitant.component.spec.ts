import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInhabitantComponent } from './update-inhabitant.component';

describe('UpdateInhabitantComponent', () => {
  let component: UpdateInhabitantComponent;
  let fixture: ComponentFixture<UpdateInhabitantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInhabitantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInhabitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
