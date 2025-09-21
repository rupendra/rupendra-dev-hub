import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

@Component({
  standalone:true,
  selector: 'app-menucomponent',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './menucomponent.html',
  styleUrl: './menucomponent.scss',

})
export class Menucomponent {

}
