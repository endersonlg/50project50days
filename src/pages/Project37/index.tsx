import axios from "axios";
import { Card, ContainerProject37 } from "./styles";
import { useEffect, useState } from "react";

type Type = 'fire'|'grass'|'electric'|'water'|'ground'|'rock'|'fairy'|'poison'|'bug'|'dragon'|'psychic'|'flying'|'fighting'|'normal';

interface ResponseGetPokemon{
  data:{
    pokemon_v2_pokemon:{
      id:number;
      name:string,
      pokemon_v2_pokemontypes:{
        pokemon_v2_type:{
          name:Type
        }
      }[]
    }[]
  }
}

interface Pokemon{
  name:string;
  id:number;
  type:Type
}


export function Project37(){
  const [pokemons,setPokemons] = useState<Pokemon[]>([])

  useEffect(() =>{
    async function getPokemons (){
      let i = 0;
      while(i<150){
        const {data:{data}} = await axios.post<ResponseGetPokemon>('https://beta.pokeapi.co/graphql/v1beta',{query:`
          query {
            pokemon_v2_pokemon(limit: 1,offset:${i}) {
              name
              id
              pokemon_v2_pokemontypes(limit: 1) {
                pokemon_v2_type {
                  name
                }
              }
            }
          }
        `})

        setPokemons(state => [...state,
            {
              id:data.pokemon_v2_pokemon[0].id,
              name:data.pokemon_v2_pokemon[0].name,
              type:data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name
            }
          ]
        );

        i++;
      }
     
    }

    getPokemons()
  },[])

  return (
    <ContainerProject37>
      <h1>Pokedex</h1>
      <div>
        {
          pokemons.map(pokemon=>(
            <Card key={pokemon.id} type={pokemon.type}>
              <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" />
              <span>#{pokemon.id.toString().padStart(3,'0')}</span>
              <h3>{pokemon.name}</h3>
              <small>Type: {pokemon.type}</small>
            </Card>
          ))
        }
       
      </div>
    </ContainerProject37>
  )
}