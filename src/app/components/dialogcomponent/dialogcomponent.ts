import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { MatDialog } from '@angular/material/dialog';
import { UserPopup } from './user-popup/user-popup';

@Component({
  selector: 'app-dialogcomponent',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './dialogcomponent.html',
  styleUrl: './dialogcomponent.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Dialogcomponent {
 readonly dialog=inject(MatDialog);
 openDialog(){
  const dialogRef=this.dialog.open(UserPopup,{
    data:"Rupendra",
    width:'90%',
    maxWidth:'100%'

  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log(`Dialog result :${result}`);
  })
 }
}
