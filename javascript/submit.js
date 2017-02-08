function tf2submit(){
var welcomeMsg = document.getElementById('templatefinal');
var name = document.getElementById('items');
var price = document.getElementById('price');
var name2 = document.getElementById('items2');
var price2 = document.getElementById('price2');
var name3 = document.getElementById('items3');
var price3 = document.getElementById('price3');
var name4 = document.getElementById('items4');
var price4 = document.getElementById('price4');


welcomeMsg.innerHTML = "Selling "+name.value+" for "+price.value+" Refined / Keys <br>"+"Selling "+name2.value+" for "+price2.value+" Refined / Keys <br>"+"Selling "+name3.value+" for "+price3.value+" Refined / Keys <br>"+"Selling "+name4.value+" for "+price4.value+" Refined / Keys <br>";

}
