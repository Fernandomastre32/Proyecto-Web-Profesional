import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORTANTE para el *ngFor
import { RouterModule } from '@angular/router'; // <--- IMPORTANTE para el routerLink
import { SITE_INDEX } from '../../data/site-index';
@Component({
  selector: 'app-mapa-sitio',
  imports: [CommonModule, RouterModule],
  templateUrl: './mapa-sitio.html',
  styleUrl: './mapa-sitio.css',
  standalone: true,
})
export class MapaSitio {
  }