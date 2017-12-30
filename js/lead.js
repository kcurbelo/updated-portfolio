
  $( "#showr" ).click(function() {
    $( ".jo" ).first().show( "fast", function showNext() {
      $( this ).next( ".jo" ).show( "fast", showNext );
    });
  });
   
  $( "#hidr" ).click(function() {
    $( ".jo" ).hide( 1000 );
  });
