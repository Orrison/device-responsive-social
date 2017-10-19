<script>
(function($) {

var ua = navigator.userAgent.toLowerCase(); // Assigns the User Agent to a variable and makes it lowercase
var isIphone = ua.indexOf("iphone") > -1; // Checks if iPhone
var isIpad = ua.indexOf("ipad") > -1; // Checks if iPad
var isAndroid = ua.indexOf("android") > -1; // Checks if Android, will work on some Windows mobiles

if(isIphone || isIpad) {
  setTimeout(function () { window.location = "https://www.instagram.com/[INSTAGRAM USERNAME HERE]/"; }, 5000); // Fallback in the event native app opening fails
  window.location = "instagram://user?username=[INSTAGRAM USERNAME HERE]"; // Opens IG link in iOS native app
} else if (isAndroid) {
  setTimeout(function () { window.location = "https://www.instagram.com/[INSTAGRAM USERNAME HERE]/"; }, 25); // Fallback in the event native app opening fails
  window.location = "intent://instagram.com/_u/[INSTAGRAM USERNAME HERE]/#Intent;package=com.instagram.android;scheme=https;end"; // Opens IG link in Android native app
} else {
  window.location = "https://www.instagram.com/[INSTAGRAM USERNAME HERE]/"; // Defaults to opening link in the browser
}

}) ( jQuery );
</script>
