import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

const routes: Routes = [
  {path: 'home', component: CardsSectionComponent},
  {path: 'details/:catName', component: CatDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
