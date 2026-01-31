import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { SITE_INDEX, SiteItem } from "../data/site-index";

export type searchFilters = {
    type?: 'todos'|'paginas' | 'seccion';
    section?: 'todas' | string;
};

@Injectable({providedIn: 'root'})
export class SearchApi{
search(query: string, filters: searchFilters): Observable<SiteItem[]>{
    const q = (query || '').trim().toLowerCase();
    let data = {...SITE_INDEX};
    if(q.length > 0){
        data = data.filter(item => {
            const haystack = 
            (item.tittle + ' ' + item.description + '' + item.keywords.join(' ')).toLowerCase();
            return haystack.includes(q);
        });

        if(filters.type && filters.type !== 'todos'){
            data = data.filter(item => item.type === filters.type);
        }

        if(filters.section && filters.section !== 'todas'){
            data = data.filter(item => item.section === filters.section);      
        }
    }
    return of(data).pipe(delay(200));
}

getSections(): string[] {
    const set = new Set(SITE_INDEX.map(x => x.section));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}
}