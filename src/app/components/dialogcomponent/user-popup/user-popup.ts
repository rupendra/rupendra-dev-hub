import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MATERIAL_IMPORTS } from '../../../shared/material.imports';


@Component({
  selector: 'app-user-popup',
  imports: [MatDialogActions, MatDialogContent, MatDialogClose,...MATERIAL_IMPORTS],
  templateUrl: './user-popup.html',
  styleUrl: './user-popup.scss'
})
export class UserPopup implements OnInit{
 readonly data=inject<string>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }
  //  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) data:any){
  //   this.aemData=data;
  //   console.log(this.aemData);
  // }
}
