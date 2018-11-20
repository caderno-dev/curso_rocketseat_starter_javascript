var listElement = document.querySelector("ul");
var inputElement = document.querySelector('input');

function listaRepositorios(repos) {
    listElement.innerHTML = '';
    for (repo of repos) {
        var repoElement = document.createElement("li");
        repoElement.appendChild(document.createTextNode(repo.name));
        listElement.appendChild(repoElement);
    }
}

function mostraLoading() {
    listElement.innerHTML = '';
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(document.createTextNode("Carregando..."));
    listElement.appendChild(loadingElement);
}

function mostraErro() {
    listElement.innerHTML = '';
    var erroElement = document.createElement("li");
    erroElement.appendChild(document.createTextNode("Erro!"));
    listElement.appendChild(erroElement);
}

function buscarRepositorios() {

    var nome = inputElement.value;
    mostraLoading();
    
    axios.get("https://api.github.com/users/" + nome + "/repos")
        .then(function(response) {
            listaRepositorios(response.data);
        })
        .catch(function() {
            mostraErro();
        });

}