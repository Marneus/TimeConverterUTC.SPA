import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimezoneListComponent } from './timezone-list/timezone-list.component';
import { TimezoneService } from './_services/timezone.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      TimezoneListComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      TimezoneService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
