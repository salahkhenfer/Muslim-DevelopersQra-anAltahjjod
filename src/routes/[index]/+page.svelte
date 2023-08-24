<script>
// @ts-nocheck



  import Albasmala from '$lib/components/Albasmala.svelte';
  import Ayat from '$lib/components/Ayat.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Model from '$lib/components/model.svelte';
  import {  ModelPage, openModel } from '$lib/function/modelOpen';
  import fullData from "$lib/resorce/fullinformaion.json"

    /** @type {import('./$types').PageData} */
    export let data;


    $: ModelPage1 = $ModelPage; 
 



    // @ts-ignore
// console.log(idex)
let active=true
let valu 
let  id
const handleFoo = (/** @type {{ detail: any; }} */ e) => {
  const  v  = e.detail
  ModelPage1 = true
  valu =v.ay
  id =v.id


}





</script>

<Nav index = { data.index } active  />
<Albasmala/>
<Ayat index={data}   on:childValue={handleFoo} />
{#if ModelPage1 }
  <Model  valu = {valu }  idd = {id} />
{/if}