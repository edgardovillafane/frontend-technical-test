import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PilotListComponent } from './components/pilot-list/pilot-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { PilotDetailsComponent } from './components/pilot-details/pilot-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipListComponent,
    NavbarComponent,
    PilotListComponent,
    StarshipDetailsComponent,
    PilotDetailsComponent,
    PaginatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
