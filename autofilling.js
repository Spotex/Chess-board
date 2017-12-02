$(document).ready(function(){
	$('.start').click(function(){
		var i = 0;
		while(i < 4) {
			for (var n= 0; n < 4; n++) {
				$('.board').append('<div class="white"> </div>');
				$('.board').append('<div class="black"> </div>');					
			}
			for (var n= 0; n < 4; n++) {
				$('.board').append('<div class="black"> </div>');
				$('.board').append('<div class="white"> </div>');					
			}
			
			i++;
		}
		$(".start").prop( "disabled", true );
	});
});