import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchcaseComponent } from './ng-switchcase.component';

describe('NgSwitchcaseComponent', () => {
  let component: NgSwitchcaseComponent;
  let fixture: ComponentFixture<NgSwitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
