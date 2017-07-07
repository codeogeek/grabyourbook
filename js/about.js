jQuery(document).ready(function($){
  
    $("#about").click(function(){ 
      if($("#contact-div").is(":visible")){
           $("#contact-div").slideToggle(500);
      }
      $("#about-div").slideToggle(500);
   });
    $("#contact").click(function(){ 
        if($("#about-div").is(":visible")){
           $("#about-div").slideToggle(500);
        }
        $("#contact-div").slideToggle(500);
      
   });

   $("#toggle").click(function(){
        $(".header-res").slideToggle(500);
   });
});