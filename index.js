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
firstTotal.toFixed(2);
const container =document.getElementById('table-container');
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${1}</td>
<td>${firstTitleData}</td>
<td>${firstTotal}</td>
<h1>cm2</h1>
`;
container.appendChild(tr);
});



// second card start 
document.getElementById("second-card").addEventListener('click',function(){
    serial += 1;
    const secondTitleData =document.getElementById('secont-card-title').innerText;
    const secondCardInput1 =document.getElementById('second-data-input1').value;
    const secondCardInput2 =document.getElementById('second-data-input').value;
    const multiplyData = 0.5;

    const secondTotal = parseFloat(secondCardInput1) * parseFloat(secondCardInput2);
    const container =document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${secondTitleData}</td>
    <td>${secondTotal}</td>
    <h1>cm2</h1>
    `;
    container.appendChild(tr);
    });

    // third Card 
    document.getElementById("third-card").addEventListener('click',function(){
        serial += 1;
        const thirdTitleData =document.getElementById('third-card-title').innerText;
        console.log(thirdTitleData);
        const b =10;
        const h =12;
      
        const thirdTotal = b *h;
        const container =document.getElementById('table-container');
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${1}</td>
        <td>${thirdTitleData}</td>
        <td>${thirdTotal}</td>
        <h1>cm2</h1>
        `;
        container.appendChild(tr);
        });


    // Rhombus 
    document.getElementById("Rhombus").addEventListener('click',function(){
        serial += 1;
        const RhumbusTitleData =document.getElementById('Rhombus-title').innerText;
        const b =16;
        const h =8;
    
        const RhumbusTotal = b *h;
        const container =document.getElementById('table-container');
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${1}</td>
        <td>${RhumbusTitleData}</td>
        <td>${RhumbusTotal}</td>
        <h1>cm2</h1>
        `;
        container.appendChild(tr);
        });
        
    // Pentagon 
    document.getElementById("Pentagon").addEventListener('click',function(){
        serial += 1;
        const PentagonTitleData =document.getElementById('Pentagon-title').innerText;
        const p =6;
        const b =10;
        const multiply=0.5;
    
        const PentagonTotal = multiply*p *b;
        const container =document.getElementById('table-container');
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${1}</td>
        <td>${PentagonTitleData}</td>
        <td>${PentagonTotal}</td>
        <h1>cm2</h1>
        `;
        container.appendChild(tr);
        });


    // Ellipse 
    document.getElementById("Ellipse").addEventListener('click',function(){
        serial += 1;
        const EllipseTitleData =document.getElementById('Ellipse-title').innerText;
        const a =10;
        const b =4;
        const pi =3.14;
       
        const EllipseTotal = a *b*pi;
        EllipseTotal.toFixed(2)
        const container =document.getElementById('table-container');
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${1}</td>
        <td>${EllipseTitleData}</td>
        <td>${EllipseTotal}</td>
        <h1>cm2</h1>
        `;
        container.appendChild(tr);
        });

       document.getElementById('blog-btn').addEventListener('click',function(){
        window.location.href='blog.html';
       })


    
