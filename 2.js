"use strict";


let userName = prompt('Enter your name here!');

let userAge = +prompt('Enter your age here');

while( userName === null || userName === ''|| isNaN(userAge) || userAge === 0 ){
	
    userName = prompt('Enter your name here to continue!',userName);
    
    userAge = +prompt('Enter your age here',userAge); }

  if( userAge < 18){

     alert('You are not allowed to visit this website');
  } 
   
 else if(userAge > 18 && userAge <= 22){

	let confirmation = confirm('Are you sure you want to continue');

	if ( confirmation ){ 

	alert('Welcome,' + userName);
 }

	else{

             alert('You are not allowed to visit this website');

       }
	
}

  else{

       alert('Welcome,' + userName);

 }
	


