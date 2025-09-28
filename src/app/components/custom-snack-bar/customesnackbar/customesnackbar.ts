import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customesnackbar',
  imports: [MatIcon, MatButton],
  templateUrl: './customesnackbar.html',
  styleUrl: './customesnackbar.scss'
})
export class Customesnackbar {
 readonly data=inject(MAT_SNACK_BAR_DATA);
 close(){
  this.data.snackBar.dismiss()
 }
}
