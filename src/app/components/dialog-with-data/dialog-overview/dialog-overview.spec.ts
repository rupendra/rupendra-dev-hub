import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverview } from './dialog-overview';

describe('DialogOverview', () => {
  let component: DialogOverview;
  let fixture: ComponentFixture<DialogOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
