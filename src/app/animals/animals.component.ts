import { Component, OnInit } from '@angular/core';
import { Animal } from './models/animal';
import { AnimalService } from '../animal.service' 

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor( private animalService : AnimalService ) { };
  
  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.getAnimals().subscribe( animals => this.animals = animals.animals );
  };

  animals: Animal[];
  
  highestId: number = 2;

  selectedAnimal: Animal = null;

  onFocusOutName() {
    this.selectedAnimal = null;
  }

  onAddAnimal(animalName: string) {
    this.animals.push(
      {
        id: ++this.highestId,
        name: animalName
      }
    );
  }

}
