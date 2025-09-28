import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customesnackbar } from './customesnackbar';

describe('Customesnackbar', () => {
  let component: Customesnackbar;
  let fixture: ComponentFixture<Customesnackbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customesnackbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customesnackbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
