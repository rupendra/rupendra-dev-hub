import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Raiseticket } from './raiseticket/raiseticket';

@Component({
  selector: 'app-mat-bottom-shet-cmp',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './mat-bottom-shet-cmp.html',
  styleUrl: './mat-bottom-shet-cmp.scss'
})
export class MatBottomShetCmp {
 private _bottomSheetRef=inject(MatBottomSheet);
 openBottomSheet(){
  this._bottomSheetRef.open(Raiseticket,{
    data:{
      popupType:'User Data',
      aemData:'Rupendra',
    }
  });
 }
 
}
