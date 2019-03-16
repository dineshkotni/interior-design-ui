import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidListComponent } from '../components/bid-list/bid-list.component';
import { BidDetailsComponent } from '../components/bid/bid-details.component';


const routes: Routes = [
  {
    path: 'bid-list',
    component: BidListComponent
  },
  {
    path: 'bid/:id',
    component: BidDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
