import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes, PokemonDetail} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) {  }

  getPokemons(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemonInfo(id : string): Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon/'+id+'/');
  }

}
