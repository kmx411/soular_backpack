//= require_tree .
$(document).ready( function() {

  $('#donate-slider').slider({
    value: 1,
    min: 1,
    formater: function(value){
      return '$' + value * 20 + ' // ' + value + ' Backpacks';
    }
  });

  $('button#top-donate').click( function() {
    var height = $(document).height()
    $('html, body').animate({ 
      scrollTop: height
    }, '1000');
  });

});
