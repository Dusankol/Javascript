/*TASK 1*/

var a=15,
	b=-2,
	c=22,
	d=0,
	e=13;

if(a>b && a>c && a>d && a>e) {
	console.log("Largest number is "+a)
}

else if(b>c && b>d && b>e) {
	console.log("Largest number is "+b)
}

else if(c>d && c>e) {
	console.log("Largest number is "+c)
}

else if(d>e) {
	console.log("Largest number is "+d)
}

else {
	console.log("Largest number is "+e)
};


/*TASK 2*/

var a=3,
	b=-7,
	c=2;

if(a*b*c>0) {
	console.log("Sign of product of three numbers is +")
}
else{
	console.log("Sign of product of three numbers is -")
};


/*TASK 3*/

var language="Italian";

switch(language){
	case "Italian" :
	console.log("Ciao mondo");
	break;

	case "German" :
	console.log("Hallo welt")
	break;

	case "French" :
	console.log("Bonjour le monde");
	break;

	case "Spanish" :
	console.log("Hola mundo");
	break;

	case "Serbian" :
	console.log("Zdravo svete");
	break;

	default :
	console.log("Hello world");
};


/*TASK 4*/

var userAge=29,

	a=(userAge>=28)? true : false;

if(a===false) {
	console.log("User is less than 28 years old")

}else if(userAge>28){
	console.log("User is older than 28")
}else{
	console.log("User is 28")
};

	
