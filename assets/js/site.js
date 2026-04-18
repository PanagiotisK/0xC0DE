/* ==========================================================================
   Site-wide custom scripts
   Merged from: overlay_menu.js, cursor.js
   ========================================================================== */

/* --- Overlay Navigation --- */

function openNav() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    document.getElementById("myNav").style.width = vw < 1152 ? "100%" : "50%";
    document.getElementById("burgerMenuIcon").style.zIndex = "0";
}

function closeNav() {
    document.getElementById("burgerMenuIcon").style.zIndex = "1";
    document.getElementById("myNav").style.width = "0%";
}

function animateBurgerBoxOn() {
    document.getElementById("burger_top").style.fontSize = "110px";
    document.getElementById("burger_middle").style.fontSize = "110px";
}

function animateBurgerBoxOff() {
    document.getElementById("burger_top").style.fontSize = "80px";
    document.getElementById("burger_middle").style.fontSize = "500px";
}

/* --- Custom Cursor --- */

if (window.matchMedia("(min-width: 768px)").matches) {
    var mousePosX = 0,
        mousePosY = 0,
        mouseCircleSmall = document.getElementById("mouse-circle-small"),
        mouseCircleBig = document.getElementById("mouse-circle-big");

    document.onmousemove = function(e) {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    var delay_small = 2,
        revisedSmallMousePosX = 50,
        revisedSmallMousePosY = 50,
        delay_big = 5,
        revisedBigMousePosX = 50,
        revisedBigMousePosY = 50;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedSmallMousePosX += (mousePosX - revisedSmallMousePosX) / delay_small;
        revisedSmallMousePosY += (mousePosY - revisedSmallMousePosY) / delay_small;

        mouseCircleSmall.style.top = revisedSmallMousePosY + "px";
        mouseCircleSmall.style.left = revisedSmallMousePosX + "px";

        revisedBigMousePosX += (mousePosX - revisedBigMousePosX) / delay_big;
        revisedBigMousePosY += (mousePosY - revisedBigMousePosY) / delay_big;

        mouseCircleBig.style.top = revisedBigMousePosY + "px";
        mouseCircleBig.style.left = revisedBigMousePosX + "px";
    }
    delayMouseFollow();
}
