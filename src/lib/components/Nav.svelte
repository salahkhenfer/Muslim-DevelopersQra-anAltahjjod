<script>


  import { navBa } from '../function/navBarActive'
  import fullinfo from "$lib/resorce/fullinformaion.json"

export let title = "الفهرس"
export let index  = 1
export let active  = false
let nameOfsourah  = Object.entries(fullinfo)[index -1 ][1]["nameOfsourah"]
console.log(nameOfsourah);
 ;// export let navBar = false;
// let nav = "width = 100%;"
$: navBar = $navBa;
// const icon = document.getElementsByClassName("")
const handelClic= () => {   
    navBar ? title =""  : title = "الفهرس"  


    navBa.update(navBar => !navBar );
}
</script>
<div class="navContainer">
 {#if (active !== true) }
 <div class= {navBar? "nav " : " nav navSlide"}     >
    <div class="fahras" >{  title}</div>
    <div  class= {navBar? "icon " : " icon navSlide"}    >
        <i class="fa-solid fa-bars "  on:click={handelClic}  ></i>
    </div>

</div>

 {/if}
 {#if (active !== false)}
 <div class= {navBar? "nav " : " nav navSlide"}     >
    <div class="fahras" >{  nameOfsourah}</div>
    <div  class= {navBar? "icon " : " icon navSlide"}    >
        <a href="/">

            <i class="fa-solid fa-xmark" ></i> 
        </a>
    </div>
</div>
 {/if}

   


</div>
<style>
    .navContainer {
        color: #ddd;
        display: flex;
        direction: rtl;
        background: #404040;
     width: 100%;
     height: 43px;
     transition: all 1s;
     font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;

    }
    .nav {
        color: #ddd;
        display: flex;
        direction: rtl;
        background: #404040;
     width: 100%;
     transition: all 0.1s;

    }
    .navSlide {
        width: 30%;
  right: -70%;


   }
    a {
  text-decoration: none;
  color: #ddd;


   }
   .icon {
        color: #ddd;
        display: block;
        width: 5%;
        /* flex: 1; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 150%;
        cursor: pointer;
       
   

    }

  
.fahras{
      
    /* background: #404040; */

    
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    /* margin: 0 10px; */
    /* min-width: 30px; */
    width: 90%;
    height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 500;

    line-height: 44px;
}
</style>