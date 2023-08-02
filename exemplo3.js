const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComPais = false;


if (temIngresso === true) {
        if (idade >= censura || estaComPais === true) { 
            console.log("Pode Entrar");
        } else {
            console.log ("Não Pode Entrar");
        }
} else { 
    console.log("Não Pode Entrar");
}