//let entrada = document.getElementById('entrada');
let btn = document.getElementById('btnCalcula');
//let res = document.getElementById('resultado');

function calcula() {
    let valor = Number(document.getElementById('valor').value);
    let taxa = Number(document.getElementById('taxa').value);
    taxa /= 100.0;
    let parcela = Number(document.getElementById('parcela').value);

    let corpo = document.getElementById('corpo-tabela');
    let select = document.getElementById('opcao');

    select.addEventListener('change', function () {
        console.log(select.value)
    });

    if (select.value == 'sac') {
        const amortizacao = valor / parcela;

        for (let i = 1; i <= parcela; i++) {
            let juros = valor * taxa;
            let parcela = juros + amortizacao;
            valor += amortizacao;
            corpo.innerHTML += `<tr>
                                    <th scope="row">${i}</th>
                                    <td>${parcela}</td>
                                    <td>${juros}</td>
                                    <td>${amortizacao}</td>
                                    <td>${valor}</td>
                                </tr>`
        }
    }
    else {
        alert('Sistema PRICE');
    }

}

btn.addEventListener('click', calcula);