jQuery(document).ready(function($){
    $("#category").click(function(){ 
      if($("#contact-div").is(":visible")){
           $("#contact-div").slideToggle(500);
      }
      else if($("#carousel-div").is(":visible")){
              $("#carousel-div").slideToggle(500);
      }
      else if($("#about-div").is(":visible")){
      $("#about-div").slideToggle(500);
    }
    $("#list-category").slideToggle(200);
   });
});