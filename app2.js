// how to alter the textcontent of an element

const togglelist=document.querySelector('button')
const list=document.querySelector('.list')
const descriptioninput = document.querySelector('input.description')
const descriptionp=document.querySelector('p.description')
const descriptionbutton=document.querySelector('button.description')
const additeminput=document.querySelector('input.additeminput')
 const additembutton=document.querySelector('button.additembutton')
const removebutton=document.querySelector('button.removebutton')

// const inputitems=document.getElementsByTagName('li');
// //applying eventlistener on element(capitalize when 'mouseover' and lowercase when 'mouseout')
//  for (let i = 0; i < inputitems.length; i++) {
      

//beginning of code to listen and respond to mousecver and 'mouseout'
 list.addEventListener('mouseover',(event) =>{
   if (event.target.tagName=='LI') {
     
  
 event.target.textContent=event.target.textContent.toUpperCase();
}
})

list.addEventListener('mouseout',(event) =>{
  if (event.target.tagName=='LI') {
  

  event.target.textContent=event.target.textContent.toLowerCase();
}
});// end of no17 comment

// inorder to apply effects to newly inserted item its recommended to apply ur eventlistener on a parent tag(event bubbling) so i replace the listener on "li" to the div tag which contains the 'li' 



//begining of code that enable 'hide list 'and 'show list ' together with 
togglelist.addEventListener('click',()=>{
    if (list.style.display=='none') {
        togglelist.textContent='hide list'
        list.style.display='block'
  //using Dom to style css elements
    }
    else  {
        togglelist.textContent='show list'
        list.style.display='none'    
    }
    
      })
//end of code that enables 'hide list 'and 'show list ' together with
  


descriptionbutton.addEventListener('click',() =>{
   descriptionp.textContent=descriptioninput.value + ':';
   descriptioninput.value=''
    }),


    // begining of code that enables a new item to be added to the list and last items to be removed 
    additembutton.addEventListener('click',()=>{
    let ul =document.getElementsByTagName('ul')[0] 
   let li=document.createElement('li');
   li.textContent=additeminput.value ;
   ul.appendChild(li)
   additeminput.value='';
    }),

    removebutton.addEventListener('click',()=>{
        let ul =document.getElementsByTagName('ul')[0] 
       let li=document.querySelector('li:last-child');
      ul.removeChild(li)
       
        }),
//ending of comment on code index no61.

 //note appending/adding a node to the dom(adding new things to an aready existing or an empty  list)
   //not recommended(apply effect using css )                                        asxxxxssssssv cvvvvvvvvvvvvvvvvvvfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhstead)
 
    descriptionp.title='list description'