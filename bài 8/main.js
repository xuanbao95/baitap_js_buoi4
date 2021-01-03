function toaDo(event) {
    event.preventDefault();
    var a = document.getElementById("a").Value;
    var b = document.getElementById("b").Value;
    var c = document.getElementById("c").Value;
    var d = document.getElementById("d").Value;
    var e = document.getElementById("e").Value;
    var f = document.getElementById("f").Value;
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var ten_1 = document.getElementById("tenSv_1").value;
    var ten_2 = document.getElementById("tenSv_2").value;
    var ten_3 = document.getElementById("tenSv_3").value;
    var toaDoSv_1 = Math.sqrt((x - a) + (y - b));
    var toaDoSv_2 = Math.sqrt((x - c) + (y - d));
    var toaDoSv_3 = Math.sqrt((x - e) + (y - f));

    // // if (toaDoSv_1 > toaDoSv_2) {
    // //     return max = toaDoSv_1;
    // // } else if (toaDoSv_1 > toaDoSv_3) {
    // //     max = toaDoSv_1;
    // // } else {
    // //     max = toaDoSv_3;
    // // }
    // // if (toaDoSv_1 < toaDoSv_2) {
    // //     return max = toaDoSv_2;
    // // } else if (toaDoSv_2 > toaDoSv_3) {
    // //     max = toaDoSv_2;
    // // } else {
    // //     max = toaDoSv_3;
    // // }
    // document.getElementById("thongBao").innerHTML = max;
    if (toaDoSv_1 === maxThreeNum(toaDoSv_1, toaDoSv_2, toaDoSv_3)) {
        document.getElementById("thongBao").innerHTML = ten_1 + " là dài nhất : " + toaDoSv_1;
    } else if (toaDoSv_2 === maxThreeNum(toaDoSv_1, toaDoSv_2, toaDoSv_3)) {
        document.getElementById("thongBao").innerHTML = ten_2 + " là dài nhất : " + toaDoSv_2;
    } else {
        document.getElementById("thongBao").innerHTML = ten_3 + " là dài nhất : " + toaDoSv_3;
    }
}
function maxTwoNum(a, b) {
    return (a > b ? a : b);
}
function maxThreeNum(a, b, c) {
    var m = maxTwoNum(a, b);
    var ans = maxTwoNum(m, c);
    return ans;
}
