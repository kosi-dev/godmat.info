<script lang="ts">
	import Recommended from './recommended.json';
  	import Chart from 'svelte-frappe-charts';

	export let nutrition: object;

	let selectedGender = 'Male';
	let selectedAge = '18-30 y';
	let selectedWeight = 100;
	let donutData = {
		labels: ['Karbohydrat', 'Protein', 'Fett'],
		datasets: [{ values: [
			nutrition['Karbo'] * 4,
			nutrition['Protein'] * 4,
			nutrition['Fett'] * 9
		] }]
	};
	$: vitaminsData = customData(
		['Vit A', 'Vit D', 'Vit E', 'Vit B1', 'Vit B2', 'Vit B3', 'Vit B6', 'Folat', 'Vit C'],
		selectedGender,
		selectedAge,
		selectedWeight
	);
	$: mineralsData = customData(
		['Ca', 'P', 'K', 'Mg', 'Fe', 'Zn', 'Cu', 'I', 'Se'],
		selectedGender,
		selectedAge,
		selectedWeight
	);

	function customData(keys, selectedGender, selectedAge, selectedWeight) {
		let data = [];
		for (let key of keys) {
			data.push((nutrition[key] / Recommended[key][selectedGender][selectedAge] * selectedWeight / 100).toFixed(2));
		}
		return {
			labels: keys,
			datasets: [{ values: data }]
		};
	}
</script>

{#if nutrition && nutrition != {}}
	<h2>Næringsinnhold, per
		<select bind:value={selectedWeight}>
			{#each [50, 100, 200, 500, 1000] as weight}
				<option value={weight}>
					{weight}
				</option>
			{/each}
		</select> gram.
	</h2>

	<h3>Energi</h3>

	<p>{nutrition['Energi2'] * selectedWeight / 100} kcal, med følgende fordeling:</p>
	{#if donutData}
		<Chart data={donutData} type="donut" />
	{/if}

	<h3>Vitaminer og mineraler</h3>
	<p>
		Prosent av anbefalt daglig inntak for
		<select bind:value={selectedGender}>
			{#each ['Male', 'Female'] as gender}
				<option value={gender}>
					{gender}
				</option>
			{/each}
		</select>

		<select bind:value={selectedAge}>
			{#each ['6-11 m', '12-23 m', '2-5 y', '6-9 y', '10-13 y', '14-17 y', '18-30 y', '31-60 y', '61-74 y', '>75 y'] as age}
				<option value={age}>
					{age}
				</option>
			{/each}
		</select>
	</p>

	{#if vitaminsData}
		<Chart data={vitaminsData} type="bar" />
	{/if}
	{#if mineralsData}
		<Chart data={mineralsData} type="bar" />
	{/if}
{/if}
