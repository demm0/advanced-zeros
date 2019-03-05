module.exports = function getZerosCount(number, base) {
  // your implementation
      function Prime (k){                                             //Определяет простое число или нет

        let n = 0;
        for (let i = 2; i < k; i ++){
            if (k % i == 0) n++;
        }
        if (n == 0) return true;                                    //Ответ
            else return false;                                      //Ответ
    }
    
    function dividers (systemIschisl){                              //Определяет из каких простых делителей состоит число и сколько их

        let ArrPrime = [];
        for (let i = 2; i <= systemIschisl; i ++)                   //формирует массив простых чисел 2..(номер системы исчисления)
            if (Prime (i) == true) ArrPrime.push (i);  

        for (i = ArrPrime.length - 1; i > 0; i --){  		   //Определяет из каких простых делителей состоит число
			let n = 0;
            if (systemIschisl % ArrPrime[i] == 0) {
                systemIschisl = systemIschisl / ArrPrime[i];
                n ++;
            }
            if ( n == 0 ) ArrPrime.splice (i,1);
        } 
		return ArrPrime;
	}
	
	let DriverSystemIschisl = dividers (base);
	
	function dividersNumber (ArrPrime, systemIschisl){   
		
		let ArrPrimeNumber = [[],[]];
		for (i =  0; i < ArrPrime.length; i ++){       //Определяет из каких простых делителей состоит число и сколько их
			ArrPrimeNumber [i][1] = 0;
			UslDriver = true;
			let Stepen = 1;
			ArrPrimeNumber [i][0] = ArrPrime [i];
			do{
				if (systemIschisl % Math.pow (ArrPrime [i], Stepen) == 0){
					ArrPrimeNumber [i][1] = Stepen;
					Stepen++;
					}
					else UslDriver = false;
			}
			while (UslDriver == true)
		}
     return ArrPrimeNumber;                                     //Ответ
    }
	let ArrDriverSI = dividersNumber (DriverSystemIschisl, base);
	for (let i=0; i<ArrDriverSI.length; i++){
		ArrDriverSI [i][2] = 0;
		for (let j=2; j<=number; j++){
			ArrChisla = dividersNumber (DriverSystemIschisl, j);
			ArrDriverSI [i][2] = ArrDriverSI [i][2] + ArrChisla [i][1];
		}
	}
	
	let min = Math.trunc(ArrDriverSI [0][2]/ArrDriverSI [0][1])
	for (let i=0; i<ArrDriverSI.length; i++){
		if (Math.trunc(ArrDriverSI [i][2]/ArrDriverSI [i][1]) < min) min = Math.trunc(ArrDriverSI [i][2]/ArrDriverSI [i][1]);
	}

return min;
}
