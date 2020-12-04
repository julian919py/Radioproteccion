var organo_select = "";
var value_organo = 0;
var value_radiacion = 0;
var deq = 0;
var rad_x = 1;
var rad_alfa = 20;
var rad_n1 = 5;
var rad_n2 = 10;
var rad_n3 = 20;
var rad_n4 = 10;
var rad_n5 = 5;
var rad_p = 5;
var e = 0;


function organo(){
    organo_select = document.getElementById('list');
    vo = parseFloat(organo_select.value);

    //alert("El valor del organo que selecciono fue: " + value_organo); 
}

function send(){
    vr = parseFloat(document.getElementById('input_D').value);
    //alert("El valor del organo que selecciono fue: " + value_radiacion);
    deq = vr*rad_x + vr*rad_alfa + vr*rad_n1 + vr*rad_n2 + vr*rad_n3 + vr*rad_n4 + vr*rad_n5 + vr*rad_p;
    e = vo * deq;

    document.getElementById('request').innerHTML = e;
}