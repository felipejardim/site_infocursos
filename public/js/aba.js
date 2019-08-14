const metodologia = document.getElementById("metodologia");
const sobre = document.getElementById("sobre");


document.getElementById("sobreNav").onclick = (e) => {
    e.preventDefault();
    metodologia.style.display = 'none';
    sobre.style.display = 'inline';
}

document.getElementById("metodologiaNav").onclick = (e) => {
    e.preventDefault();
    metodologia.style.display = 'inline';
    sobre.style.display = 'none';
}