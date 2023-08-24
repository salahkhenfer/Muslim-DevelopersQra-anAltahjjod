<script>
   import { ModelPage, openModel } from "$lib/function/modelOpen";
/**
   * @type {{ numbersOfAya: any[]; Note: any; }}
   */
    export let valu
    /**
   * @type {string}
   */
     export let idd
  
// @ts-ignore
/**
   * @type {any}
   */
    let value  

    let note =1
    $: ModelPage1 = $ModelPage; 
    // $: value = console.log(note);

    const handelClickBack = () => {   
        ModelPage.update(ModelPage1 => !$ModelPage );
        ModelPage.update(ModelPage1 => !$ModelPage );
    }
    // when open this page check local Storge
if(localStorage.getItem(idd)) {
  // @ts-ignore
  note = localStorage.getItem(idd)
}
else {
  // @ts-ignore
  note = ""
}

const handelClickButton =()=> {

note =value 
localStorage.setItem(idd ,value)
alert(value)
}


   
</script>

<div class="view"  >
    <header  on:click={handelClickBack } class="bar-stable" style="direction: rtl;">
        <a class="button icon-right icon-chevron-left button-clear button-dark " style="font-weight:bolder; margin-right: 2%" >رجوع</a
    >
    <h1 class="title">{valu.numbersOfAya[0]}-{valu.numbersOfAya[1] }</h1>
  </header>
  <div class="content">
    <div class="scroll">

        <div class="card">
          <div class="item ">
            <div class="list">
              <label>
                  <p>التّفْصيْلُ الموضوعِي {valu.numbersOfAya[0]}-{valu.numbersOfAya[1] }</p>
                  <p>{valu.Note}</p>
            
                <h2>ملاحظاتك:{note}</h2>
                <span class="input-label">إضافة ملاحظة</span>
                <input bind:value={value} type="text" placeholder="اكتـب ملاحـظتك" />
              </label>
              <button
                class="button button-full button-positive"
             on:click={handelClickButton}
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
    </div>



  </div>
</div>
<style>

.content {
  
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
 
    margin-top: -1px;
    padding-top: 1px;
    margin-bottom: -1px;

    overflow: scroll;

  width: 100%;
  height: 100%;
  overflow: scroll;
 
}
    .view {

         width: 50%;
				  margin: auto;
				  background-color: #414042;
				  border-radius: 10px;
				  box-shadow: 5px 5px 8px #414042;
				  height: 45% 
    }
    header {
        color: #ddd;
    background: #404040;
    
    }
    a {
        border-color: transparent;
    background: none;
    box-shadow: none;
    color: #ddd;
    font-size: 17px;
    cursor: pointer;
}
.bar-stable .button.button-clear {
    border-color: transparent;
    background: none;
    box-shadow: none;
    color: #ddd;
    font-size: 17px;
}
 .view {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #fff;
    overflow: hidden;
}
.card {
    padding-top: 1px;
    padding-bottom: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
}
.title {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    margin: 0 10px;
    min-width: 30px;
    height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 500;
    line-height: 44px;
    left: 49px;
    right: 49px;
}

.card, .list-inset {
    overflow: hidden;
    margin: 20px 10px;
    border-radius: 2px;
    background-color: #fff;
}
.list {
    position: relative;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    margin-bottom: 20px;
}
.item p {
    color: #666;
    font-size: 14px;
    margin-bottom: 2px;
}
.item h2 {
    margin: 0 0 2px 0;
    font-size: 16px;
    font-weight: normal;
}
h2 {
    font-size: 30px;
    margin-bottom: 0px;
    background: #000;
    color: #fff;
    padding: 10px;

}
label, input, button, select, textarea {
    font-weight: normal;
    font-size: 14px;
    line-height: 1.42857;
}
.input-label {
    display: table;
    padding: 7px 10px 7px 0px;
    max-width: 200px;
    width: 35%;
    color: #444;
    font-size: 16px;
}
 .card .item .list input  {
    display: block;
    width: 100%;
    border: 2px solid rgb(65, 64, 66);
    padding: 3% 2%;
    margin-bottom: 5%;
    margin-top: 5%;

}
 .card .item .list .button {
    background: rgb(65, 64, 66);
    padding: 1%;
    color: rgb(252, 252, 252);
    max-width: 35%;
    margin: auto;
    font-size: 24px;
    border-radius: 10px;
}
</style>