<script>
  import { goto } from '$app/navigation';
       import { navBa } from '$lib/function/navBarActive'
       import fullinfo from "$lib/resorce/fullinformaion.json"
    $: navBar = $navBa;

</script>

<div class= list>
   
{#each Object.entries(fullinfo) as [key, value]}
    
<a class= {navBar? "item " : " item navSlide"} href={key}    > {key} - {value.nameOfsourah}  </a>
{/each}
        
  
         
</div>  
<style>
        .item {
        border-color: #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    font-size: 16px;
    transition: navSlide 1s;
    text-decoration: none;
    cursor: pointer;

   
    }
    .item:hover {
     
        background: #e9e9e9; 
}
    
    
   
        .list  {
        position: relative;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    margin-bottom: 20px;
    width: 100%;
    transition: all 1s;
    direction: rtl;
    float: left;
    overflow: hidden;

    }
    .navSlide {
display: block;     
  right: -70%;
  flex: 1;


   }
</style>