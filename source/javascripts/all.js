//= require_tree .
$(document).ready( function() {

  if (window.location.protocol != "https:") { 
    window.location.replace("https:" + window.location.href.substring(window.location.protocol.length));
  }

  window.amount = 1000;

  $('button#top-donate').click( function() {
    var height = $(document).height()
    $('html, body').animate({ 
      scrollTop: height
    }, '1000');
  });

  var handler = StripeCheckout.configure({
    key: 'pk_live_rbhzYGBFKsQdIq6MVQpe6gjI',
    token: function(token) {
      $.ajax({
        method: "POST",
        url: "https://backpack-stripe.herokuapp.com/",
        data: {
          amount: window.amount,
          description: 'A Donation!',
          stripeToken: token.id,
          stripeTokenType: token.type,
          stripeEmail: token.email
        },
        error: function(data, textStatus, errorThrown) {
          //WORST
          window.location.replace('https://www.thesoularbackpack.com/thanks')
        }

      })
    }
  });

  $('.donate-amount').on('keyup', function(){
    window.amount = parseFloat($('.donate-amount').val()).toFixed(2).replace('.','');
  })

  $('button#donate-final').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'The Soular Backpack',
      description: 'A Donation!',
      currency: "cad",
      amount: window.amount
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });

});
