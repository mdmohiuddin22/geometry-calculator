let serial=0;
document.getElementById("first-card").addEventListener('click',function(){
serial += 1;
const firstTitleData =document.getElementById('first-card-title').innerText;
const firstInputData =document.getElementById('first-input').value;
const secondInputData =document.getElementById('second-input').value;
const multiplyData = 0.5;
const subTotal=document.getElementById('all-calculation')
if (
    firstInputData == "" ||
    secondInputData == "" ||
    firstInputData<= 0 ||
    secondInputData <= 0
   
  ) {
    return alert("please enter any valid number");
  }
const firstTotal = parseFloat(firstInputData) * parseFloat(secondInputData) *multiplyData;
const container =document.getElementById('table-container');
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${1}</td>
<td>${firstTitleData}</td>
<td>${firstTotal}</td>
`;
container.appendChild(tr);
});
