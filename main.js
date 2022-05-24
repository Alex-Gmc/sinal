const img = document.querySelector('.img')
const botao = document.querySelector('.buttons');
let intervalo;
let corIndex = 0;

const ligarLuz = (e) => {
    clearInterval(intervalo);
escolherBotao[e.target.className]();
}

const mudarCor = () => {
    const cores = ['vermelho','amarelo','verde'];
    escolherBotao[cores[corIndex]]();
    corIndex = corIndex < 2 ? ++corIndex : 0;
}

const escolherBotao = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervalo = setInterval(mudarCor, 1000)
};

botao.addEventListener('click',ligarLuz)