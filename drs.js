jQuery(document).ready(function($) {
// For this script you will need your Facebook page/profile ID, you can find it by visiting https://findmyfbid.com or visiting your FB profile

var ua = navigator.userAgent.toLowerCase(); // Assigns the User Agent to a variable and makes it lowercase
var isIphone = ua.indexOf("iphone") > -1; // Checks if iPhone
var isIpad = ua.indexOf("ipad") > -1; // Checks if iPad
var isAndroid = ua.indexOf("android") > -1; // Checks if Android, will work on some Windows mobiles

var fbUserID = 423992034621484;
    
if (isIphone || isIpad) {
    $('a[href*="facebook.com"]').on('click', function(e){
        e.preventDefault();
        var fUser = $(this).attr("href").match(/facebook\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.facebook.com/" + fUser;
        }, 50);
        window.location.href = "fb://profile/" + fbUserID; // Opens FB link in iOS native app
    });
    $('a[href*="instagram.com"]').on('click', function(e){
        e.preventDefault();
        var iUser = $(this).attr("href").match(/instagram\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.instagram.com/" + iUser;
        }, 50);
        window.location = "instagram://user?username=" + iUser; // Opens IG link in iOS native app
    });
    $('a[href*="twitter.com"]').on('click', function(e){
        e.preventDefault();
        var tUser = $(this).attr("href").match(/twitter\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.twitter.com/" + tUser;
        }, 50);
        window.location = "twitter://user?screen_name=" + tUser; // Opens IG link in iOS native app
    });
} else if (isAndroid) {
    $('a[href*="facebook.com"]').on('click', function(e){
        e.preventDefault();
        var fUser = $(this).attr("href").match(/facebook\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.facebook.com/" + fUser;
        }, 50);
        window.location.href = "fb://page/" + fbUserID; // Opens FB link in Android native app
    });
    $('a[href*="instagram.com"]').on('click', function(e){
        e.preventDefault();
        var iUser = $(this).attr("href").match(/instagram\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.instagram.com/" + iUser;
        }, 50);
        window.location.href = "intent://instagram.com/_u/" + iUser + "/#Intent;package=com.instagram.android;scheme=https;end"; // Opens IG link in Android native app
    });
    $('a[href*="twitter.com"]').on('click', function(e){
        var tUser = $(this).attr("href").match(/twitter\.com\/([a-zA-Z_.-]+)/)[1];
        var now = new Date().valueOf();
        setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
            window.location = "https://www.twitter.com/" + tUser;
        }, 500);
        window.location = "twitter://user?screen_name=" + tUser; // Opens Twitter link in Android native app
    });
}

});