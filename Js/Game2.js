var rcabide;
var rcolher;
var rcachorro;
var text;
var contador;

var Stage1 = function() {};

Stage1.prototype = {
    
    preload: function () {
    game.load.image('fundo', 'Imagens/fundo.png');
    game.load.image('quadro', 'Imagens/imagens1.png');
    game.load.image('resposta', 'Imagens/resposta1.png');
    game.load.image('cachorro', 'Imagens/cachorro1.png');
    game.load.image('rcabide', 'Imagens/cabide.png');
    game.load.image('rcolher', 'Imagens/colher.png');
    game.load.image('rcachorro', 'Imagens/cachorro.png');
},
    create: function () {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'cachorro');
   
        
        rcabide = game.add.sprite(110, 500, 'rcabide');
        rcolher = game.add.sprite(300, 500, 'rcolher');
        rcachorro = game.add.sprite(500, 500, 'rcachorro');
    
        rcachorro.inputEnabled = true;
        rcachorro.input.enableDrag(true);
        rcabide.inputEnabled = true;
        rcabide.input.enableDrag(true);
        rcolher.inputEnabled = true;
        rcolher.input.enableDrag(true);
},  
    update: function () {
}
};
