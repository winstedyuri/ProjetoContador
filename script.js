function player1() {
    var n1 = parseInt(document.getElementById('placar1').value);
    document.getElementById('placar1').value = n1 + 1;
}

function player2() {
    var n2 = parseInt(document.getElementById('placar2').value);
    document.getElementById('placar2').value = n2 + 1;
}

function apagar1() {
    var n1 = parseInt(document.getElementById('placar1').value);
    document.getElementById('placar1').value = n1 - 1;
}

function apagar2() {
    var n2 = parseInt(document.getElementById('placar2').value);
    document.getElementById('placar2').value = n2 - 1;
}

function reset() {
    document.getElementById("placar1").value = "0";
    document.getElementById("placar2").value = "0";
    document.getElementById("equipe1").value = "";
    document.getElementById("equipe2").value = "";
}

function trocar() {

    var nome1 = document.getElementById('equipe1').value;
    var nome2 = document.getElementById('equipe2').value;
    var n1 = parseInt(document.getElementById('placar1').value);
    var n2 = parseInt(document.getElementById('placar2').value);
    document.getElementById('equipe1').value = nome2;
    document.getElementById('equipe2').value = nome1;
    document.getElementById('placar1').value = n2;
    document.getElementById('placar2').value = n1;
}