import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInhabitantComponent } from './new-inhabitant.component';

describe('NewInhabitantComponent', () => {
  let component: NewInhabitantComponent;
  let fixture: ComponentFixture<NewInhabitantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInhabitantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInhabitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
