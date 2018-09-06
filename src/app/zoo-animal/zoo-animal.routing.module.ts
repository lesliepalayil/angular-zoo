import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent }   from './animal-detail/animal-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: AnimalDetailComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ZooAnimalRoutingModule { }