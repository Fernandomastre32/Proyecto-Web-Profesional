import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { Observable } from 'rxjs';
import { SearchApi, searchFilters} from '../../services/search';
import { SiteItem } from '../../data/site-index';


@Component({
  selector: 'app-busqueda',
  imports: [RouterModule, FormsModule, NgIf, NgFor, AsyncPipe],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
  standalone: true,
})
export class Busqueda {
  query = '';
  filters: searchFilters = { type: 'todos', section: 'todas' };

  sections: string[] = [];
  results$!: Observable<SiteItem[]>;
  constructor(private route: ActivatedRoute, private api: SearchApi) {
    this.sections = this.api.getSections();
    this.route.queryParamMap.subscribe(params => {
      const q = params.get('q') ?? '';
      this.query = q;
      this.doSearch();
  });
  }
  doSearch(): void{
    this.results$ = this.api.search(this.query, this.filters);
}

clear(): void{
  this.query = '';
  this.filters = { type: 'todos', section: 'todas' };
  this.doSearch();
}}