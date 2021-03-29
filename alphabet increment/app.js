var currentCode = 0;

function nextChar() {
    currentCode++;
    var character = String.fromCharCode(64 + currentCode);

    document.getElementById("demo").innerHTML = character;
}

nextChar();