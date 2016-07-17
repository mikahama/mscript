//This file has been automatically compiled from MScript source

Array.prototype.uniq = function (){
var u = {};
var a = [];
for (var eukazqjjpmcaosvpwvvw = 0;eukazqjjpmcaosvpwvvw<this.length; eukazqjjpmcaosvpwvvw++){
var  item = this[eukazqjjpmcaosvpwvvw];
if ( u.hasOwnProperty(item)){
continue;
}
a.push(item);
u[item] = 1;
}
return a;
}
Array.prototype.removeAt = function(index){
array.splice(index, 1);
}
function setCookie(cname, cvalue, exdays){
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+d.toUTCString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname){
var name = cname + "=";;
var ca = document.cookie.split(";");
for (var mdtzsyifcpjjlewkwaei = 0;mdtzsyifcpjjlewkwaei<ca.length; mdtzsyifcpjjlewkwaei++){
var  c = ca[mdtzsyifcpjjlewkwaei];
while ( c.charAt(0) === ' '){
c = c.substring(1);
}
if ( c.indexOf(name) === 0){
return c.substring(name.length,c.length);
}
}
return "";
}
function int(text){
return parseInt(text);
}
function float(text){
return parseFloat(text);
}
function str(number){
return number.toString();
}
function request(url, type, callback){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
if ( xmlhttp.readyState === 4){
callback.call(xmlhttp.status, xmlhttp.responseText);
}
}
xmlhttp.open(type,url,true);
xmlhttp.send();
}
function eID(id){
var element = document.getElementById(id);
return element;
}
function eC(className){
var element = document.getElementsByClassName(className);
return element;
}
Element.prototype.eC = function (className){
var element = this.getElementsByClassName(className);
return element;
}
isOdd = function(number){
return !((number % 2) === 0);
}
isEven = function(number){
return ((number% 2) === 0);
}
if ( Element.prototype.innerText === null){
Element.prototype.innerText = function(){
return this.textContent();
}
}
function GET(attribute_name){
var gets = window.location["search"];
gets = gets.substring(1);
var get_array = gets.split("&");
for (var xkhdsqwozgqafftyvmyl = 0;xkhdsqwozgqafftyvmyl<get_array.length; xkhdsqwozgqafftyvmyl++){
var  get_item = get_array[xkhdsqwozgqafftyvmyl];
var item_parts = get_item.split("=");
if ( item_parts[0] === attribute_name){
if ( item_parts.length === 2){
return item_parts[1];
}
else {
return true;
}
}
}
return null;
}
