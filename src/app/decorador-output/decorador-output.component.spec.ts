import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorOutputComponent } from './decorador-output.component';

describe('DecoradorOutputComponent', () => {
  let component: DecoradorOutputComponent;
  let fixture: ComponentFixture<DecoradorOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradorOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
