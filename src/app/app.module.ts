import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameDetailsControlsComponent } from './components/game-details-controls/game-details-controls.component';
import { UserSelectionsComponent } from './components/user-selections/user-selections.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    GameSearchComponent,
    GameDetailsComponent,
    GameDetailsControlsComponent,
    UserSelectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
