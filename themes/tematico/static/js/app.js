$('document').ready(function(){
	var baffleHeader = baffle('.headerTitle', {
		speed: 100
	}).start();
	function revealBaffle(){
		baffleHeader.reveal(1500);
	};
	revealBaffle();
	setInterval(function(){
		baffleHeader.start();
		baffleHeader.reveal(2000);
	}, 5000)
});
