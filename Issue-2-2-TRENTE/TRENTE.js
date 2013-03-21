/* C名題精選百則 - NodeJs practice
 * Issue 2-2,  TRENTE
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/01/18
 */ 
(function main() {		
	/*
	 * Function TRENTE: VINGT + CINQ + CINQ = TRENTE, find the value of each character
	 *	Kenny Solution
	 */	
	function TRENTE() {
		var T = 1;
		var R = 0; 

		for (var V = 8; V <= 9; ++V) {
			for (var I = 0; I <= 9; ++I) {
				for (var N = 0; N <= 9; ++N) {
					for (var G = 0; G <= 9; ++G) {
						for (var C = 2; C <= 9; ++C) {
							for (var Q = 0; Q <= 9; ++Q) {
								for (var E = 3; E <= 9; E+=2) {
					
									var characters = [T, R, V, I, N, G, C, Q, E];
									var conflict = false;
									for (var i = 0; i < characters.length; ++i) {
										for (var j = 0; j < characters.length; ++j) {
											if (i != j && characters[i] == characters[j]) {
												conflict = true;
												break;
											}
										}
									}
									if (conflict) continue;

									VINGT = V * 10000 + I * 1000 + N * 100 + G * 10 + T;
									CINQ = C * 1000 + I * 100 + N * 10 + Q;
									TRENTE = T * 100000 + R * 10000 + E * 1000 + N * 100 + T * 10 + E;

									if ((VINGT + 2 * CINQ) == TRENTE) {
										var output = "T = " + T + ", R = " + R + ", V = " + V + ", I = " + I + ", N = " + N + ", G = " + G + ", C = " + C + ", Q = " + Q + ", E = " + E;
										console.log(output);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	/* 
	* The best solution from Dr. Ching-Kuang Shene 
	*/
	var printf = console.log;
	function cksTRENTE()
	{
	     var  I, N, R=0, E, V, G, C, Q, T=1;
	     var  IN, VINGT, CINQ, TRENTE;
	     var  sum;

	     printf("\nNumber Puzzle\n");
	     printf("\n   VINGT");
	     printf("\n    CINQ");
	     printf("\n+)  CINQ");
	     printf("\n--------");
	     printf("\n  TRENTE\n");

	     for (V=8; V<=9; V++)
	       for (I=0; I<=9; I++)
	         if (I != V && I!=T)
	           for (N=0; N<=9; N++)
	             if (N!=I && N!=V && N!=T) {
	               IN = I*10 + N;
	               for (G=0; G<=9; G++)
	                 if (G!=N && G!=I && G!=V && G!=T && G!=R) 
	                    for (C=2; C<=9; C++)
	                      if (C!=G && C!=N && C!=I && C!= V && C!=T && C!=R)
	                        for (Q=2; Q<=9; Q++)
	                          if (Q!=C && Q!=G && Q!=N && Q!=I && Q!=V 
	                                   && Q!=T && Q!=R)
	                             for (E=3; E<=9; E+=2)
	                               if (E!=Q && E!=C && E!=G && E!=N && E!=I
	                                        && E!=V && E!=T && E!=R) {
	                                 TRENTE=((((T*10+R)*10+E)*10+N)*10+T)*10+E;
	                                 VINGT=((V*100+IN)*10+G)*10+T;
	                                 CINQ =(C*100+IN)*10+Q;
	                                 sum=VINGT+CINQ+CINQ;
	                                 if (sum==TRENTE) {
	                                   printf("\n\nThe answer is :\n");
	                                   printf("\n" + VINGT);
	                                   printf("\n" + CINQ);
	                                   printf("\n" + CINQ);
	                                   printf("\n--------");
	                                   printf("\n" + TRENTE);
	                                 }
	                               }
	             }
	}

	TRENTE();
	cksTRENTE();
})();