import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menucmp } from './menucmp';

describe('Menucmp', () => {
  let component: Menucmp;
  let fixture: ComponentFixture<Menucmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menucmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menucmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
