

getName = function() {
      var name = $("#name").val();
      var phone = $("#phone").val();
      var topics = $('#input[name=chk[]]:checked');
      alert(name + phone + topics + boxes);
    }

    getData = function() {
      var name = $("#name").val();
      var phone = $("#phone").val();
      var topics = $('#input[name=chk[]]:checked');
      data = {
        "name" : name,
        "phone" : phone,
        "topics" : []
          }
      }
updateTextField = function() {
  $("#userDump").text($("#userInput").val())
}

// var formData = JSON.stringify($("contactForm").serializeArray());

getInputData = function() {
  userData = {
    name: $("#name").val(),
    phone: $("#phone").val(),
    topics: $("#topics").val()
  }
}

var userData = {};
userData.name = $("#name").val();

getUsers = function() {
  $.ajax({
    type: "GET",
    crossDomain: true,
    url: "http://localhost:5000/getUsers",
    success: function(data) {
      userData = data;
      // giveUserFeedback("Success!")
    },
    error: function(xhr, status) {
      alert("Error");
      // giveUserFeedback("Error!")
    },
    dataType: "json"
  });
}

