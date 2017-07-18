/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
	// for modal not to disappear on clicking fade background  
         $("#myModal").modal({
           backdrop: "static"   
           });
           $("#myModal").modal('show');
       });
       //funtion for validating the form
      $(document).ready(function(){
        
            $("name1").hide();
             $("email1").hide();
              $("password1").hide();
               $("tel1").hide();
            var error_name=false;
          var error_email=false;
            var error_password=false;
          var error_tel=false;
            
             $("#name").focusout(function(){
                 check_name();
                 console.log(error_name);
                 if(error_name!==false){
                     $("#btn").attr('disabled',true);
                 }
                 else{
                     $("#btn").attr('disabled',false);
                 }   
             });
             $("#email").focusout(function(){
                 check_email();
                 if(error_email!==false){
                     $("#btn").attr('disabled',true);
                 } 
                 else{
                     $("#btn").attr('disabled',false);
                 }  
             });
             $("#password").focusout(function(){
                 check_password();
                 if(error_password!==false){
                     $("#btn").attr('disabled',true);
                 } 
                 else{
                     $("#btn").attr('disabled',false);
                 }
             });
             $("#tel").focusout(function(){
                 check_tel();
                 if(error_tel!==false){
                     $("#btn").attr('disabled',true);
                 } 
                 else{
                     $("#btn").attr('disabled',false);
                 }  
             });
             //name validation
             function check_name(){
                //  var error_name;
                 var name= $("#name").val().length;
                  var name1= $("#name").val();
                  
                  if( name1==="")
                  {
                     $("#name1").html("this is required");
                     $("#name1").show(),
                       error_name= true;
                        }
              else if(name<5|| name>20){
                  $("#name1").html("should have name between 5-20 character");
                     $("#name1").show(),
                       error_name= true;
                 }
                 
               
                 else{
                     error_name= false;
                     $("#name1").hide();
                 }
             }
          //checking  email validation
       function check_email(){
           
                 var pattern= new RegExp(/^[+a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
               if(pattern.test($("#email").val()))
               {
                   $("#email1").hide();
                   error_email = false;
                }
                else if($("#email").val()===""){
                    $("#email1").html("this is required");
                   $("#email1").show();
                    error_email=true;
                }
             
             else{
                   $("#email1").html("invalid email address");
                   $("#email1").show();
                    error_email=true;
                     
               }
             }
             //checking the password
             function check_password(){
                // var error_password;
                 var password= $("#password").val().length;
                  if($("#password").val()===""){
                    $("#password1").html("this is required");
                   $("#password1").show();
                    error_password=true;
                }
               else  if(password<6|| password>20){
                     $("#password1").html("should have password between 5-20 characters");
                     $("#password1").show();
                    error_password= true;
                 }
                 
                 else{
                     error_password= false;
                     $("#password1").hide();
                 }
             }
             
            function check_tel(){
            //    var error_tel;
                 var tel= new RegExp(/^[0-9]+$/i);
                if(tel.test($("#tel").val()))
                 {
                      error_tel = false;
                  $("#tel1").hide();
                }
                else if ($("#tel").val()===""){
                     $("#tel1").html("this is required");
                     $("#tel1").show();
                 error_tel = true;
                 }
                
                 else{
                     $("#tel1").html("invalid no");
                     $("#tel1").show();
                 error_tel = true;
                 }
             }
      //for submit event    
       $("#register").submit(function(){ 
                
           
            check_name();
             check_email();
            check_password();
            check_tel();
       if(error_name===false && error_email===false && error_password===false && error_tel===false){
              return true;
                }
        else{ 
                
                 return false;
                 }   
             });
   
            
     // for eye button
     // to show password   
        $("#showhide").click(function(){
              if($(this).data("val") ==="1"){
                  $("#password").prop("type","text");
                  $("#eye").attr("class","glyphicon glyphicon-eye-close");
                  $(this).data("val","0");
              }   
              else
              {
                  $("#password").prop("type","password");
                  $("#eye").attr("class","glyphicon glyphicon-eye-open");
                  $(this).data("val","1");
              }
             });
         });   
    
   

