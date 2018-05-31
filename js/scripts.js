$(document).ready(function() {
  $("button#new-contact").click(function() {
    $("#name").show();
  })

  $("#name").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#name1").val();
    var lastName = $("input#name2").val();
    var userName = firstName + " " + lastName;
    var streetAdress = $("input#street-address").val();
    var city = $("input#city").val();
    var state = $("input#state").val().toUpperCase();
    var zipcode = $("input#zip-code").val();
    var userAddress = streetAdress + "<br>" + city + ", " + state + " " + zipcode;
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("#collected-data").show();
    $("#name").hide();
    $("ul#contact-list").prepend("<li>" + userName + "</li>");

    $("ul#contact-list li").first().click(function() {
      $("#user-name").text(userName);
      $("#user-street").html(userAddress);
      $("#user-phone").text(phone);
      $("#user-email").text(email);
    });


  });

});
