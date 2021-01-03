function btnSoChanLe(event) {
    event.preventDefault();
    var month = document.getElementById("so_1").value;
    var day = 0;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        day = 31 + " ngày";
    } else if (month === 2) {
        day = 28 + " ngày";
    } else {
        day = 30 + " ngày";
    }
    document.getElementById("footer").innerHTML = day;
}