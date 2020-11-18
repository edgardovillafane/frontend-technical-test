import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { PilotListComponent } from './components/pilot-list/pilot-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'starships/:id', component: StarshipListComponent },
  { path: 'pilots/:id', component: PilotListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
