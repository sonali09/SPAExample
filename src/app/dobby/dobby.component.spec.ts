import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobbyComponent } from './dobby.component';

describe('DobbyComponent', () => {
  let component: DobbyComponent;
  let fixture: ComponentFixture<DobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
