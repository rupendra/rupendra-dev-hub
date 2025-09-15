import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

@Component({
  selector: 'app-main',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  cards = [
    { icon: 'smart_button', title: 'Buttons' },
    { icon: 'grid_view', title: 'Grid' },
    { icon: 'table_chart', title: 'Table' },
    { icon: 'dashboard', title: 'Dashboard' },
    { icon: 'person', title: 'Profile' }
  ]
}
