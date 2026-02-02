function input_Electric_bill(){
	var unit=document.getElementById("units").value
	var bill;
	
	if(unit<=50){
		bill= unit*2;
	
	}
	else if (unit <=100){
		bill= unit*3;
	}
	else{
		bill=(50 * 2) + (50 * 3) + (unit - 100) * 5;
	}
	document.getElementById("result").innerHTML="total bill:"+bill;
		
	
}