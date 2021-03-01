import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersApiService } from './../../shared/service/characters-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor( private router: ActivatedRoute, private characterSvc: CharactersApiService) { }

  jsonCharacter: any;
  ImgPicture: string = '';
  name: string = '';
  species: string = '';
  gender: string = '';
  status: string = '';
  origin: string = '';
  location: string = '';

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
    this.loadCharacter(Number(this.router.snapshot.params.id));
  }

  loadCharacter(id: number){
    this.characterSvc.getCharacter(id).subscribe(character => {
      console.log(character);
      this.name = character.name;
      this.species = character.species;
      this.gender = character.gender;
      this.status = character.status;
      this.origin = character.origin.name;
      this.location = character.location.name;
      this.ImgPicture = character.image;
    });

  }

}
