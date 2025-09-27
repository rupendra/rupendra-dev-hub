import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
cards = [
  { icon: 'smart_button', title: 'Buttons', url: '/button' },
  { icon: 'grid_view', title: 'dialog', url: '/dialog' },
  { icon: 'table_chart', title: 'bottom-sheet', url: '/sheet' },
  { icon: 'dashboard', title: 'dialog-data', url: '/dialogwithdata' },
  { icon: 'menus', title: 'menu', url: '/menu' },
  { icon: 'settings', title: 'snackbar', url: '/snackbar' },
  { icon: 'notifications', title: 'Notifications', url: '/notifications' },
  { icon: 'bar_chart', title: 'Charts', url: '/charts' },
  { icon: 'event', title: 'Calendar', url: '/calendar' },
  { icon: 'assignment', title: 'Tasks', url: '/tasks' },
  { icon: 'shopping_cart', title: 'E-Commerce', url: '/ecommerce' },
  { icon: 'group', title: 'Users', url: '/users' },
  { icon: 'lock', title: 'Security', url: '/security' },
  { icon: 'map', title: 'Maps', url: '/maps' },
  { icon: 'analytics', title: 'Reports', url: '/reports' },
  { icon: 'folder', title: 'Files', url: '/files' },
  { icon: 'help', title: 'Help', url: '/help' },
  { icon: 'logout', title: 'Logout', url: '/logout' },
    { icon: 'folder', title: 'Files', url: '/files' },
  { icon: 'help', title: 'Help', url: '/help' },
  { icon: 'logout', title: 'Logout', url: '/logout' }
  
];

}
