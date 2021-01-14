var vehiculo=new Array();

var carro1=new Object();
carro1.marca="hilux"
carro1.torque=241;
carro1.motor=2.700;
carro1.añoDeLanzamiento=2016
carro1.precio= 70000.00;
carro1.origen="Indonesia";
carro1.caballoDeFuerza= 160;

var carro2=new Object();
carro2.marca="honda";
carro2.torque=250;
carro2.motor=2.500;
carro2.añoDeLanzamiento=2012;;
carro2.precio= 60000.00;
carro2.origen="Tailandia";
carro2.caballoDeFuerza= 150;

var carro3=new Object();
carro3.marca="CRB";
carro3.torque=140;
carro3.motor= 200;
carro3.añoDeLanzamiento=2019;;
carro3.precio= 13000.00;
carro3.origen="Japan";
carro3.caballoDeFuerza= 14;

var carro4=new Object();
carro4.marca="ATW";
carro4.torque=250;
carro4.motor=2.500;
carro4.añoDeLanzamiento=2012;;
carro4.precio= 60000.00;
carro4.origen="Tailandia";
carro4.caballoDeFuerza= 150;

var carro5=new Object();
carro5.marca="cars";
carro5.torque=158;
carro5.motor=150;
carro5.añoDeLanzamiento=2010;
carro5.precio= 8000.00;
carro5.origen="Indonesia";
carro5.caballoDeFuerza= 14;

var carro6=new Object();
carro6.marca="Colx";
carro6.torque=150;
carro6.motor=125;
carro6.añoDeLanzamiento=2018;
carro6.precio= 6000.00;
carro6.origen="Indonesia";
carro6.caballoDeFuerza= 13;

var carro7=new Object();
carro7.marca="CR";
carro7.torque=184;
carro7.motor=250;
carro7.añoDeLanzamiento=2019;
carro7.precio= 14000.00;
carro7.origen="Indonesia";
carro7.caballoDeFuerza= 160;

var carro8=new Object();
carro8.marca="RS";
carro8.torque=185;
carro8.motor=200;
carro8.añoDeLanzamiento=2021;
carro8.precio= 13500.00;
carro8.origen="Indonesia";
carro8.caballoDeFuerza= 160;

var carro9=new Object();
carro9.marca="AWE";
carro9.torque=184;
carro9.motor=200
carro9.añoDeLanzamiento=2021;
carro9.precio= 13000.00;
carro9.origen="Indonesia";
carro9.caballoDeFuerza= 160;

var carro10=new Object();
carro10.marca="Mon";
carro10.torque=180;
carro10.motor=200;
carro10.añoDeLanzamiento=2017;
carro10.precio= 7000.00;
carro10.origen="Indonesia";
carro10.caballoDeFuerza= 160;

var carro11=new Object();
carro11.marca="Bal";
carro11.torque=160;
carro11.motor=190;
carro11.añoDeLanzamiento=2017;
carro11.precio= 7500.00;
carro11.origen="Indonesia";
carro11.caballoDeFuerza= 160;

var carro12=new Object();
carro12.marca="Et";
carro12.torque=180;
carro12.motor=200;
carro12.añoDeLanzamiento=2018;
carro12.precio= 7000.00;
carro12.origen="Indonesia";
carro12.caballoDeFuerza= 160;

var carro13=new Object();
carro13.marca="Jar";
carro13.torque=152;
carro13.motor=200;
carro13.añoDeLanzamiento=2017;
carro13.precio= 7000.00;
carro13.origen="Indonesia";
carro13.caballoDeFuerza= 160;

var carro14=new Object();
carro14.marca="Murcielago";
carro14.torque="Insectivoros";
carro14.motor="America del sur";
carro14.añoDeLanzamiento="25 años";
carro14.precio= 70000.00;
carro14.origen="Indonesia";
carro14.caballoDeFuerza= 160;

var carro15=new Object();
carro15.marca="plar";
carro15.torque=180;
carro15.motor=200;
carro15.añoDeLanzamiento=2018;
carro15.precio= 7000.00;
carro15.origen="Indonesia";
carro15.caballoDeFuerza= 160;

var carro16=new Object();
carro16.marca="nr";
carro16.torque=160;
carro16.motor=180;
carro16.añoDeLanzamiento=2016;
carro16.precio= 7000.00;
carro16.origen="Indonesia";
carro16.caballoDeFuerza= 160;

var carro17=new Object();
carro17.marca="Rin";
carro17.torque=177;
carro17.motor=200;
carro17.añoDeLanzamiento=2020;
carro17.precio= 7000.00;
carro17.origen="Indonesia";
carro17.caballoDeFuerza= 160;

var carro18=new Object();
carro18.marca="Orno";
carro18.torque=180
carro18.motor=250;
carro18.añoDeLanzamiento=2020;
carro18.precio= 7600.00;
carro18.origen="Indonesia";
carro18.caballoDeFuerza= 160;

var carro19=new Object();
carro19.marca="Gor";
carro19.torque=166;
carro19.motor=200;
carro19.añoDeLanzamiento=2020;
carro19.precio= 7800.00;
carro19.origen="Indonesia";
carro19.caballoDeFuerza= 160;

var carro20=new Object();
carro20.marca="Hip";
carro20.torque=190;
carro20.motor=200;
carro20.añoDeLanzamiento=2018;
carro20.precio= 7000.00;
carro20.origen="Indonesia";
carro20.caballoDeFuerza= 160;

vehiculo.push(carro1);
vehiculo.push(carro2);
vehiculo.push(carro3);
vehiculo.push(carro4);
vehiculo.push(carro5);
vehiculo.push(carro6);
vehiculo.push(carro7);
vehiculo.push(carro8);
vehiculo.push(carro9);
vehiculo.push(carro10);

function muestra(){
    alert(vehiculo[1].marca);
}
