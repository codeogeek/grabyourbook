/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
	$(document).ready(function(){
         
           $("#myModal").modal({
           backdrop: "static"   
           });
           $("#myModal").modal('show');
        });
        
        $(document).ready(function(){
          
             $("email1").hide();
             $("password1").hide();
             
             var error_email=false;
             var error_password=false;
             
            $("#email").focusout(function(){
                  check_email();
             console.log(error_email);
             if(error_email!==false){
                $("#btn").attr('disabled',true);
             }
             else{
                 $("#btn").attr('disabled',false);
             }
             });
             $("#password").focusout(function(){
                 check_password();
                  console.log(error_password);
                  if(error_password!==false){
                 $("#btn").attr('disabled',true);
             }
             else{
                 $("#btn").attr('disabled',false);
             }
             });
               function check_email(){
            //  var error_email;
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
             $("#register").submit(function(){ 
               
            
             check_email();
              check_password();
              if( error_email===false&&error_password===false){
                 return true;
                }
               else{
               return false;
               }   
            
             });
              
       
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
     

