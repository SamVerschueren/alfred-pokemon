'use strict';
const alfy = require('alfy');
const pokemon = require('pokemon');

// Grab the language from the user config
const language = alfy.userConfig.get('language', 'en');

const pokemonList = pokemon
	.all(language)
	.map((name, index) => ({
		id: index + 1,
		name
	}));

const pokemons = alfy
	.inputMatches(pokemonList, 'name')
	.map(({id, name}) => ({
		title: name,
		subtitle: `#${id}`,
		arg: `https://pokemondb.net/pokedex/${id}`,
		quicklookurl: `https://pokemondb.net/pokedex/${id}`
	}));

alfy.output(pokemons);
