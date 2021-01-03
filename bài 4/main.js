function btnTamGiac(event) {
    event.preventDefault();
    var a = document.getElementById("so_1").value;
    var b = document.getElementById("so_2").value;
    var c = document.getElementById("so_3").value;
    if (a === b && b === c) {
        var result = "tam giác đều";
    } else if (a === b) {
        result = "tam giác cân"
    } else if ((a * a + b * b) === c * c || (a * a + c * c) === b * b || (b * b + c * c) === a * a) {
        result = "tam giác vuông";
    } else {
        result = "tam giác thường";
    }
    document.getElementById("footer").innerHTML = result;
}
