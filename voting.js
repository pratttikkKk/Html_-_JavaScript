function check_eligibility(){
	var num=document.getElementById("age").value;
	
	if(num>=18){
	 document.getElementById("result").innerHTML="You can vote";
	
	}
	else{
		
	document.getElementById("result").innerHTML="You can not vote";
	}
}