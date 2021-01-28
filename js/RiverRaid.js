//Recuperando referência dos objetos no documento
var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

//No inicio do construtor (após declarar this.canvas)
this.jogador = new Jogador("img/aviao.png", this.canvas.width / 2 -
    5, this.canvas.height - this.canvas.height / 4, this);



//Um pequeno teste (remover depois de testar)
ctx.fillStyle = "#FF0000"; //Usar cor vermelha
ctx.fillRect(20, 30, 50, 100); //x=20, y=30, w=50 e h=100


function RiverRaid(canvasID) {
    "use strict";
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    this.temporizador = null;
    this.emPausa = true;
    this.gameOver = false;
    this.cenario = new Cenario(this);
    this.desenharTudo = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.cenario.desenhar(this.ctx);
        this.desenharTudo();
    };
    RiverRaid.teclaEsquerda = 65; //A
    RiverRaid.teclaDireita = 68; //D
    RiverRaid.teclaCima = 87; //W
    RiverRaid.teclaBaixo = 83; //S
    RiverRaid.teclaTiro = 71;

    this.pressionarTecla = function(evt) {
        switch (evt.keyCode) {
            case RiverRaid.teclaEsquerda:
                this.jogador.setMoverEsquerda(true);
                if (this.emPausa) {
                    this.pausar();
                }
                evt.preventDefault();
                break;

            case RiverRaid.teclaDireita:
                this.jogador.setMoverDireita(true);
                if (this.emPausa) {
                    this.pausar();
                }
                evt.preventDefault();
                break;
            case RiverRaid.teclaCima:
                this.jogador.setAcelerar(true);
                if (this.emPausa) {
                    this.pausar();
                }
                evt.preventDefault();
                break;
            case RiverRaid.teclaBaixo:
                this.jogador.setFrear(true);
                if (this.emPausa) {
                    this.pausar();
                }
                evt.preventDefault();
                break;
            case RiverRaid.teclaTiro:
                this.jogador.setAtirar(true);
                if (this.emPausa) {
                    this.pausar();
                }
                evt.preventDefault();
                break;
        }


    };
    //Dentro do construtor – atualizar o método
    this.desenharTudo = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.jogador.desenhar(this.ctx);
        this.cenario.desenhar(this.ctx);
    };

}; //Fim do construtor
RiverRaid.instancia = new RiverRaid("tela");

document.onkeydown = function(evt) {
    document.getElementById("tecla").innerHTML = evt.keyCode;
}

document.onkeydown = function(evt) {
    "use strict";
    RiverRaid.instancia.pressionarTecla(evt);
};
document.onkeyup = function(evt) {
    "use strict";
    RiverRaid.instancia.liberarTecla(evt);
};

//Fora do construtor – estático
RiverRaid.desenharTudo = function() {
    RiverRaid.instancia.desenharTudo();
};
document.onkeydown = function(evt) {
    document.getElementById("tecla").innerHTML = evt.keyCode;
}
document.onkeydown = function(evt) {
    "use strict";
    RiverRaid.instancia.pressionarTecla(evt);
};
document.onkeyup = function(evt) {
    "use strict";
    RiverRaid.instancia.liberarTecla(evt);
};