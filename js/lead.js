
// Runs on page load
$(".work-content").each(function(index) {
    $(this).delay(200*index).fadeIn(200);
}); 

// Work link function
// function workFunction(){
  $( ".work-link" ).click(function() {
    // Shows work content
    $(".work-content").each(function(index) {
        $(this).delay(200*index).fadeIn(200);
    }); 
    // Hides about content
    $( ".about-content" ).hide( "fast" );
    // Hides contact content
    $( ".contact-content" ).hide( "fast" );
  });
// }

// function aboutFunction(){
  // About link function
  $( ".about-link" ).click(function() {
    // Shows about content
    $( ".about-content" ).show( "slow" );
    // Hides work content
    $( ".work-content" ).hide( "fast" );
    // Hides contact content
    $( ".contact-content" ).hide( "slow" );
  });
// }

// function contactFunction(){
  // Contact link function
  $( ".contact-link" ).click(function() {
    // Shows about content
    $( ".contact-content" ).show( "slow" );
    // Hides about content
    $( ".about-content" ).hide( "slow" ); 
    // Hides work content
    $( ".work-content" ).hide( "fast" );
  });
// }



