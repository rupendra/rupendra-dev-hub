import { Component, inject, model, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverview } from './dialog-overview/dialog-overview';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-with-data',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './dialog-with-data.html',
  styleUrl: './dialog-with-data.scss'
})

export class DialogWithData {
  readonly animal = signal('');
  readonly name =model('');
  readonly dialog=inject(MatDialog);

openDialog(){
  const dialogRef=this.dialog.open(DialogOverview,{
    data:{name:this.name(),animal:this.animal()}
  });
  dialogRef.afterClosed().subscribe(result=>{
    if(result!=undefined){
      this.animal.set(result);
    }
  })
}
}
