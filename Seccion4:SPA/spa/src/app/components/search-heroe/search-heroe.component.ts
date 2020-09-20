import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {

  heroes: any[];

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.searchHeroes(params['term']);
      console.log(this.heroes);
    })

  }

}
