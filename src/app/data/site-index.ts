export type SiteItemType = 'pagina' | 'seccion';
export type SiteItem = {
  id: string;
  tittle: string;
  description: string;
  path: string;
  type: SiteItemType;
  section: string;
  keywords: string[];
  otro?: String;
  
}

export const SITE_INDEX: SiteItem[]= [
    {
    id: 'inicio',
  tittle: 'inicio',
  description: 'pagina principal del sitio de practica',
  path: '/',
  type: 'pagina',
  section: 'Estructura del sitio',
  keywords: ['Inicio', 'home', 'principal', 'estructura'],
  otro: 'asdasda'
},
{
    id: 'elementos',
  tittle: 'elemetos del sitio',
  description: 'identifico que componen un sitio web',
  path: '/elementos',
  type: 'pagina',
  section: 'Estructura del sitio',
  keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout'],
},
{
    id: 'menu',
  tittle: 'menu',
  description: 'elementos principales del menu y su utilidad',
  path: '/menu',
  type: 'pagina',
  section: 'navegacion',
  keywords: ['menu', 'navegacion', 'navbar', 'links', 'persistente']
},
{
id: 'breadcrums',
  tittle: 'breadcrums',
  description: 'describe el funcionamiento de los breadcrumbs',
  path: '/breadcrums',
  type: 'pagina',
  section: 'navegacion',
  keywords: ['breadcrumbs', 'migas', 'ruta', 'navegacion', 'ux']
},
{
id: 'mapa',
  tittle: 'mapa del sitio',
  description: 'diseño del mapa y su relacion con la navegacion',
  path: '/mapa-sitio',
  type: 'pagina',
  section: 'estructura del sitio',
  keywords: ['mapa', 'sitio', 'sitemap', 'estructura', 'rutas']
},
{
id: 'error404',
  tittle: 'Error 404',
  description: 'Paginas para rutas que no existen',
  path: '/no-existe',
  type: 'seccion',
  section: 'navegacion',
  keywords: ['404', 'error', 'no encontrado', 'ruta']
  
}

]