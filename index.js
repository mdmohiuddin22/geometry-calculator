let serial=0;
document.getElementById("first-card").addEventListener('click',function(){
serial += 1;
const firstTitleData =document.getElementById('first-card-title').innerText;
const firstInputData =document.getElementById('first-input').value;
const secondInputData =document.getElementById('second-input').value;
console.log(firstInputData,secondInputData,firstTitleData);
})