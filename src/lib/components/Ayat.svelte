
<script>
    // @ts-nocheck
    import { ModelIndex, openModel } from "$lib/function/modelOpen";
    import fullinfo from "$lib/resorce/fullinformaion.json";
   
    import { setContext } from 'svelte';
    import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()

    export let index;

const handelClick= (inde ,id ) => {   

   const ay = openModel(fullinfo[index.index]["allaya"][inde]["numberOfAaya"])

 
   dispatch("childValue", {inde ,ay ,id } )
    

}
  </script>
  
<div class="container">
    {#each fullinfo[index.index]["allaya"]  as aya ,inde(aya) }
    
    <b  style={`background-color: #${aya.id} `} id={aya.id}  on:click={handelClick(inde ,aya.id)}>
     {aya["aya"]}
      </b>
{/each}
</div>
<style>
    b{
        color: black;
  word-spacing: 15%;
  line-height: 3;
  font-size: 14px;
  text-align: justify;
  text-justify: inter-word;
  padding: 10px;
  font-weight: normal;
}
   

    
    .container {
        text-align: justify;
  direction: rtl;
    }

</style>