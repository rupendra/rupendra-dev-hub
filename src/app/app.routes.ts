import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Buttoncomponent } from './components/buttoncomponent/buttoncomponent';

export const routes: Routes = [
    {path:'',component:Main},
    {path:'button',component:Buttoncomponent}
];
