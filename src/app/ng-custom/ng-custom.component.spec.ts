import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomComponent } from './ng-custom.component';

describe('NgCustomComponent', () => {
  let component: NgCustomComponent;
  let fixture: ComponentFixture<NgCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
