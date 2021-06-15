'use strict';
const test = require('ava');
const alfyTest = require('alfy-test');

test('default', async t => {
	const alfy = alfyTest();
	const result = await alfy('mew');

	t.deepEqual(result, [
		{
			title: 'Mewtwo',
			subtitle: '#150',
			arg: 'https://pokemondb.net/pokedex/150',
			quicklookurl: 'https://pokemondb.net/pokedex/150'
		},
		{
			title: 'Mew',
			subtitle: '#151',
			arg: 'https://pokemondb.net/pokedex/151',
			quicklookurl: 'https://pokemondb.net/pokedex/151'
		}
	]);
});

test('de', async t => {
	const alfy = alfyTest({
		userConfig: {
			language: 'de'
		}
	});

	const result = await alfy('mew');

	t.deepEqual(result, [
		{
			title: 'Mewtu',
			subtitle: '#150',
			arg: 'https://pokemondb.net/pokedex/150',
			quicklookurl: 'https://pokemondb.net/pokedex/150'
		},
		{
			title: 'Mew',
			subtitle: '#151',
			arg: 'https://pokemondb.net/pokedex/151',
			quicklookurl: 'https://pokemondb.net/pokedex/151'
		}
	]);
});
