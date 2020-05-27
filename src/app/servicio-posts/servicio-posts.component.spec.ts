import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPostsComponent } from './servicio-posts.component';

describe('ServicioPostsComponent', () => {
  let component: ServicioPostsComponent;
  let fixture: ComponentFixture<ServicioPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
