import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideochatComponent } from './videochat/videochat.component';
import { HomeComponent } from './home/home.component';
 // Import Opentok library
import {OpentokModule} from 'ng2-opentok/dist/opentok.module';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'chatroom', component: VideochatComponent },
  { path: 'home', component: HomeComponent },

  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    VideochatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
        ),
  // Add you opentok module here with the api key for opentok
    OpentokModule.forRoot({apiKey: '45604412'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
