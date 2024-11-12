const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function (button) { //for nodelist forEach is applied
    console.log(button);
    button.addEventListener('click',function(event){ //to detect the click of the mouse
        console.log(event.target); //event.target gives the element which triggered the event for eg mouse event when mouse passes over that
        
        if(event.target.id==='grey')
            {
                body.style.backgroundColor=event.target.id
            }
        if(event.target.id==='white')
            {
                body.style.backgroundColor=event.target.id
            }
        if(event.target.id==='blue')
            {
                body.style.backgroundColor=event.target.id
            }
        if(event.target.id==='yellow')
            {
                body.style.backgroundColor=event.target.id
            }
        if(event.target.id==='pink')
            {
                body.style.backgroundColor=event.target.id
            }
})
})  //forEach ends here