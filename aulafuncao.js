function imprimirDesconto (desconto) {
    console.log(desconto)
}

function aplicarDesconto (valorDoProduto, desconto) {
    const descontoEmDecimal = desconto / 100
    const valorDoDesconto = valorDoProduto * descontoEmDecimal

    imprimirDesconto (valorDoDesconto)
}

aplicarDesconto (100, 30)
aplicarDesconto (300, 60)
aplicarDesconto (200, 10)

//Para executar uma função