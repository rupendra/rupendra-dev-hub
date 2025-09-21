import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MATERIAL_IMPORTS } from '../../../shared/material.imports';


@Component({
  selector: 'app-user-popup',
  imports: [MatDialogActions, MatDialogContent, MatDialogClose,...MATERIAL_IMPORTS],
  templateUrl: './user-popup.html',
  styleUrl: './user-popup.scss'
})
export class UserPopup {

}
