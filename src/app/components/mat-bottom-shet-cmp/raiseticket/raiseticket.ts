import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-raiseticket',
  imports: [],
  templateUrl: './raiseticket.html',
  styleUrl: './raiseticket.scss'
})
export class Raiseticket {
  aemData:any;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) data:any){
    this.aemData=data;
    console.log(this.aemData);
  }
}
