$(document).ready(function() {
    
    // sandwich flip
    
    $(window).scroll(function() {
        
      var verticalScroll = $(this).scrollTop();  
        
        if(verticalScroll > 742) {
            
            $('.my_sandwich').addClass('animated flip');
        } 
        
        console.log(verticalScroll);
    });
    // four items function //
    
     $(window).scroll(function() {
        
      var verticalScroll = $(this).scrollTop();  
        
        if(verticalScroll >862) {
            
            $('#my_1').addClass('animated fadeInDownBig');
                $('#my_1').removeClass('hide_me');
            
             $('#my_2').addClass('animated fadeInUpBig');
                 $('#my_2').removeClass('hide_me');
            
             $('#my_3').addClass('animated fadeInRightBig');
                 $('#my_3').removeClass('hide_me');
            
             $('#my_4').addClass('animated fadeInLeftBig');
                 $('#my_4').removeClass('hide_me');
                                
                

        } 
        
        console.log(verticalScroll);
    });
    
});