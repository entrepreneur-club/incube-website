(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		var untilDate = new Date(2017, 10 - 1, 6);

		$(".countdown").countdown({
			until: untilDate, 
			format: 'dHMS',
			padZeroes: true,
			labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Min', 'Sec'],
			labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
		});

	}); // End document ready

})(this.jQuery);