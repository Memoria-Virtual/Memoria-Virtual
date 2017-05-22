<
var Game2{

    
function preload() {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('cachorro', 'Imagens/cachorro1.png');
    game.load.image('rcabide', 'Imagens/cabide.png');
    game.load.image('rcolher', 'Imagens/colher.png');
    game.load.image('rcachorro', 'Imagens/cachorro.png');
},
function create() {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'cachorro');
    game.add.sprite(110, 500, 'rcabide');
    game.add.sprite(300, 500, 'rcolher');
    
        var rcachorro = game.add.sprite(500, 500, 'rcachorro');
        rcachorro.inputEnabled = true;
        rcachorro.input.enableDrag(true);
},  
function render() {
}
};
