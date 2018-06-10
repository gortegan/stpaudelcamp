import { HistoryComponent } from './history/history.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, data: {titulo : 'Home' },
  },
  {
    path: 'history', component: HistoryComponent, data: {titulo : 'Historia' }
  }
];

export const APP_ROUTES =  RouterModule.forRoot(appRoutes, {useHash: true});
