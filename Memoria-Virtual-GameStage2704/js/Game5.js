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
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');
        },
            create: function () {

            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(150, 110, 'quadro');
            game.add.sprite(160, 350, 'resposta');
            game.add.sprite(300, 120, 'onibus');

                ronibus = game.add.sprite(110, 500, 'ronibus');
                rtv = game.add.sprite(300, 500, 'rtv');
                rpipoca = game.add.sprite(500, 500, 'rpipoca');
                this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
                this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

                ronibus.inputEnabled = true;
                ronibus.input.enableDrag(true);
                rtv.inputEnabled = true;
                rtv.input.enableDrag(true);
                rpipoca.inputEnabled = true;
                rpipoca.input.enableDrag(true);

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
                game.state.start("Fase 2.1");        
            },
            playsair: function (button) {
            game.state.start("Fase 6");        
        } 
        };