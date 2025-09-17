import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttoncomponent } from './buttoncomponent';

describe('Buttoncomponent', () => {
  let component: Buttoncomponent;
  let fixture: ComponentFixture<Buttoncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttoncomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttoncomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
