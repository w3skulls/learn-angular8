import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPosts2Component } from './servicio-users.component';

describe('ServicioUsersComponent', () => {
  let component: ServicioPosts2Component;
  let fixture: ComponentFixture<ServicioPosts2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPosts2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPosts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
