let prodNames = document.getElementsByClassName("menu__item");
let prodImg = document.getElementById("prod_img");
let prodTotalCount = prodNames.length;

$( document ).ready(function() {
    if(document.getElementsByClassName("menu__item-totalProds").length > 0) {
        document.getElementsByClassName("menu__item-totalProds")[0].innerHTML = prodTotalCount;
    }

    var div = document.getElementById("desc_expl");
    if (div.scrollHeight <= div.clientHeight) {
        div.style.overflowY = "hidden";
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