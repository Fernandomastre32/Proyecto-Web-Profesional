import { Component, signal } from '@angular/core';
import { Layout } from './layout/layout';
import { Inicio } from './pages/inicio/inicio';


@Component({
  selector: 'app-root',
  imports: [Layout,Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sitio-estructura');
}
