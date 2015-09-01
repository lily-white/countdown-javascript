(function (){
	function countdown(config){
		var startDate = config.start ? new Date(config.start) : new Date();
		var endDate = new Date(config.end);
		var id = config.id || 'countdown';

		var time = (endDate - startDate)/1000;

		if(time < 0){
			if(config.callback){
				config.callback();
			}
			return;
		}

		var day = parseInt(time/86400, 10);
		var hour = parseInt(time%86400/60/60, 10);
		var minute = parseInt(time%86400%3600/60, 10);
		var second = parseInt(time%86400%3600%60, 10);

		setTimeout(function (){
			document.getElementById(id).innerHTML = day+' day '+hour+':'+minute+':'+second;
			countdown(config);
		}, 1000);
	}

	window.countdown = countdown;
})();