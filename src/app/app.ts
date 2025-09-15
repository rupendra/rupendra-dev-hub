import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './shared/material.imports';
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...MATERIAL_IMPORTS, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularMat');
}
