import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingyeventosComponent } from './bindingyeventos.component';

describe('BindingyeventosComponent', () => {
  let component: BindingyeventosComponent;
  let fixture: ComponentFixture<BindingyeventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingyeventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingyeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
