
var Game1={

function preload() {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('lampada', 'Imagens/lampada1.png');
    game.load.image('rlampada', 'Imagens/rslampada.png');
    game.load.image('rcaderno', 'Imagens/caderno.png');
    game.load.image('rcadeira', 'Imagens/cadeira.png');
}

function create() {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'lampada');
    game.add.sprite(110, 500, 'rcaderno');
        var rlampada1 = game.add.sprite(300, 500, 'rlampada');
    game.add.sprite(500, 500, 'rcadeira');
      
        rlampada1.inputEnabled = true;
        rlampada1.input.enableDrag(true);
   
}  
function render() {
}
}
