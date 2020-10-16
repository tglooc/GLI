import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon, PokemonDetail } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  id:string;
  selectedPokeId : string;
  searchPokemonName : string = '';
  pokemons : Pokemon[] = [];
  pokemonDetail: PokemonDetail;

  constructor(private pokeService: PokeAPIServiceService) {
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon(''+index, e.name, e.url));
      });
    }
    );
  }

  go(): void {
    if (this.selectedPokeId !== '') {
        this.pokeService
            .getPokemonInfo(this.selectedPokeId)
            .subscribe((data) => {
                this.pokemonDetail = data;
            });
    }
}

}
