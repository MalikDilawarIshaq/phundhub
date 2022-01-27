$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();


  
// Show drop down
var threeMonths, sixMonths,x,amount,totalWeeks,fivePercent,tenPercent,perWeek;
function showDropDown(){
     x = document.getElementById("drop");
    if (x.style.display === "none") {
       
      x.style.display = "block";
    } else {
        console.log("hide")
      x.style.display = "none";
    }
}


// header drop down

function showHeaderDrop(){
  var y = document.getElementById("header-drop");
  if (y.style.display === "none") {
     
    y.style.display = "block";
  } else {
      console.log("hide")
    y.style.display = "none";
  }
}

// header Sub drop down

function ShowSubDropDown(){
  var z = document.getElementById("subDropDown");
  if (z.style.display === "none") {
     
    z.style.display = "flex";
  } else {
      console.log("hide")
    z.style.display = "none";
  }
}




function get3Month(){
    threeMonths = parseInt(document.getElementById("3month").value);
    document.getElementById("dropdownMenuButton").innerHTML= "3 Months";
    sixMonths = "";
    x.style.display = "none";
}
function get6Month(){
    sixMonths = parseInt(document.getElementById("6month").value);
    document.getElementById("dropdownMenuButton").innerHTML= "6 Months";
    threeMonths = "";
    x.style.display = "none";
}
function calculate(){
    amount = document.getElementById("amount").value;
 if(amount){
    if(threeMonths){
         totalWeeks = threeMonths*4;
         document.getElementById("weeks").innerHTML= totalWeeks;
        fivePercent = (amount*5)/100;
             amount = parseInt(amount) + parseInt(fivePercent);

              perWeek = amount/totalWeeks;
              console.log(perWeek)
         document.getElementById("weeklyPayment").innerHTML = "$"+ " " + parseInt(perWeek);
         console.log(amount,totalWeeks)
    }
    else if(sixMonths){
        totalWeeks = sixMonths*4;
         document.getElementById("weeks").innerHTML= totalWeeks;
        tenPercent = (amount*10)/100;
        amount = parseInt(amount) + parseInt(tenPercent);
         perWeek = amount/totalWeeks;
         console.log(perWeek)
         document.getElementById("weeklyPayment").innerHTML = "$"+ " " + parseInt(perWeek);
         console.log(amount,totalWeeks)
    }
    else{
        alert("Please Select Length");
        
    }
 }
 else{
     alert("Please Enter Amount");
 }
 amount = document.getElementById("amount").value = " ";
 document.getElementById("dropdownMenuButton").innerHTML= "3 months ";
}


