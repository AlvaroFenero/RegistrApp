import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registrar',
    loadComponent: () => import('./pages/registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'alumno',
    loadComponent: () => import('./pages/alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'profesor',
    loadComponent: () => import('./pages/profesor/profesor.page').then( m => m.ProfesorPage)
  },
  {
    path: 'clase',
    loadComponent: () => import('./pages/clase/clase.page').then( m => m.ClasePage)
  },
  {
    path: 'clase-detalle',
    loadComponent: () => import('./pages/registrar/clase-detalle/clase-detalle.page').then( m => m.ClaseDetallePage)
  },
  {
    path: 'clase-detalle/:id_clase',
    loadComponent: () => import('./pages/registrar/clase-detalle/clase-detalle.page').then( m => m.ClaseDetallePage)
  },

  

  // {
  //   path: 'qr',
  //   loadComponent: () => import('./qr/qr.page').then( m => m.QrPage)
  // },

];
