$( document ).ready(function() {
  
  // Function to run when window is loaded
  $( ".work-content" ).first().show( "normal", function showNext() {
      $( this ).next( ".work-content" ).show( "normal", showNext );
      console.log(this);         
  });
  $( ".work-content:last" ).addClass( "selected");

});

// Work link function
// function workFunction(){
  $( ".work-link" ).click(function() {
    // Shows work content
    $( ".work-content" ).first().show( "fast", function showNext() {
      $( this ).next( ".work-content" ).show( "fast", showNext );
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



