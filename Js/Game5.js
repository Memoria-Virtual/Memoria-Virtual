var Game5{

    
function preload() {
   game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('onibus', 'Imagens/onibus.png');
    game.load.image('ronibus', 'Imagens/onibus1.png');
    game.load.image('rtv', 'Imagens/tv1.png');
    game.load.image('rpipoca', 'Imagens/pipoca.png');   
}
function create() {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'onibus');
        var ronibus = game.add.sprite(110, 500, 'ronibus');
    game.add.sprite(300, 500, 'rtv');
    game.add.sprite(500, 500, 'rpipoca');
        ronibus.inputEnabled = true;
        ronibus.input.enableDrag(true);
}  
function render() {
}
}