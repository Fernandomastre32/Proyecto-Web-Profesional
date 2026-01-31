import { Component } from '@angular/core';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-layout',
  imports: [Breadcrumb, RouterModule, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true
})
export class Layout {

  quickQuery = '';
  constructor(private router: Router) { }
  goSearch(): void{
    const q = (this.quickQuery || '').trim();
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }

}
