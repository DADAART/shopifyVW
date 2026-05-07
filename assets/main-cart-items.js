$(document).ready(function() {
  $(".template-cart #downQuantity").click(function () {               
    let inputQuantity = $(this).parent().find('.quantity__inputHidden');
    let valQuantity = parseInt(inputQuantity.val());
    if (valQuantity > 1) {
      inputQuantity.val(valQuantity - 1);         
      $("#btnUpdate").click();
    }
  });
  
  $(".template-cart #upQuantity").click(function () {
    let inputQuantity = $(this).parent().find('.quantity__inputHidden');
    let valQuantity = parseInt(inputQuantity.val());
    if (valQuantity < 999) {
      inputQuantity.val(valQuantity + 1);
      $("#btnUpdate").click();
    }
  });
  
});
