function paginaindex (){
    var paginaindex = '';
    paginaindex = 'index.html';
    window.location.href = paginaindex;
}
var entra = document.querySelector('#entra');
var cxSelec = document.querySelector('#cxSelec');
var opcao = document.querySelectorAll('.opcao');
var passo = document.querySelector('#passo');
var desloc = document.querySelector('#desloc');
var sai = document.querySelector('#sai');
var botaoEnvio = document.querySelector('#botaoEnvio');
var legd = document.querySelector('.legd');

cxSelec.addEventListener ('click', function(){
    if (cxSelec.value == 'cifra-cesar') {
        desloc.style.display = 'block';
        passo.style.display = 'block';
    }else {
        desloc.style.display = 'none';
        passo.style.display = 'none';  
    }
})

function cdc (arr, chave) {
    var novoArr = [''];
    for (i = 0; i < arr.length; i++) {
        var novaMens = arr[i].charCodeAt();
        if (novaMens >= 65 && novaMens <= 90) {
            novoArr.push (String.fromCharCode(((novaMens - 65 + chave) %26) + 65))
        } else if (novaMens >= 97 && novaMens <= 122) {
            novoArr.push (String.fromCharCode(((novaMens - 97 + chave) %26) + 97))
        } else {
            novoArr.push (arr[i]);
        }
    }
    return novoArr.join ('');
}

function decodificarcdc (arr, chave) {
    var novoArr = [];
    for (var i = 0; i < arr.length; i++) {
        var novaMens = arr[i].charCodeAt();

        if (novaMens >= 65 && novaMens <= 90) {
            novoArr.push(String.fromCharCode(((novaMens - 90 - chave) %26) + 90))

        } else if (novaMens >= 90 && novaMens <= 122) {
            novoArr.push(String.fromCharCode(((novaMens - 122 - chave) %26) + 122))
        } else if (novaMens == 32) {
            novoArr.push(' ');
        } else {
            novoArr.push(arr[i]);
        }
    }
    return novoArr.join('');

}

botaoEnvio.addEventListener ('click', ()=>{
    var msg = entra.value.split ('');
    var mvr = +desloc.value;

    if (cxSelec.value == 'cifra-cesar' && opcao[0].checked) {
        sai.innerText = cdc (msg, mvr);
        legd.style.display = 'block';
        sai.style.display = 'block';
        legd.innerHTML = 'Mensagem Codificada:';
    } else {
        sai.innerText = decodificarcdc (msg, mvr);
        legd.style.display = 'block';
        legd.innerHTML = 'Mensagem Decodificada:';
        sai.style.display = 'inline-block';
    }
})

function codBase64 () {
    var novaMens = entra.value;
    return btoa (novaMens);
}

function decBase64 () {
    var novaMens = entra.value;
    return atob (novaMens);
}

botaoEnvio.addEventListener ('click', function () {
    if (cxSelec.value == 'b64' && opcao[0].checked) {
        sai.innerText = codBase64 ();
        legd.style.display = 'block';
        legd.innerHTML = 'Mensagem Codificada:';
    } else if (cxSelec.value == 'b64' && opcao[1]) {
        sai.innerText = decBase64 ();
        legd.style.display = 'block';
        legd.innerHTML = 'Mensagem Decodificada:';
    }
})