function CriarMoto() {
    let nome = document.getElementById("nomeMoto").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("AnoLancamento").value;
    let tipo = document.getElementById("tipo").value;
    let pagto = document.getElementById("pagto").value;

    let tblMotos = document.getElementById("tabelaUsuarios");

    let linha = tblMotos.insertRow();

    let cel1 = linha.insertCell(0);
    let cel2 = linha.insertCell(1);
    let cel3 = linha.insertCell(2);
    let cel4 = linha.insertCell(3);
    let cel5 = linha.insertCell(4);
    let cel6 = linha.insertCell(5);
    let cel7 = linha.insertCell(6);


    cel1.innerHTML = nome;
    cel2.innerHTML = marca;
    cel3.innerHTML = ano;
    cel4.innerHTML = tipo;
    cel5.innerHTML = pagto;
    cel6.innerHTML = "<input type='button' class='btn btn-secondary' value='Editar' onclick='EditarCel(this)'>"
    cel7.innerHTML = "<input type='button' class='btn btn-dark' value='Excluir' onclick='ExcluirCel(this)'>"

    console.log(nome);
    console.log(marca);
    console.log(ano);
    console.log(tipo);
    console.log(pagto);
}

function ExcluirCel(obj) {
    let confirmarExclusao = confirm("Deseja exluir a moto?");

    if (confirmarExclusao && obj.parentNode != undefined && obj.parentNode.parentNode != undefined) {
        obj.parentNode.parentNode.remove();
    }
}

var arrayCels = "";
function EditarCel(obj) {
    arrayCels = obj.parentNode.parentNode.childNodes;

    let nome = arrayCels[0].innerText;
    let marca = arrayCels[1].innerText;
    let ano = arrayCels[2].innerText;
    let tipo = arrayCels[3].innerHTML;
    let pagto = arrayCels[4].innerText;

    document.getElementById("nomeMoto").value = nome;
    document.getElementById("marca").value = marca;
    document.getElementById("AnoLancamento").value = ano;
    document.getElementById("tipo").value = tipo;
    document.getElementById("pagto").value = pagto;

    document.getElementById("btnCriar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";
}

function EditarMoto() {
    let nome = document.getElementById("nomeMoto").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("AnoLancamento").value;
    let tipo = document.getElementById("tipo").value;
    let pagto = document.getElementById("pagto").value;

    arrayCels[0].innerText = nome;
    arrayCels[1].innerText = marca;
    arrayCels[2].innerText = ano;
    arrayCels[3].innerText = tipo;
    arrayCels[4].innerText = pagto;

    document.getElementById("btnCriar").style.display = "block";
    document.getElementById("btnEditar").style.display = "none";
}
