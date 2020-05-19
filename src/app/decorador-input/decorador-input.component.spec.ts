import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorInputComponent } from './decorador-input.component';

describe('DecoradorInputComponent', () => {
  let component: DecoradorInputComponent;
  let fixture: ComponentFixture<DecoradorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
