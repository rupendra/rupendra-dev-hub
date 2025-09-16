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
  { icon: 'person', title: 'Profile' },
  { icon: 'settings', title: 'Settings' },
  { icon: 'notifications', title: 'Notifications' },
  { icon: 'bar_chart', title: 'Charts' },
  { icon: 'event', title: 'Calendar' },
  { icon: 'assignment', title: 'Tasks' },
  { icon: 'shopping_cart', title: 'E-Commerce' },
  { icon: 'group', title: 'Users' },
  { icon: 'lock', title: 'Security' },
  { icon: 'map', title: 'Maps' },
  { icon: 'analytics', title: 'Reports' },
  { icon: 'folder', title: 'Files' },
  { icon: 'help', title: 'Help' },
  { icon: 'logout', title: 'Logout' }
];
}
