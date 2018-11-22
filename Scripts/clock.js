			function clock() {
			var date = new Date();
			var options = {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				year: 'numeric',
				month: 'numeric',
				day: 'numeric'
			}
			document.getElementById('clock').innerHTML = date.toLocaleString("ru", options);
			window.setTimeout('clock()',1000);
			}
			clock();