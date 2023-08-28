import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

export const foodId = writable(nanoid(12));
