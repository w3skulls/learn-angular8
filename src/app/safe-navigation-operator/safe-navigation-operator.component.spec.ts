import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNavigationOperatorComponent } from './safe-navigation-operator.component';

describe('SaveNavigationOperatorComponent', () => {
  let component: SaveNavigationOperatorComponent;
  let fixture: ComponentFixture<SaveNavigationOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveNavigationOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNavigationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
