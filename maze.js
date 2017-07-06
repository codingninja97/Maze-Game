alert("Welcome to my game! Enjoy!");
$(document).ready(function() {
    $('.dot').keydown(function(key) {
      switch(parseInt(key.which,10)) {
      case 37:
				$('.dot').animate({left: '-=10px'}, 'fast');
				break;
			case 38:
				$('.dot').animate({top: '-=10px'}, 'fast');
				break;
		  case 39:
				$('.dot').animate({left: '+=10px'}, 'fast');
				break;
			case 40:
				$('.dot').animate({top: '+=10px'}, 'fast');
				break;
		    }
    });
});
