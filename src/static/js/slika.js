

/*
al sam se namucio da smislim kako da ovo napravim bez kreiranja
jos 9 stranica posebno za svaku sliku nego da napravim jedan sablon
koji ce raditi po nekom algoritmu :sob: :skull:

with <3 by yxzhin ^^
*/

function getURLParam(param){
    var url = window.location;
    let params = new URLSearchParams(url.search);
    return params.get(param);
}

var id = getURLParam("id");

var id_dec = parseInt(id) - 1;
if(id_dec == 0) id_dec = 9;

var id_inc = parseInt(id) + 1;
if(id_inc == 10) id_inc = 1;

let proslaSlika = document.getElementById("proslaSlika");
proslaSlika.href=`./slika.html?id=${id_dec}`;

let sledecaSlika = document.getElementById("sledecaSlika");
sledecaSlika.href=`./slika.html?id=${id_inc}`;

let slika = document.getElementById("slika");
slika.src=`./static/img/${id}.jpg`;