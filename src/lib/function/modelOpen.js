import { writable } from "svelte/store";
import tafsser from "../resorce/tafseer.json";
export let ModelPage = writable(false);
export let ModelIndex = writable(1);

export const openModel = (/** @type {string} */ numberOfAaya) => {
  // @ts-ignore
  const Note = tafsser[numberOfAaya];
  const numbersOfAya = numberOfAaya.slice(6).split("to");

  return { Note, numbersOfAya };
};
