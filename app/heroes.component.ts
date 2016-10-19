import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
     styleUrls: ['heroes.component.css']
 })
export class HeroesComponent implements OnInit {

  constructor(
      private heroService: HeroService,
      private router: Router
  ) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero : Hero;
    heroes: Hero[];
    
    getHeroes(): void {
      this.heroService.getHeros().then(heroes => this.heroes = heroes)
      //this.heroes = this.heroService.getHeros();
    }

    onSelect(hero:Hero): void {
        this.selectedHero = hero;
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h != hero);
                if(this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
