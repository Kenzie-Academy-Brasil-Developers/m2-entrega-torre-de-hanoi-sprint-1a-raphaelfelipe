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
    const disco4 = document.createElement('div');
    disco4.setAttribute('class', 'disco4');
    disco4.setAttribute('id', '4');
    torreStart.appendChild(disco4);
    const disco5 = document.createElement('div');
    disco5.setAttribute('class', 'disco5');
    disco5.setAttribute('id', '5');
    torreStart.appendChild(disco5);
}

criandoTorres();
criandoDiscos();


//----MOVIMENTAÇÃO-------

let contadoDeMovimentos = 0;
const numeroDeMovimento = document.getElementById('numeroDeMovimentos');
numeroDeMovimento.innerText = `${contadoDeMovimentos}`;

// constantes para movimentar disco


let discoSelecionado = null;
const listaTorres = document.querySelectorAll('.torres');

//evento clique para movimenta disco

listaTorres.forEach(function(torre) {
    torre.addEventListener('click', jogando);
})

//funções para movimenta disco


function jogando(itemClicado) {
    if (itemClicado.target.className == 'torres') {
        clicandoNaTorre(itemClicado.target);
    } else {
        clicandoNoDisco(itemClicado.target);
    }
}

function movimentandoDisco(torreDestino, discoMovimentado) {
    torreDestino.appendChild(discoMovimentado);
}

function clicandoNaTorre(torreClicada) {
    if (discoSelecionado == null) {
        discoSelecionado = torreClicada.lastChild;
        discoSelecionado.className += " discoSelecionado";
    } else if (torreClicada.childElementCount == 0 || torreClicada.lastChild.id <= discoSelecionado.id) {
        movimentandoDisco(torreClicada, discoSelecionado);
        discoSelecionado.classList.remove("discoSelecionado");
        discoSelecionado = null;
        movimentos();
        vitoria();
    }
    return;
}

function clicandoNoDisco(discoClicado) {
    if (discoSelecionado == null) {
        discoSelecionado = discoClicado.parentElement.lastChild;
        discoSelecionado.className += " discoSelecionado";
    } else if (discoClicado.parentElement.lastChild.id <= discoSelecionado.id) {
        movimentandoDisco(discoClicado.parentElement, discoSelecionado);
        discoSelecionado.classList.remove("discoSelecionado");
        discoSelecionado = null;
        movimentos();
        vitoria();
    }
    return;
}

function movimentos() {
    contadoDeMovimentos++;
    numeroDeMovimento.innerText = `${contadoDeMovimentos}`;
}


//--------SELECIONAR DIFICULDADE--------


let discosTotais = 0;
let dificuldadeSelecionada = ''

const listaBotaoDificuldade = document.querySelectorAll('.botaoDificuldade');

listaBotaoDificuldade.forEach(function(botao) {
    botao.addEventListener('click', selecaoDificuldade);
})

function selecaoDificuldade(botao) {
    if (botao.target.id == 'botaoFacil') {
        dificuldadeFacil();
    }
    if (botao.target.id == 'botaoMedio') {
        dificuldadeMedio();
    }
    if (botao.target.id == 'botaoDificil') {
        dificuldadeDificil();
    }
}


function dificuldadeFacil() {
    for (let i = 5; i >= 3; i--) {
        document.getElementById(`${i}`).style.display = 'inherit';
    }
    document.getElementById('boxBannerDificuldade').style.display = 'none';
    discosTotais = 3;
    dificuldadeSelecionada = 'Fácil';
}

function dificuldadeMedio() {
    for (let i = 5; i >= 2; i--) {
        document.getElementById(`${i}`).style.display = 'inherit';
    }
    document.getElementById('boxBannerDificuldade').style.display = 'none';
    discosTotais = 4;
    dificuldadeSelecionada = 'Médio';
}

function dificuldadeDificil() {
    for (let i = 5; i >= 1; i--) {
        document.getElementById(`${i}`).style.display = 'inherit';
    }
    document.getElementById('boxBannerDificuldade').style.display = 'none';
    discosTotais = 5;
    dificuldadeSelecionada = 'Difícil';
}

//--------VITORIA-------

const torreFinal = document.getElementById('torreEnd');


function vitoria() {
    if (torreFinal.childElementCount == discosTotais) {
        BannerVitoria();
    }
    return;
}

function BannerVitoria() {
    const banner = document.getElementById('boxBanner');
    banner.style.display = 'flex';
    const movimentosBanner = document.getElementById('bannerMovimentos');
    movimentosBanner.innerText = `Numero de movimentos: ${contadoDeMovimentos}`;
    const vitoriaDificuldade = document.getElementById('vitoriaDificuldade')
    vitoriaDificuldade.innerText = `Dificuldade: ${dificuldadeSelecionada}`;
}


//------RECOMEÇAR---------

const botaoReset = document.getElementById('reset');

botaoReset.addEventListener('click', recomecar);

function recomecar() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`${i}`).style.display = 'none';
        document.getElementById('torreStart').appendChild(document.getElementById(`${i}`));
    }
    contadoDeMovimentos = 0;
    document.getElementById('boxBanner').style.display = 'none';
    numeroDeMovimento.innerText = `${contadoDeMovimentos}`;
    document.getElementById('boxBannerDificuldade').style.display = 'flex';
}