import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page',
    },

    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

export default routeConfig;