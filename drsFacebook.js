<script>
(function($) {

// For this script you will need your Facebook page/profile ID, you can find it by visiting https://findmyfbid.com or visiting your FB profile

var ua = navigator.userAgent.toLowerCase(); // Assigns the User Agent to a variable and makes it lowercase
var isIphone = ua.indexOf("iphone") > -1; // Checks if iPhone
var isIpad = ua.indexOf("ipad") > -1; // Checks if iPad
var isAndroid = ua.indexOf("android") > -1; // Checks if Android, will work on some Windows mobiles

if(isIphone || isIpad) {
  setTimeout(function () { window.location = "https://www.facebook.com/[FACEBOOK USERNAME URL HERE]"; }, 5000); // Fallback in the event native app opening fails
  window.location = "fb://profile/[FACEBOOK ID HERE]"; // Opens FB link in iOS native app
} else if (isAndroid) {
  setTimeout(function () { window.location = "https://www.facebook.com/[FACEBOOK USERNAME URL HERE]"; }, 25); // Fallback in the event native app opening fails
  window.location = "fb://page/[FACEBOOK ID HERE]"; // Opens FB link in Android native app
} else {
  window.location = "https://www.facebook.com/[FACEBOOK USERNAME URL HERE]"; // Defaults to opening link in the browser
}

}) ( jQuery );
</script>
