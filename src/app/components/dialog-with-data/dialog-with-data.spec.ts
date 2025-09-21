import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithData } from './dialog-with-data';

describe('DialogWithData', () => {
  let component: DialogWithData;
  let fixture: ComponentFixture<DialogWithData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogWithData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
