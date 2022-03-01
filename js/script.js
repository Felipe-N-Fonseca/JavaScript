function media(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var m = (a+b+c)/3;
    document.getElementById("r").innerHTML = "Resultado: "+m
}