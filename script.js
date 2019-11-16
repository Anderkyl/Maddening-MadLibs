function secondScreen(){
let color = document.getElementById("color").value;
let superla = document.getElementById("superla").value;
let adject = document.getElementById("adject").value;
let pluBoPa = document.getElementById("pluBoPa").value;
let boPa = document.getElementById("boPa").value;
let noun = document.getElementById("noun").value;
let animal = document.getElementById("animal").value;
let adject2 = document.getElementById("adject2").value;
let adject3 = document.getElementById("adject3").value;
let adject4 = document.getElementById("adject4").value;

document.getElementById("madForm").innerHTML = "<p>The " + color + " Dragon is the " + superla + " Dragon of all. It has " + adject + pluBoPa + ", and a " + boPa + " shaped like a " + noun + ". It loves to eat " + animal + ", Although it will feast on nearly anything. It is " + adject2 + " and " + adject3 + ". You must be " + adject4 + " around it, or you may end up as it's last meal!</P>";

}