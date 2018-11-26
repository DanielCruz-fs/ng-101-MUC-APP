import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';


@Component({
  selector: 'app-filter-hero',
  templateUrl: './filter-hero.component.html',
  styleUrls: ['./filter-hero.component.css']
})
export class FilterHeroComponent implements OnInit {
  public filterHeroes: Hero[];
  public searchText: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( data => {
      console.log(data);
      this.searchText = data.hero;
      this.filterHeroes = this.heroesService.filterHero(data.hero);
      console.log(this.filterHeroes);
    });
  }

  ngOnInit() {
  }

}
