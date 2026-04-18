let prodNames = document.getElementsByClassName("menu__item");
let prodImg = document.getElementById("prod_img");
let prodTotalCount = prodNames.length;

$( document ).ready(function() {
    if(document.getElementsByClassName("menu__item-totalProds").length > 0) {
        document.getElementsByClassName("menu__item-totalProds")[0].innerHTML = prodTotalCount;
    }

    var div = document.getElementById("desc_expl");
    if (div && div.scrollHeight <= div.clientHeight) {
        div.style.overflowY = "hidden";
    }

    // Scroll-fade: toggle gradient classes based on scroll position
    if (div && div.scrollHeight > div.clientHeight) {
        function updateFade() {
            var atTop = div.scrollTop <= 2;
            var atBottom = div.scrollTop + div.clientHeight >= div.scrollHeight - 2;

            div.classList.remove("fade-top", "fade-bottom", "fade-both");
            if (atTop) {
                div.classList.add("fade-bottom");
            } else if (atBottom) {
                div.classList.add("fade-top");
            } else {
                div.classList.add("fade-both");
            }
        }
        updateFade();
        div.addEventListener("scroll", updateFade);
    }
});

function productOnHover(prodItem){
    for (var i = 0; i < prodTotalCount; i++) {
        if(prodItem == prodNames[i]){
            document.getElementsByClassName("menu__item-hoveredProd")[0].innerHTML = i+1;
            document.getElementsByClassName("menu__item-totalProds")[0].innerHTML = prodTotalCount;
            prodImg.src = prodItem.getElementsByClassName("menu__item-image")[0].innerHTML;
        }
    }
}