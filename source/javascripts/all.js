//= require_tree .
$(document).ready( function() {

  $('button#top-donate').click( function() {
    var height = $(document).height()
    $('html, body').animate({ 
      scrollTop: height
    }, '1000');
  });

  $('button#donate-final').click( function() {
    val = parseInt($('.donate-amount').val(), 10);
    if( isNaN(val) ) {
      alert('you cant donate a word :(');
    }
  });

});
