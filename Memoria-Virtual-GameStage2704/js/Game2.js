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
    game.load.image('botao', 'Imagens/avanca.png');
    game.load.image('sair', 'Imagens/sair.png');
},
    create: function () {

	game.add.sprite(0, 0, 'fundo');
    game.add.sprite(150, 110, 'quadro');
    game.add.sprite(160, 350, 'resposta');
    game.add.sprite(300, 120, 'cachorro');
    
        
        rcabide = game.add.sprite(110, 500, 'rcabide');
        rcolher = game.add.sprite(300, 500, 'rcolher');
        rcachorro = game.add.sprite(500, 500, 'rcachorro');
        this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
        this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);
    
        rcachorro.inputEnabled = true;
        rcachorro.input.enableDrag(true);
        rcabide.inputEnabled = true;
        rcabide.input.enableDrag(true);
        rcolher.inputEnabled = true;
        rcolher.input.enableDrag(true);
        
                text= game.add.text(0, 0, "Cronometro: "); contador = 30;
                game.time.events.loop(Phaser.Timer.SECOND, this.mostraTempo, this);
}, 
    
    mostraTempo: function () {
        contador--;
        text.setText('Cronometro: ' + contador);
        if (contador == 0) { 
          game.state.start("Game0");  
        }
    },
    update: function () {
},
     playTheGame: function (button) {
        game.state.start("Fase 3");        
    },
    playsair: function (button) {
            game.state.start("Fase 6");        
        } 
};
