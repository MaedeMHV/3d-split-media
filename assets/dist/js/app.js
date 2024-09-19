let box=document.querySelectorAll('.box');
let boxes=document.querySelector('.boxes');
let btn=document.querySelector('.btn').addEventListener('click',e=>{
    if(boxes.classList.contains('active')){
        boxes.classList.remove('active')
    }else{
        boxes.classList.add('active')
    }
})
let x1=0
let x2=0
let x3=0
let x4=0
sortStyle()
function sortStyle(){  
for (let index = 0; index <=3; index++) {
    box[index].style.backgroundPosition = `${x1}px 0px `;
    x1=x1-125; 
}
for (let index = 4; index <=7; index++) {  
    box[index].style.backgroundPosition = `${x2}px -125px `;
    x2=x2-125;
}
for (let index = 8; index <=11; index++) {
    box[index].style.backgroundPosition = `${x3}px -250px `;
    x3=x3-125;
}
for (let index = 12; index <=16; index++) {
    box[index].style.backgroundPosition = `${x4}px -375px `;
    x4=x4-125;
}
}