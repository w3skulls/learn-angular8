import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioaliasComponent } from './usuarioalias.component';

describe('UsuarioaliasComponent', () => {
  let component: UsuarioaliasComponent;
  let fixture: ComponentFixture<UsuarioaliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioaliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioaliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
