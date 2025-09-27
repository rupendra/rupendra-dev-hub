import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

@Component({
  selector: 'app-custom-snack-bar',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './custom-snack-bar.html',
  styleUrl: './custom-snack-bar.scss'
})
export class CustomSnackBar {

  openSnackBar(msg:string,action:string){

  }
}
