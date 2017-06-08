var pontuacao = 0;
var scoreText;
var ronibus;
var rtv;
var rpipoca;

var Stage4 = function() {};

Stage4.prototype = {
    
    preload: function () {
   game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('onibus', 'Imagens/onibus.png');
    game.load.image('ronibus', 'Imagens/onibus1.png');
    game.load.image('rtv', 'Imagens/tv1.png');
    game.load.image('rpipoca', 'Imagens/pipoca.png');   
}
    create: function () {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'onibus');
    
        ronibus = game.add.sprite(110, 500, 'ronibus');
        rtv = game.add.sprite(300, 500, 'rtv');
        rpipoca = game.add.sprite(500, 500, 'rpipoca');

        ronibus.inputEnabled = true;
        ronibus.input.enableDrag(true);
        rtv.inputEnabled = true;
        rtv.input.enableDrag(true);
        rpipoca.inputEnabled = true;
        rpipoca.input.enableDrag(true);
}  
    update: function () {
}
}