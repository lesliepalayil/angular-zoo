import { Component, OnInit, Input } from '@angular/core';
import { Animal } from "../../animals/models/animal";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimalService } from '../../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private animalService : AnimalService
  ) { }

  ngOnInit() {
    console.log("NG ON INIT: ", this.route.snapshot.paramMap.get('id'));
    this.loadAnimal();
  }
  
  goBack(): void {
    this.location.back();
  }

  loadAnimal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("ID:", id, this.route.snapshot);
    this.animalService.getAnimalById(id).subscribe( animal => {
      console.log("ANIMAL: ", animal);
      this.animal = animal 
    });
  }

}
