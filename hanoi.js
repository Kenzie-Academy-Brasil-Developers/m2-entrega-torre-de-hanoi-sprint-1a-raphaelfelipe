const torres = document.getElementById('torres');
//torres
const torreStart = document.createElement('div');
const torreOffset = document.createElement('div');
const torreEnd = document.createElement('div');

torreStart.setAttribute("id", "torreStart");
torreOffset.setAttribute("id", "torreOffset");
torreEnd.setAttribute("id", "torreEnd");

torres.appendChild(torreStart);
torres.appendChild(torreOffset);
torres.appendChild(torreEnd);

const disco1 = document.createElement('div')
disco1.setAttribute('id', 'disco1')
torreStart.appendChild(disco1)
const disco2 = document.createElement('div')
disco2.setAttribute('id', 'disco2')
torreStart.appendChild(disco2)
const disco3 = document.createElement('div')
disco3.setAttribute('id', 'disco3')
torreStart.appendChild(disco3)
