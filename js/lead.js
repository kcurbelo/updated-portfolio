
// Runs on page load
$(".work-content").each(function(index) {
    $(this).delay(300*index).fadeIn(300);
}); 

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



