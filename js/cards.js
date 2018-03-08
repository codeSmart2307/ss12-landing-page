$(document).ready(function(){

    // Hide div 2 by default
    $('#ieee-card').hide();
  
    $('#ss12-btn').click(function(){ 
        // $('#ieee-card').slideUp();
        // $('#ss12-card-group').slideDown();
        $('#ieee-card').fadeOut();
        $('#ss12-card-group').fadeIn();
    });
  
    $('#ieee-btn').click(function(){ 
        // $('#ss12-card-group').slideUp();
        // $('#ieee-card').slideDown();
        $('#ss12-card-group').fadeOut();
        $('#ieee-card').fadeIn();
    }); 
  });