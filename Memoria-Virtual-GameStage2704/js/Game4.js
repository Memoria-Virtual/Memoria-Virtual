var pontuacao = 0;
var scoreText;
var rarvore;
var rpente;
var rhospital;

var Stage3 = function() {};

Stage3.prototype = {
     
    preload: function () {
        game.load.image('fundo', 'Imagens/fundo.png');
        game.load.image('quadro', 'Imagens/imagens1.png');
        game.load.image('resposta', 'Imagens/resposta1.png');
        game.load.image('arvore', 'Imagens/arvore.png');
        game.load.image('rarvore', 'Imagens/rarvore.png');
        game.load.image('hospital', 'Imagens/hospital.png');
        game.load.image('pente', 'Imagens/pente.png');
        game.load.image('botao', 'Imagens/avanca.png');
        game.load.image('sair', 'Imagens/sair.png');
    },
    
    create: function () {
        game.add.sprite(0, 0, 'fundo');
        game.add.sprite(150, 110, 'quadro');
        game.add.sprite(160, 350, 'resposta');
        game.add.sprite(300, 120, 'arvore');
    
        rpente = game.add.sprite(110, 500, 'pente');
        rarvore = game.add.sprite(300, 500, 'rarvore');
        rhospital = game.add.sprite(500, 500, 'hospital');
        this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
        this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

        rarvore.inputEnabled = true;
        rarvore.input.enableDrag(true);
        rpente.inputEnabled = true;
        rpente.input.enableDrag(true);
        rhospital.inputEnabled = true;
        rhospital.input.enableDrag(true);
        
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
        game.state.start("Fase 5");        
    },
    playsair: function (button) {
            game.state.start("Fase 6");        
        } 
};