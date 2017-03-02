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
	}, 5000);
	if($('#ytplayer').length > 0) {
		var player;
	  	var checkYT = setInterval(function () {
	    if(YT.loaded){
	        player = new YT.Player('ytplayer', {
	        	events: {
	      			'onReady': onPlayerReady,
	      			'onStateChange': onPlayerStateChange
	    		}
	        });
	        console.log("got YT")
	        clearInterval(checkYT);
		    }
		}, 100);
	  	function onPlayerReady(){
	  		console.log("player ready");
	  		$("#startPlaylist").on('click', function(){
	  			$("#controlSpan").toggleClass("fa-play-circle-o");
	  			$("#controlSpan").toggleClass("fa-pause-circle-o");
	  			switch( player.getPlayerState() ){
	  				case 1:
	  					player.pauseVideo();
	  					ga('send', 'event', 'Videos', 'pause', 'Single player');
	  					break;
	  				default:
	  					player.playVideo();
	  					ga('send', 'event', 'Videos', 'play', 'Single player');
	  					break;
	  			}
	  		})
	  	}
	  	function onPlayerStateChange(){
	  		console.log("changed status")
	  	}
	}
});
