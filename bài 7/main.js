
function btnSoChanLe(event) {
    event.preventDefault();
    var so = document.getElementById("so_1").Value;
    var tram = parseInt(so / 100);
    var chuc = parseInt((so / 10) % 10);
    var donVi = parseInt(so % 10);
    var hangtram = tram;
    var hangChuc = chuc;
    var hangDonVi = donVi;
    var cachDoc = hangtram + " " + hangChuc + " " + hangDonVi;
    switch (tram) {
        case 1:
            hangtram = "Một trăm";
            break;
        case 2:
            hangtram = "Hai trăm";
            break;
        case 3:
            hangtram = "Ba trăm";
            break;
        case 4:
            hangtram = "Bốn trăm";
            break;
        case 5:
            hangtram = "Năm trăm";
            break;
        case 6:
            hangtram = "Sáu trăm";
            break;
        case 7:
            hangtram = "Bảy trăm";
            break;
        case 8:
            hangtram = "Tám trăm";
            break;
        case 9:
            hangtram = "Chín trăm";
            break;
        default:
            hangtram = "sai sai rồi";
            break;
    }
    switch (chuc) {
        case 1:
            hangChuc = "Một chục";
            break;
        case 2:
            hangChuc = "Hai chục";
            break;
        case 3:
            hangChuc = "Ba chục";
            break;
        case 4:
            hangChuc = "Bốn chục";
            break;
        case 5:
            hangChuc = "Năm chục";
            break;
        case 6:
            hangChuc = "Sáu chục";
            break;
        case 7:
            hangChuc = "Bảy chục";
            break;
        case 8:
            hangChuc = "Tám chục";
            break;
        case 9:
            hangChuc = "Chín chục";
            break;
        default:
            hangtram = "sai sai rồi";
            break;
    }
    switch (donVi) {
        case 1:
            hangDonVi = "Một đơn vị";
            break;
        case 2:
            hangDonVi = "Hai đơn vị";
            break;
        case 3:
            hangDonVi = "Ba đơn vị";
            break;
        case 4:
            hangDonVi = "Bốn đơn vị";
            break;
        case 5:
            hangDonVi = "Năm đơn vị";
            break;
        case 6:
            hangDonVi = "Sáu đơn vị";
            break;
        case 7:
            hangDonVi = "Bảy đơn vị";
            break;
        case 8:
            hangDonVi = "Tám đơn vị";
            break;
        case 9:
            hangDonVi = "Chín đơn vị";
            break;
        default:
            hangtram = "sai sai rồi";
            break;
    }
    document.getElementById("footer").innerHTML = cachDoc;

}