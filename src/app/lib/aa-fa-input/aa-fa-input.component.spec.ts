import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaFaInputComponent } from './aa-fa-input.component';

describe('AaFaInputComponent', () => {
  let component: AaFaInputComponent;
  let fixture: ComponentFixture<AaFaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
