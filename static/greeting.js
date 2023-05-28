var today = new Date()
var curHr = today.getHours()
var greeting = document.getElementById("greeting")
if(curHr < 4){
    greeting.innerHTML = 'You should sleep. Anyway, I\'m Alan.'
}else if (curHr < 12) {
    greeting.innerHTML = 'Good morning! I\'m Alan.'
} else if (curHr < 18) {
    greeting.innerHTML = 'Good afternoon! I\'m Alan.'
} else {
    greeting.innerHTML = 'Good evening! I\'m Alan.'
}