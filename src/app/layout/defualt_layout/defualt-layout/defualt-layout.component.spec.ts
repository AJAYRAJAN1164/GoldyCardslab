import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtLayoutComponent } from './defualt-layout.component';

describe('DefualtLayoutComponent', () => {
  let component: DefualtLayoutComponent;
  let fixture: ComponentFixture<DefualtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefualtLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
