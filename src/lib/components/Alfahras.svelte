<script>
    import { navBa } from '$lib/function/navBarActive'
 $: navBar = $navBa;
     const handelClic= () => {
    navBa.update(navBar => !navBar );

    
    

}
</script>
<div class= {navBar? "listAlfahras " : " listAlfahras listAlfahrasActive"}>
    <div class="item"  on:click={handelClic} >الفهرس</div>
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
    transition: all 1s;
    right: +43%;
    
   
    }



   .listAlfahras {
   width: 0%;
   display: none;
   


   }
   .listAlfahrasActive  {
    display: block;

    position: absolute;
    direction: rtl;
   width: 70%;

   }
</style>