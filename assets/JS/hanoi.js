//-----FAZENDO LAYOUT-----


function criandoTorres() {
    const torres = document.getElementById('torres');
    const torreStart = document.createElement('div');
    const torreOffset = document.createElement('div');
    const torreEnd = document.createElement('div');

    torreStart.setAttribute("id", "torreStart");
    torreOffset.setAttribute("id", "torreOffset");
    torreEnd.setAttribute("id", "torreEnd");

    torreStart.setAttribute("class", "torres");
    torreOffset.setAttribute("class", "torres");
    torreEnd.setAttribute("class", "torres");


    torres.appendChild(torreStart);
    torres.appendChild(torreOffset);
    torres.appendChild(torreEnd);
}

function criandoDiscos() {
    const disco1 = document.createElement('div');
    disco1.setAttribute('id', 'disco1');
    torreStart.appendChild(disco1);
    const disco2 = document.createElement('div');
    disco2.setAttribute('id', 'disco2');
    torreStart.appendChild(disco2);
    const disco3 = document.createElement('div');
    disco3.setAttribute('id', 'disco3');
    torreStart.appendChild(disco3);
}

criandoTorres();
criandoDiscos();


//----MOVIMENTAÇÃO-------



// constantes para movimentar disco


let discoSelecionado = null;
const listaTorres = document.querySelectorAll('.torres');

//evento clique para movimenta disco

listaTorres.forEach(function(evt) {
    evt.addEventListener('click', jogando);
})

//funções para movimenta disco


function jogando(torreClicada) {
    if (torreClicada.target.className == 'torres') {
        if (discoSelecionado == null) {
            discoSelecionado = torreClicada.target.lastChild;
        } else {
            movimentandoDisco(torreClicada.target, discoSelecionado);
            discoSelecionado = null;
        }
    } else {
        if (discoSelecionado == null) {
            discoSelecionado = torreClicada.target.parentElement.lastChild;
        } else {
            movimentandoDisco(torreClicada.target.parentElement, discoSelecionado);
            discoSelecionado = null;
        }
    }
}

function movimentandoDisco(torreDestino, discoMovimentado) {
    torreDestino.appendChild(discoMovimentado);
}