
  $( "#showr" ).click(function() {
    $( ".jo" ).first().show( "fast", function showNext() {
      $( this ).next( ".jo" ).show( "fast", showNext );
    });
  });
   
  $( "#hidr" ).click(function() {
    $( ".jo" ).first().hide( "fast", function hideNext() {
      $( this ).next( ".jo" ).hide( "fast", hideNext );
    });
  });

