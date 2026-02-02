function electric_bill(){
	var unit= 120;
	var bill;
	
	if(unit<=50){
		bill= unit*2;
	
	}
	else if (unit <=100){
		bill= unit*3;
	}
	else{
		bill=(50 * 2) + (50 * 3) + (units - 100) * 5;
	}
	alert("TOTAL ELECTRICAL BILL : RS"+bill)
}