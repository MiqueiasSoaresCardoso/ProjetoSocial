import { Routes } from '@angular/router';

import { Home } from './pages/home/home'
import { Contribua } from './pages/contribua/contribua'
import { NossasAcoes } from './pages/nossas-acoes/nossas-acoes';
import { RecursosGratuitos } from './pages/recursos-gratuitos/recursos-gratuitos';

export const routes: Routes = [

    {
        path: '', //Rota Raiz (localhost)
        redirectTo: '/home', //Rota principal assim que a aplicação for executada
        pathMatch: 'full' //Garante que o caminho exato seja executado
    },
    {
        path: 'home', //Quando o path for...
        component: Home //Direciona para...
    },
    {
        path: 'nossas-acoes',
        component: NossasAcoes
    },
    {
        path: 'recursos-gratuitos',
        component: RecursosGratuitos
    }, 
    {
        path: 'contribua',
        component: Contribua
    },
];
