function descobrirCEP(){

    var cep = document.getElementById('cep').value;
    var request = new XMLHttpRequest();
    var url = 'http://cep.la/' + cep;

    request.open('GET', url, true);
    request.setRequestHeader ('Accept', 'application/json');

    request.onreadystatechange = function(){
        if(request.readyState == 3){
            console.log("Descobrindo endereço...")
        }
        if(request.readyState == 4){
            console.log("CEP: " + request.responseText);

            var jsonResponse = JSON.parse(request.responseText);

            document.getElementById("resultado").innerHTML = 'CEP: ' + jsonResponse.cep + '<br>' + 'UF: ' + jsonResponse.uf + '<br>' + 'Cidade: ' + jsonResponse.cidade + '<br>' + 'Bairro: ' + jsonResponse.bairro + '<br>' + 'Logradouro: ' + jsonResponse.logradouro;

            console.log (jsonResponse);
        }
    };
    
    request.send();
}