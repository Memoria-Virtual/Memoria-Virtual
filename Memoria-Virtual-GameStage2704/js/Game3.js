    var pontuacao = 0;
    var scoreText;
    var rcasa;
    var rarvore;
    var rcolher;

    var Stage2 = function() {};

    Stage2.prototype = {

        preload: function () {
            game.load.image('fundo', 'Imagens/fundo.png');
            game.load.image('quadro', 'Imagens/imagens1.png');
            game.load.image('resposta', 'Imagens/resposta1.png');
            game.load.image('casa', 'Imagens/casa1.png');
            game.load.image('rcasa', 'Imagens/rcasa.png');
            game.load.image('rarvore', 'Imagens/rarvore.png');
            game.load.image('rcolher', 'Imagens/colher.png');
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');

        },

        create: function () {
            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(150, 110, 'quadro');
            game.add.sprite(160, 350, 'resposta');
            game.add.sprite(300, 120, 'casa');
            rcasa = game.add.sprite(110, 500, 'rcasa');
            rarvore = game.add.sprite(300, 500, 'rarvore');
            rcolher = game.add.sprite(500, 500, 'rcolher');
            this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
            this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

            rcasa.inputEnabled = true;
            rcasa.input.enableDrag(true);
            rarvore.inputEnabled = true;
            rarvore.input.enableDrag(true);
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
            game.state.start("Fase 4");        
        },
         playsair: function (button) {
            game.state.start("Fase 6");        
        } 
    };