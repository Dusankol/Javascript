

/*TASK 1*/

var dataOld=[34, true, "Peter", 1992];

var dataNew=[];

for(var i=0;i<dataOld.length;i++) {
	dataNew[i]=dataOld[i]
};

console.log(dataNew);


/*TASK 2*/

var dataOld = [34, true, "Peter", 1992];

var dataNew = [];

for(var i=0;i<dataOld.length;i++){
	dataNew[i]=dataOld[dataOld.length-1-i]
};

console.log(dataNew);


/*TASK 3*/

var dataOld = [34, true, "Peter", 1992];

var dataNew = [12, "Jack"];

for(var i=2;i<dataOld.length+2;i++){
	dataNew[i]=dataOld[i-2]
};

console.log(dataNew);


/*TASK 4*/

var a = [12, 56, 32, 44, 69];

var b = [88, 7, 13];

var c =[];

/*Originalno sam uradio ovako, obzirom da smo pominjali push komandu 

for(i=0;i<a.length;i++) {c.push(a[i])};

for(i=0;i<b.length;i++) {c.push(b[i])};

console.log(c);*/

for(var i=0;i<a.length;i++){
	c[i]=a[i]
};

for(var i=0;i<b.length;i++){
	c[i+a.length]=b[i]
};

console.log(c);





/*TASK 5*/

var a = [12, 56, 32, 44];

var b = [88, 7, 13];

var c = [];


for(var i=0;i<a.length;i++){
	c[i*2]=a[i]
};

for(var i=0;i<b.length;i++){
	c[2*i+1]=b[i]
};


	console.log(c);


/*TASK 6*/

var x=("");

for(var i=0;i<6;i++)
{
	x=x+("*");
	console.log(x);
};

/*A moze i ovako*/
/*for(var i=0;i<=5;i++)
{
	for(var j=0; j<=i;j++)
	{
		x=x+("*");
	}
	console.log(x);
	x=("");
		
};*/


/*TASK 7*/

var x=("");

for(var i=0;i<=5;i++)
{
	for(var j=0;j<=9;j++)
	{
		if(i===0||i===5||j===0||j===9)
		{	x=x+("*");
		}else{
			x=x+(" ");
			}
	}console.log(x);
		x=("");
};