$(document).ready(function(){

    // Hide the IEEE div by default
    $('#ieee-card').hide();
  
    // When the SS12 button is clicked
    $('#ss12-btn').click(function(){ 
        // $('#ieee-card').slideUp();
        // $('#ss12-card-group').slideDown();
        $('#ieee-card').fadeOut();
        $('#ss12-card-group').fadeIn();
    });
  
    // When the IEEE button is clicked
    $('#ieee-btn').click(function(){ 
        // $('#ss12-card-group').slideUp();
        // $('#ieee-card').slideDown();
        $('#ss12-card-group').fadeOut();
        $('#ieee-card').fadeIn();
    }); 
  });