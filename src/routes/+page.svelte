

<script>
    import fullinfo from "$lib/resorce/fullinformaion.json"
    import "$lib/glopal.css"
  import { getContext } from "svelte";
    import Nav from "../lib/components/Nav.svelte"
    import List from "../lib/components/List.svelte"
    import { navBa } from '.././lib/function/navBarActive'
  import Alfahras from "$lib/components/Alfahras.svelte";
  import { ModelIndex, ModelPage } from "$lib/function/modelOpen";

    $: navBar = $navBa;
   



</script>
<div class="Nav">
    <Nav  />
    <div class="menu">
      <Alfahras/>
       <List />
    </div>
    
</div>
<style>



   .menu {
    display: flex;

   }


</style>