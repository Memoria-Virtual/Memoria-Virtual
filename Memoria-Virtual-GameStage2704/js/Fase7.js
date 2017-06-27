var pontuacao = 0;
    var scoreText;
    var rtv;
    var rpopcorn;
    var rlampada;

    var Stage7 = function() {};

    Stage7.prototype = {

        preload: function () {
            game.load.image('fundo', 'Imagens/fundo.png');
            game.load.image('quadro', 'Imagens/imagens1.png');
            game.load.image('resposta', 'Imagens/resposta1.png');
            game.load.image('rpopcorn', 'Imagens/popcorn.png');
            game.load.image('pipoca', 'Imagens/pipoca.png');
            game.load.image('rlampada', 'Imagens/lampada1.png');
            game.load.image('rtv', 'Imagens/tv.png');
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');

        },

        create: function () {
            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(170, 60, 'resposta');
            game.add.sprite(170, 150, 'quadro');
            game.add.sprite(340, 80, 'pipoca');
            rpopcorn = game.add.sprite(110, 390, 'rpopcorn');
            rtv = game.add.sprite(300, 390, 'rtv');
            rlampada = game.add.sprite(500, 390, 'rlampada');
            this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
            this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

            rpopcorn.inputEnabled = true;
            rpopcorn.input.enableDrag(true);
            rtv.inputEnabled = true;
            rtv.input.enableDrag(true);
            rlampada.inputEnabled = true;
            rlampada.input.enableDrag(true);

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
            game.state.start("Fase 8");        
        },
         playsair: function (button) {
            game.state.start("Fase 6");        
        } 
    };