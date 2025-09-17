import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

@Component({
  selector: 'app-buttoncomponent',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './buttoncomponent.html',
  styleUrl: './buttoncomponent.scss'
})
export class Buttoncomponent {

}
