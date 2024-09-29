document.getElementById('hamburger').addEventListener('click',function(){
   var a = document.querySelector('.responsive-header');
   if(a.style.display == "flex"){
    a.style.display="none"
   }else{
    a.style.display='flex'
   }
});


function OpenDialog() {
   var dialog = document.querySelector('.login-diaglog-box');
   var displayStyle = window.getComputedStyle(dialog).display;
   
   if (displayStyle === "none") {
       dialog.style.display = "block";
       document.querySelector('main').style.filter = "brightness(40%)";
       document.querySelector('header').style.filter = "brightness(40%)";
   } else {
       dialog.style.display = "none";
       document.querySelector('main').style.filter = "brightness(100%)";
       document.querySelector('header').style.filter = "brightness(100%)";
   }
}


function closeDialog(){
   var dialog = document.querySelector('.login-diaglog-box');
   dialog.style.display = "none";
   document.querySelector('main').style.filter="brightness(100%)"
   ;   
   document.querySelector('header').style.filter="brightness(100%)"
   ; 


}
function OpenSignupDialog(){
   var dialog = document.querySelector('.login-diaglog-box');
   dialog.style.display = "none";
   var dialog2 = document.querySelector('.sign-diaglog-box');
   dialog2.style.Top="100%";
   if(dialog2.style.display == "block"){
      dialog2.style.display = "none";
   }else{
      dialog2.style.display = "block";

   }

}
;function ReOpenSign(){
   var dialog = document.querySelector('.login-diaglog-box');
   var dialog2 = document.querySelector('.sign-diaglog-box');
dialog2.style.display = "none";
dialog.style.display = "block";

}

function closeDialog2(){
   var dialog = document.querySelector('.sign-diaglog-box');
   dialog.style.display = "none";
   document.querySelector('main').style.filter="brightness(100%)"
   ;   
   document.querySelector('header').style.filter="brightness(100%)"
   ; 


}

