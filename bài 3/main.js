function btnSoChan(event) {
    event.preventDefault();
    var a = document.getElementById("so_1").value;
    var b = document.getElementById("so_2").value;
    var c = document.getElementById("so_3").value;
    var soChan = 0;
    var soLe = 0;
    if (a % 2) {
        soLe = a++;
    } else {
        soChan = a++;
    }
    if (b % 2) {
        soLe = b++
    } else {
        soChan = b++
    }
    if (c % 2) {
        soLe = c++
    } else {
        soChan = c++
    }
    document.getElementById("footer").className = "d-block";
    document.getElementById("footer").innerHTML = "sô lượng số chẵn : " + soChan + " " + "số lượng số lẻ : " + soLe;
}
// function checkSoChan(a, b, c) {
//     var a = document.getElementById("so_1").value;
//     var b = document.getElementById("so_2").value;
//     var c = document.getElementById("so_3").value;
//     if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
//         var soChan = "có 3 số chẵn";
//     } else if (a % 2 === 0 && b % 2 === 0 && c % 2 != 0) {
//         soChan = "có 2 số chẵn";
//     } else if (a % 2 != 0 && b % 2 === 0 && c % 2 === 0) {
//         soChan = "có 2 số chẵn";
//     } else if (b % 2 != 0 && a % 2 === 0 && c % 2 === 0) {
//         soChan = "có 2 số chẵn";
//     } else if (b % 2 != 0 && a % 2 != 0 && c % 2 === 0) {
//         soChan = "có 1 số chẵn";
//     } else if (a % 2 === 0 && b % 2 != 0 && c % 2 != 0) {
//         soChan = "có 1 số chẵn";
//     } else if (c % 2 === 0 && b % 2 != 0 && c % 2 != 0) {
//         soChan = "có 1 số chẵn";
//     } else {
//         soChan = "không có số chẵn nào";
//     }
// }