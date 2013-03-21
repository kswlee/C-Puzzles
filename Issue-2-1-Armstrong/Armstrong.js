/* C名題精選百則 - NodeJs practice
 * Issue 2-1,  Armstrong number
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function armstrong: find the armstrong numbers of 3 digits.
	 *	Kenny Solution
	 */	
	function armstrong() {
		for (var i = 1; i < 10; ++i) {
			for (var j = 0; j < 10; ++j) {
				for (var k = 0; k < 10; ++k) {
					var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
					var plus = (i * 100 + j * 10 +  k);
					if (pow == plus) {
						console.log(pow);
					}
				}
			}
		}
	}

	/* 
	* The best solution from Dr. Ching-Kuang Shene 
	*/
	function cksArmstrong() {
		var  p, q, r;            /* three digits             */
	     var  number;
	     var  count = 0;

	     console.log("Armstrong Number Search");
	     console.log("=======================");
	     console.log("Count  Number");
	     console.log("-----  ------");

	     for (number = 100; number <= 999; number++) {
	          p = Math.floor(number/100);      /* extract left most digit  */
	          q = Math.floor((number%100)/10); /* the middle digit         */
	          r = Math.floor(number%10);       /* the right most one       */	          	          
	          if (p*p*p+q*q*q+r*r*r == number) /* Armstrong # ?*/  {	          	
	          	console.log(++count + "  " + number);	               
	          }
	     }	     
	     console.log("There are 3-digit Armstrong Numbers of " + count);
	}

	armstrong();
	cksArmstrong();
})();