let addbutton=document.querySelector('.addbtn')
let itemlist=document.querySelector('.todoitem')
let input=document.querySelector('.input')

let id=0;

let itemhtml=''

addbutton.addEventListener('click',add)


function add()
{
    id+=1;
    let todoname=input.value

    if(todoname=='')
    return;
    
    let elem=document.createElement('div')
    elem.setAttribute('id',id)
    elem.classList.add('todoitems')
  

    let htmlpart=`
                 <div class="checkbox" >
                 <label class="strike">
                 <input type="checkbox" onchange='strikethrough(this)'>
                 <span class="checkbox-circle"></span>
                 <span class="ml">${todoname}</span>
                
                 </label>
                 </div>
                 <div class='deletebtn' onclick="deleteparent(this)">
                 \u00d7</div> 
                 `
                 elem.innerHTML=htmlpart
        
        
        // itemlist.appendChild('')
        elem.style.margin="10px 0px 10px 0px "
        // elem.style.backgroundColor="grey"
        itemlist.appendChild(elem)
        // displayhtml()
        savedata()
}

function deleteparent(button) {
    console.log('inside deleteparent')
    console.log(button.parentNode)
    const parentdiv = button.parentNode;
    parentdiv.remove()
    savedata()
    // console.log(itemhtml)
    // displayhtml()
  }
// function displayhtml()
// {

//   itemlist.innerHTML = itemhtml;
// }

function strikethrough(element)
{
    let parentlabel=element.parentElement
    if (element.checked) {
        parentlabel.classList.add('line-strike');
        savedata()

      } else {
        parentlabel.classList.remove('line-strike');
        savedata()
}
      }
      



function savedata()
{
  localStorage.setItem('data',itemlist.innerHTML)
}

function showtask()
{
  itemlist.innerHTML=localStorage.getItem('data')
}

showtask()