function veganFunction() {
    alert("Cheese cake is dairy idk maybe try and avoid cheese");
    return;
  }
  
  function orderFunction() {
    var in1 = document.getElementById("Text").value;
    if ( in1.includes("vegan") ){
      veganFunction();
    }
    else{
    
    if( document.getElementById("Plain").checked ) {
     var type = "Plain";
    }
    else if ( document.getElementById("Chocolate").checked ){
     var type = "Chocolate";
    }
    else if ( document.getElementById("Cherry").checked ){
     var type = "Cherry";
    }
    else{
     alert("please select a type"); 
     return;
    }
  
    var dropVal = document.getElementById("amount").value
      $("#form1").hide()
      $("#order").hide();
    document.getElementById("postText").innerHTML = "Order has been placed. <br>Order: " + dropVal + " " + type + " Cheesecake";
  
    }
  }