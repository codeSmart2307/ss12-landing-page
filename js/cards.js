$(document).ready(function(){

    // Hide the IEEE div by default
    $('#ieee-card').hide();
  
    // When the SS12 button is clicked
    $('#ss12-btn').click(function(){ 
        $('#know-more-btn').fadeIn();
        $('#know-more-link').fadeIn();
        $('#ieee-card').fadeOut();
        $('#ss12-card-group').fadeIn();
        $('#ss12-btn').addClass('placeholder');
        $('#ieee-btn').removeClass('placeholder');
    });
  
    // When the IEEE button is clicked
    $('#ieee-btn').click(function(){ 
        $('#know-more-btn').fadeOut();
        $('#know-more-link').fadeOut();
        $('#ss12-card-group').fadeOut();
        $('#ieee-card').fadeIn();
        $('#ieee-btn').addClass('placeholder');
        $('#ss12-btn').removeClass('placeholder');
    }); 
  });