import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';

export const routes: Routes = [
    {path: 'first-component/:name', component: FirstComponent},
    {path: 'second-component', component: SecondComponent, children: [
        {path: 'first-child', component: FirstChildComponent},
        {path: 'second-child', component: SecondChildComponent}
    ]},
];
