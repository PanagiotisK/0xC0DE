function openNav() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  if(vw < 1152)
    document.getElementById("myNav").style.width = "100%";
  else
  document.getElementById("myNav").style.width = "50%";
  document.getElementById("burgerMenuIcon").style.zIndex = "0";
}

function closeNav() {
  document.getElementById("burgerMenuIcon").style.zIndex = "1";
  document.getElementById("myNav").style.width = "0%";
}

function openNavFull() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("burgerMenuIcon").style.zIndex = "0";
}

function closeNav() {
  document.getElementById("burgerMenuIcon").style.zIndex = "1";
  document.getElementById("myNav").style.width = "0%";
}

function animateBurgerBoxOn(){
    document.getElementById("burger_top").style.fontSize = "110px";
    document.getElementById("burger_middle").style.fontSize = "110px";
}

function animateBurgerBoxOff(){
    document.getElementById("burger_top").style.fontSize = "80px";
    document.getElementById("burger_middle").style.fontSize = "500px";
}