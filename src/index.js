document.getElementById("app").innerHTML = "Dobrý den";

//alert("ahoj"); ‚ ‘
/*
// scitani promene
var x = 2;
var y = prompt("Zadej číslo", "");
// var z = x + y;

document.getElementById("vysledek").innerHTML = "Součet je " + (x+(+y));

document.getElementById("vysledek").innerHTML = document.getElementById("vysledek").innerHTML += "<br /><br />Rozdíl je " + (x - (+y));
*/
/*
var osmnact = confirm("Už vám bylo 18?");
alert(osmnact);
*/

function PrictiTri(x) {
  return +x + 3;
}

/*
var cislo = prompt("Zadej čislo", "");
alert(PrictiTri(cislo));
*/

/*
var cislo = prompt("Zadej císlo", "");
if(cislo >= 18)
 alert("Už vám bylo osmnáct!");
 else
  alert("Ještě vám nebylo osmnáct!");
 */

var cislo = prompt("Zadej císlo", "");
alert(cislo >= 18 ? "Už vám bylo osmnáct" : "Ještě vám nebylo osmnáct");

/*
for (var i = 0; i <10; i++) {
  alert(PrictiTri(i));
}
*/
