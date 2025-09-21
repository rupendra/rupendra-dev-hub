import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBottomShetCmp } from './mat-bottom-shet-cmp';

describe('MatBottomShetCmp', () => {
  let component: MatBottomShetCmp;
  let fixture: ComponentFixture<MatBottomShetCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBottomShetCmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBottomShetCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
