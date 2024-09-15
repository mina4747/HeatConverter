var c = document.getElementById("cel");
var f = document.getElementById("feh");
var k = document.getElementById("kel");


function convertcel() {
   f.value=(c.value*(9/5))+32;
   k.value= (parseInt(c.value) +273.15);
}
function convertfeh(){
    k.value =( (f.value - 32) * (5 / 9 ))+ 273.15;
    c.value = (f.value - 32) * (5 / 9);
}
function convertkel(){
    f.value = (k.value - 273.15) * (9 / 5) + 32;
        c.value = k.value - 273.15;
}


