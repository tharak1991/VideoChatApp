import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideochatComponent } from './videochat/videochat.component';
import { HomeComponent } from './home/home.component';
 // Import Opentok library
import {OpentokModule} from 'ng2-opentok/dist/opentok.module';

@NgModule({
  declarations: [
    AppComponent,
    VideochatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

    // Add you opentok module here with the api key for opentok
    OpentokModule.forRoot({apiKey: '45604412'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
