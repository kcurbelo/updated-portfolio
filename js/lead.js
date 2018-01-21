
// Runs on page load
$(".work-content").each(function(index) {
    $(this).delay(300*index).fadeIn(300);
    $(this).addClass("work-content-d-i");
}); 


function hideWork() {
    $( "#dragon-cont" ).hide( "fast" );
    $( "#bitcoin-cont" ).hide( "fast" );
    $( "#event-cont" ).hide( "fast" );
    $( "#sassy-cont" ).hide( "fast" );    
}


// Work link function
// function workFunction(){
  $( ".work-link" ).click(function() {
    // Shows work content
    $(".work-content").each(function(index) {
        $(this).delay(300*index).fadeIn(300);
    }); 
    // Hides about content
    $( ".about-content" ).hide( "fast" );
    // Hides contact content
    $( ".contact-content" ).hide( "fast" );
    // Hides everything in work cont 
    hideWork();
    // Add active link class
    $( ".work-link" ).addClass("active");
    // Remove active link class for other link
    $( ".about-link" ).removeClass("active");
    // Remove active link class for other link
    $( ".contact-link" ).removeClass("active");    
  });
// }

// function aboutFunction(){
  // About link function
  $( ".about-link" ).click(function() {
    // Shows about content
    $( ".about-content" ).slideDown( "slow" );
    // Hides work content
    $( ".work-content" ).hide( "fast" );
    // Hides contact content
    $( ".contact-content" ).hide( "slow" );
    // Add active link class
    $( ".work-link" ).removeClass("active");
    // Remove active link class for other link
    $( ".about-link" ).addClass("active");
    // Remove active link class for other link
    $( ".contact-link" ).removeClass("active");        
  });
// }

// function contactFunction(){
  // Contact link function
  $( ".contact-link" ).click(function() {
    // Shows about content
    $( ".contact-content" ).slideDown( "slow" );
    // Hides about content
    $( ".about-content" ).hide( "slow" ); 
    // Hides work content
    $( ".work-content" ).hide( "fast" );
    // Add active link class
    $( ".work-link" ).removeClass("active");
    // Remove active link class for other link
    $( ".about-link" ).removeClass("active");
    // Remove active link class for other link
    $( ".contact-link" ).addClass("active");            
  });
// }

  $( "#dragon-btn" ).click(function() {
    // Shows about content
    $( "#dragon-cont" ).show( "medium" );
    // Hides about content
    $( ".work-content" ).hide( "medium" );          
  });
  $( "#bitcoin-btn" ).click(function() {
    // Shows about content
    $( "#bitcoin-cont" ).show( "medium" );
    // Hides about content
    $( ".work-content" ).hide( "medium" );          
  });  
  $( "#event-btn" ).click(function() {
    // Shows about content
    $( "#event-cont" ).show( "medium" );
    // Hides about content
    $( ".work-content" ).hide( "medium" );          
  });   
  $( "#sassy-btn" ).click(function() {
    // Shows about content
    $( "#sassy-cont" ).show( "medium" );
    // Hides about content
    $( ".work-content" ).hide( "medium" );          
  });    



