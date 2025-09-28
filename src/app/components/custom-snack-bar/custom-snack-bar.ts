import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Customesnackbar } from './customesnackbar/customesnackbar';
@Component({
  selector: 'app-custom-snack-bar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './custom-snack-bar.html',
  styleUrl: './custom-snack-bar.scss'
})
export class CustomSnackBar {
 private _snackBar=inject(MatSnackBar)
  openSnackBar(msg:string,action:string){
    this._snackBar.open(msg,action);
  }
  openCustomSnackbar(){
    this._snackBar.openFromComponent(Customesnackbar,{
      data:{
        message:"This is mahesh singh ji kalchuri",
        snackBar:this._snackBar
      },
       panelClass: ['success-snackbar']
    }
  )
  }
}
