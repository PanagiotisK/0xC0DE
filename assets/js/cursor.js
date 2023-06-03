if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircleSmall = document.getElementById("mouse-circle-small"),
        mouseCircleBig = document.getElementById("mouse-circle-big");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay_small = 2,
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
