import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elementos-sitio',
  imports: [CommonModule, FormsModule],
  templateUrl: './elementos-sitio.html',
  styleUrl: './elementos-sitio.css',
  standalone: true,
})
export class ElementosSitio {
 seccionActual = 'Búsqueda';
  busqueda = '';

  elementos = [
    'Barra de búsqueda',
    'Breadcrumbs',
    'Mapa del sitio',
    'Menú de navegación',
    'Rutas',
    'Componentes'
  ];

  cambiarSeccion(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.seccionActual = select.value;
  }

  filtrarElementos() {
    return this.elementos.filter(e =>
      e.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
