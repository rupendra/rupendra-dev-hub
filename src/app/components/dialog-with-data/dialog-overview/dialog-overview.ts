import { Component, inject, model } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material.imports';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog-with-data';

@Component({
  selector: 'app-dialog-overview',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './dialog-overview.html',
  styleUrl: './dialog-overview.scss'
})
export class DialogOverview {
readonly data=inject<DialogData>(MAT_DIALOG_DATA);
}
