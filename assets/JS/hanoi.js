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
    disco1.setAttribute('class', 'disco1');
    disco1.setAttribute('id', '1');
    torreStart.appendChild(disco1);
    const disco2 = document.createElement('div');
    disco2.setAttribute('class', 'disco2');
    disco2.setAttribute('id', '2');
    torreStart.appendChild(disco2);
    const disco3 = document.createElement('div');
    disco3.setAttribute('class', 'disco3');
    disco3.setAttribute('id', '3');
    torreStart.appendChild(disco3);
}

criandoTorres();
criandoDiscos();


//----MOVIMENTAÇÃO-------

let contadoDeMovimentos = 0
const numeroDeMovimento = document.getElementById('numeroDeMovimentos')
numeroDeMovimento.innerText = `${contadoDeMovimentos}`

// constantes para movimentar disco


let discoSelecionado = null;
const listaTorres = document.querySelectorAll('.torres');

//evento clique para movimenta disco

listaTorres.forEach(function(evt) {
    evt.addEventListener('click', jogando);
})

//funções para movimenta disco


function jogando(itemClicado) {
    if (itemClicado.target.className == 'torres') {
        clicandoNaTorre(itemClicado.target)
    } else {
        clicandoNoDisco(itemClicado.target)
    }
}

function movimentandoDisco(torreDestino, discoMovimentado) {
    torreDestino.appendChild(discoMovimentado);
}

function clicandoNaTorre(torreClicada) {
    if (discoSelecionado == null) {
        discoSelecionado = torreClicada.lastChild;
        discoSelecionado.className += " discoSelecionado"
    } else if (torreClicada.childElementCount == 0 || torreClicada.lastChild.id <= discoSelecionado.id) {
        movimentandoDisco(torreClicada, discoSelecionado);
        discoSelecionado.classList.remove("discoSelecionado")
        discoSelecionado = null;
        movimentos()
    }
}

function clicandoNoDisco(discoClicado) {
    if (discoSelecionado == null) {
        discoSelecionado = discoClicado.parentElement.lastChild;
        discoSelecionado.className += " discoSelecionado"
    } else if (discoClicado.parentElement.lastChild.id <= discoSelecionado.id) {
        movimentandoDisco(discoClicado.parentElement, discoSelecionado);
        discoSelecionado.classList.remove("discoSelecionado")
        discoSelecionado = null;
        movimentos()
    }
}

function movimentos() {
    contadoDeMovimentos++
    numeroDeMovimento.innerText = `${contadoDeMovimentos}`
}