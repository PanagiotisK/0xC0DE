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

/* --- Konami Code Easter Egg --- */

(function() {
    var pattern = [38,38,40,40,37,39,37,39,66,65];
    var current = 0;

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === pattern[current]) {
            current++;
            if (current === pattern.length) {
                current = 0;
                activateKonami();
            }
        } else {
            current = 0;
        }
    });

    function activateKonami() {
        var el = document.createElement('div');
        el.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;pointer-events:none;';
        el.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-family:monospace;color:#333;text-shadow:0 0 20px rgba(51,51,51,0.5);animation:konamiFade 2.5s forwards;">0xC0DE / Panagiotis Kiriakopoulos</div>';

        var style = document.createElement('style');
        style.textContent = '@keyframes konamiFade{0%{opacity:0;transform:translate(-50%,-50%) scale(0.5)}20%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}40%{transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.2)}}';
        document.head.appendChild(style);
        document.body.appendChild(el);

        setTimeout(function() {
            el.remove();
            style.remove();
        }, 2600);
    }
})();
