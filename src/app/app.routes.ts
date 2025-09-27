import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Buttoncomponent } from './components/buttoncomponent/buttoncomponent';
import { Dialogcomponent } from './components/dialogcomponent/dialogcomponent';
import { MatBottomShetCmp } from './components/mat-bottom-shet-cmp/mat-bottom-shet-cmp';
import { DialogWithData } from './components/dialog-with-data/dialog-with-data';
import { Menucmp } from './components/menucmp/menucmp';
import { CustomSnackBar } from './components/custom-snack-bar/custom-snack-bar';


export const routes: Routes = [
    {path:'',component:Main},
    {path:'button',component:Buttoncomponent},
    {path:'dialog',component:Dialogcomponent},
    {path:'sheet',component:MatBottomShetCmp},
    {path:'dialogwithdata',component:DialogWithData},
    {path:'menu',component:Menucmp},
    {path:'snackbar',component:CustomSnackBar}
];
