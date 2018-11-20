function checaIdade(idade) {

    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (idade > 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

checaIdade(16)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });

var listElement = document.querySelector("ul");

function buscarRepositorios() {
    listElement.innerHTML = '';
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(document.createTextNode("Carregando..."));
    listElement.appendChild(loadingElement);

    var nome = document.querySelector('input').value;
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', "https://api.github.com/users/" + nome + "/repos");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            listElement.innerHTML = '';
            var repos = JSON.parse(xhr.responseText);
            
            for (repo of repos) {
                var repoElement = document.createElement("li");
                repoElement.appendChild(document.createTextNode(repo.name));
                listElement.appendChild(repoElement);
            }
           
        }
    }

    xhr.send();

}