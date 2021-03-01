import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { CharactersApiService, URL_API_START, } from './../../shared/service/characters-api.service';
import { Characters } from './../../shared/models/character-model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  jsonResponse: Characters | undefined;
  allCharacters: any;
  prev: any;
  next: any;

  // MatPaginator Inputs
  length: any;
  pageSize = 20;
  pageSizeOptions: number[] = [20];
  pageIndex = 0;

  constructor(private characterSvc: CharactersApiService) { }

  ngOnInit(): void {

    this.loadCharactersPage();

  }

  loadCharactersPage(){
    this.characterSvc.getCharacters(URL_API_START).subscribe(characters => {
      this.jsonResponse = new Characters(characters);
      this.allCharacters = [];
      this.allCharacters = this.jsonResponse.results;
      this.length = this.jsonResponse.info.count;
      this.prev = this.jsonResponse.info.prev;
      this.next = this.jsonResponse.info.next;
    });

  }

  switchPages(event: PageEvent){
    let urlPage;
    if(event.pageIndex > this.pageIndex){
      urlPage = this.next;
      this.pageIndex = this.pageIndex + 1;
    }else{
      urlPage = this.prev;
      this.pageIndex = this.pageIndex - 1;
    }
    this.characterSvc.getCharacters(urlPage).subscribe(characters => {
      this.jsonResponse = new Characters(characters);
      this.allCharacters = [];
      this.allCharacters = this.jsonResponse.results;
      this.length = this.jsonResponse.info.count;
      this.prev = this.jsonResponse.info.prev;
      this.next = this.jsonResponse.info.next;
    });
  }

}
