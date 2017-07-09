jQuery(document).ready(function($){
  
    $("#about").click(function(){ 
      if($("#contact-div").is(":visible")){
           $("#contact-div").slideToggle(500);
      }
      else if($("#carousel-div").is(":visible")){
              $("#carousel-div").slideToggle(500);
      }
      $("#about-div").slideToggle(500);
   });

    $("#contact").click(function(){ 
        if($("#about-div").is(":visible")){
           $("#about-div").slideToggle(500);
        }
        else if($("#carousel-div").is(":visible")){
              $("#carousel-div").slideToggle(500);
      }
        $("#contact-div").slideToggle(500);
      
   });

   $("#toggle").click(function(){
        $(".header-res").slideToggle(500);
   });

    $("#recentToggle").click(function(){
         if($("#about-div").is(":visible")){
            $("#about-div").slideToggle(500);
        }
        else if($("#contact-div").is(":visible")){
                 $("#contact-div").slideToggle(500);
        }
        
        if($("#carousel-div").is(":visible")){
            $("#recentToggle").innerHTML='Hide most selling!';
        }
        else{
            $("#recentToggle").innerHTML="View most selling!";
        }
        $("#carousel-div").slideToggle(500);
   });

});