    var text;
    var contador;
    var rcadeira;
    var rcaderno;
    var text1;

    var Stage0 = function() {};

    Stage0.prototype = {

        preload: function () {
            game.load.image('fundo', 'Imagens/fundo.png');
            game.load.image('quadro', 'Imagens/imagens1.png');
            game.load.image('resposta', 'Imagens/resposta1.png');
            game.load.image('lampada', 'Imagens/lampada1.png');
            game.load.image('rlampada', 'Imagens/rslampada.png');
            game.load.image('rcaderno', 'Imagens/caderno.png');
            game.load.image('rcadeira', 'Imagens/cadeira.png');
            game.load.image('botao', 'Imagens/avanca.png');
            game.load.image('sair', 'Imagens/sair.png');
        },

        create: function () {

            game.physics.startSystem(Phaser.Physics.ARCADE);

            game.add.sprite(0, 0, 'fundo');
            game.add.sprite(150, 110, 'quadro');
            game.add.sprite(160, 350, 'resposta');
            game.add.sprite(300, 120, 'lampada');
            rcaderno = game.add.sprite(110, 500, 'rcaderno');
            rcadeira = game.add.sprite(500, 500, 'rcadeira');
            //game.add.sprite(300, 500, 'rlampada');
            this.playButton = this.game.add.button(680,00, 'botao', this.playTheGame, this);
            this.playButton = this.game.add.button(300,10, 'sair', this.playsair, this);

                rcaderno.inputEnabled = true;
                rcaderno.input.enableDrag(true);
                rcadeira.inputEnabled = true;
                rcadeira.input.enableDrag(true);

                    text= game.add.text(0, 0, "Cronometro: "); contador = 30;
                    game.time.events.loop(Phaser.Timer.SECOND, this.mostraTempo, this);


            this.rlampada = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'rlampada');
            this.rlampada.anchor.setTo(0.5, 1);
            this.game.physics.arcade.enable(this.rlampada);
            this.rlampada.tint=0xff0ff;

            this.rlampadaCopy = this.game.add.sprite(this.game.world.centerX, 0, this.rlampada.key, this.rlampada.frame);
            this.rlampadaCopy.anchor.x = 0.5;
            this.game.physics.arcade.enable(this.rlampadaCopy);
            this.rlampadaCopy.inputEnabled = true;
            this.rlampadaCopy.input.enableDrag();
            this.rlampadaCopy.originalPosition = this.rlampadaCopy.position.clone();
            this.rlampadaCopy.events.onDragStop.add(function(currentSprite){
                this.stopDrag(currentSprite, this.rlampada);
            }, this);

        },

        StopDrag: function(currentSprite, endSprite){
            if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
                currentSprite.input.draggable = false;
                currentSprite.position.copyFrom(endSprite.position);
                currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y);
            })) {currentSprite.position.copyFrom(currentSprite.originalPosition);
                }



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
            game.state.start("Fase 2");        
        },
        playsair: function (button) {
            game.state.start("Fase 6");        
        }  
    };
