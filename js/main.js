jQuery(document).ready(function(){
	
	var uagent = navigator.userAgent;
	    uagent = uagent.indexOf("MSIE");
	    if(uagent != -1){
	        var ie = true;
	        }
        if(ie){
          $(".wrap_side").addClass("ie");
            }



	$('[data-link="left"]').addClass('step-1');
	
	var contentHeight = $('.wrapper').height(); 
	
	if(contentHeight <= 1024){
		$('[data-link="right"]').addClass('step-1');
	}
	else{
		$(window).on('scroll', function () {
	        if( $(window).scrollTop() >= 500 ) {
	            $('[data-link="right"]').addClass('step-1');
	        }
	    });
		
	}
	
	
	
	
	$('[data-link="right"]').on("mouseenter",function(){
		$(this).find(".s-hover, .s-front").addClass("face");
	    $(this).find(".i-block").addClass("hover");
	  
	  	return false;
	});
	$('[data-link="right"]').on("mouseleave",function(){
	    $(this).find(".i-block").removeClass("hover");
	  
	  	return false;
	});
		
		
});



