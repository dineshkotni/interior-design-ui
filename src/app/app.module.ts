import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidListComponent } from '../components/bid-list/bid-list.component';
import { BidDetailsComponent } from '../components/bid/bid-details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BidListComponent,
    BidDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [BidListComponent, BidDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
