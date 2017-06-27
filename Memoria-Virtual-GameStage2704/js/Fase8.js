var pontuacao = 0;
    var scoreText;
    var ronibus;
    var rlivro;
    var rcasa;
  

    var Stage8 = function() {};

    Stage8.prototype = {

        preload: function () {
            game.load.image('fundo', 'Imagens/fundo.png');
            game.load.image('quadro', 'Imagens/imagens1.png');
            game.load.image('resposta', 'Imagens/resposta1.png');
            game.load.image('rlivro', 'Imagens/codebook.png');
            game.load.image('livro', 'Imagens/livrro.png');
            game.load.image('rcasa', 'Imagens/casa.png');
            game.load.image('ronibus', 'Imagens/onibus.png');
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');
          

        },

        create: function () {
            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(170, 60, 'resposta');
            game.add.sprite(170, 150, 'quadro');
            game.add.sprite(340, 80, 'livro');
            rlivro = game.add.sprite(110, 390, 'rcasa');
            ronibus = game.add.sprite(300, 390, 'ronibus');
            rcasa = game.add.sprite(500, 390, 'rlivro');
            

                this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
                this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);
                

            rlivro.inputEnabled = true;
            rlivro.input.enableDrag(true);
            ronibus.inputEnabled = true;
            ronibus.input.enableDrag(true);
            rcasa.inputEnabled = true;
            rcasa.input.enableDrag(true);

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
            game.state.start("Fase 9");        
        },
         playsair: function (button) {
            game.state.start("Fase 6");            
        } 
    };