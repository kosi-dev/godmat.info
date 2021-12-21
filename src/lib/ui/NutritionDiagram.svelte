<script lang="ts">
	import { onMount } from 'svelte';
	import Recommended from './recommended.json';

	export let nutrition: object;

	let donutChart;
	let selectedGender = 'Male';
	let selectedAge = '18-30 y';
	let barChartVitamins;
	let barChartMinerals;

	function createDonutChart(keys, data: Array<number> = null) {
		if (data == null) {
			data = [];
			for (let key of keys) {
				data.push(nutrition[key]);
			}
		}
		return {
			chart: {
				type: 'donut',
				height: '350'
			},
			series: data,
			labels: keys
		};
	}

	const chart = (node, options) => {
		let myChart = new ApexCharts(node, options);
		myChart.render();

		return {
			update(options) {
				myChart.updateOptions(options);
			},
			destroy() {
				myChart.destroy();
			}
		};
	};

	onMount(async () => {
		let data = [];
		data.push(nutrition['Karbo'] * 4);
		data.push(nutrition['Protein'] * 4);
		data.push(nutrition['Fett'] * 9);
		donutChart = createDonutChart(['Karbohydrat', 'Protein', 'Fett'], data);
		rebuildCustomBarCharts();
	});

	function rebuildCustomBarCharts() {
		barChartVitamins = customBarChart(
			['Vit A', 'Vit D', 'Vit E', 'Vit B1', 'Vit B2', 'Vit B3', 'Vit B6', 'Folat', 'Vit C'],
			selectedGender,
			selectedAge
		);
		barChartMinerals = customBarChart(
			['Ca', 'P', 'K', 'Mg', 'Fe', 'Zn', 'Cu', 'I', 'Se'],
			selectedGender,
			selectedAge
		);
	}

	function customBarChart(keys, selectedGender, selectedAge) {
		let data = [];
		for (let key of keys) {
			data.push((nutrition[key] / Recommended[key][selectedGender][selectedAge]).toFixed(2));
		}
		return {
			chart: {
				type: 'bar',
				height: '350'
			},
			series: [
				{
					name: 'Percentage of daily recommendayion',
					data: data
				}
			],
			xaxis: {
				categories: keys
			},
			yaxis: {
				min: 0.0,
				max: 1.0
			}
		};
	}
</script>

{#if nutrition && nutrition != {}}
	<h2>Næringsinnhold, per 100 g</h2>

	<h3>Energi</h3>

	<p>{nutrition['Energi2']} kcal, med følgende fordeling:</p>
	{#if donutChart}
		<div use:chart={donutChart} />
	{/if}

	<h3>Vitaminer og mineraler</h3>
	<p>
		Prosent av anbefalt daglig inntak for
		<select bind:value={selectedGender} on:change={rebuildCustomBarCharts}>
			{#each ['Male', 'Female'] as gender}
				<option value={gender}>
					{gender}
				</option>
			{/each}
		</select>

		<select bind:value={selectedAge} on:change={rebuildCustomBarCharts}>
			{#each ['6-11 m', '12-23 m', '2-5 y', '6-9 y', '10-13 y', '14-17 y', '18-30 y', '31-60 y', '61-74 y', '>75 y'] as age}
				<option value={age}>
					{age}
				</option>
			{/each}
		</select>
	</p>

	{#if barChartVitamins}
		<div use:chart={barChartVitamins} />
	{/if}
	{#if barChartMinerals}
		<div use:chart={barChartMinerals} />
	{/if}
{/if}
