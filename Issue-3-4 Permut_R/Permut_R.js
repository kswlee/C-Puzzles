/* C名題精選百則 - NodeJs practice
 * Issue 3-4,  PERMUT_R
 * Kenny S.W. Lee <kswlee@gmail.com> 2013/07/29
 */ 
(function() {

	/* retrieved input */
	var n = 0;
	(function processInput() {
		if (process.argv.length < 3) {
			console.log("Usage: node Permut_R.js number");
			return;
		}
	
		n = process.argv[2];
	})();

	if (n <= 0) return;

	function _rotate(a, p) {
		var temp = a[p];
		for (var i = p-1; i >= 0; i--) {
			a[i+1] = a[i];
		}	
		a[0] = temp;
	}

	function _output(a) {
		var out = "";
		for (var i = 0; i < a.length; i++) {
			out += (a[i] + ",");
		}			
		console.log(out);
	}

	var count = 0;
	function permut_r(n) {
		// init 
		var data = [];
		for (var i = 0; i < n; i++) {
			data[i] = i + 1;
		}

		var pos = n - 1;
		while (pos !== 0) {
			_output(data);

			pos = n - 1;
			_rotate(data, pos);

			while(data[pos] == (pos + 1) && pos !== 0) {
				pos--;
				_rotate(data, pos);
			}
		}
	}
	permut_r(n);

})();