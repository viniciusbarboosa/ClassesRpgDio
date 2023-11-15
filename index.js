class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataque = this._obterAtaque();
        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }

    _obterAtaque() {
        switch (this.tipo) {
            case "mago":
                return "usou magia";
            case "guerreiro":
                return "usou espada";
            case "monge":
                return "usou artes marciais";
            case "ninja":
                return "usou shuriken";
            default:
                return "usou um ataque indefinido";
        }
    }
}


const heroiMago = new Heroi("teste1", 1500, "mago");
const heroiGuerreiro = new Heroi("teste2", 35, "guerreiro");
const heroiMonge = new Heroi("teste3", 40, "monge");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
