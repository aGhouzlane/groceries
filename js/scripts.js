$(document).ready(function () {

  $("form").submit(function (e) {

    e.preventDefault();
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;
    const input5 = document.getElementById("input5").value;

    var groceries = [input1, input2, input3, input4, input5];
    groceries.sort();

    toUpper = function (x) {
      return x.toUpperCase();
    };

    array2 = groceries.map(toUpper);


    array2.forEach(function (grocery) {
      $("ul").append("<li>" + grocery + "</li>");
    });

    $("#output").show();
    $("form").hide();

  });

});