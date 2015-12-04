document.addEventListener('DOMContentLoaded', function(){
    // your code goes here


		function calculateTime() {
			origin = moment("2015-11-30 09:30:00", "YYYY-MM-DD HH:mm:ss");
			message = document.getElementById('message');

			days = moment().diff(origin, 'days');
			hours = moment().diff(origin, 'hours');
			hours = hours-(days*24);

			minutes = moment().diff(origin, 'minutes');
			minutes = minutes-(days*1440)-(hours*60);

			seconds = moment().diff(origin, 'seconds');
			seconds -= (days*86400);
			seconds -= (hours*3600);
			seconds -= (minutes*60);

			message.outerHTML = '<h1 id="message">'+days+' days '+hours+' hours '+minutes+' minutes '+seconds+' seconds since last router issue.</h1>';

		}
		setInterval(function() {
			calculateTime();
		}, 1000);

}, false);
