import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ZooAnimalRoutingModule } from './zoo-animal.routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZooAnimalRoutingModule
  ],
  declarations: [
    AnimalDetailComponent
  ]
})
export class ZooAnimalModule { }
