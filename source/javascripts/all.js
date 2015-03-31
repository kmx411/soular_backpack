//= require_tree .
$(document).ready( function() {

  $('button#top-donate').click( function() {
    var height = $(document).height()
    $('html, body').animate({ 
      scrollTop: height
    }, '1000');
  });

  var handler = StripeCheckout.configure({
    key: 'pk_live_rbhzYGBFKsQdIq6MVQpe6gjI',
    image: '/img/documentation/checkout/marketplace.png',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

  $('button#donate-final').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Thesoularbackpack',
      description: '2 widgets',
      currency: "cad",
      amount: 1
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });

});
