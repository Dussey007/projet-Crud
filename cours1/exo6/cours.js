//Condition switch
let x = 2;

switch (x) {
    case 2:
        document.getElementById('p1').innerHtml = "x contient bien le 2";
        break;
    case 5:
        document.getElementById('p1').innerHTML = "x contient bien le 5";
        console.log(document.getElementById('p1').innerHtml = "x contient bien le 5");
        break;
    case 10:
        document.getElementById("p1").innerHTML = "x contient bien le 10";
        break;
    case 15:
        document.getElementById('p1').innerHTML = "x contient bien le 15";
        break;
    case 20:
        document.getElementById('p1').innerHtml = "x contient bien le 20";
        break;
    default:
        document.getElementById('p1').innerHtml = "x ne contient ni 2, 5, 10, aucun des autres";
}