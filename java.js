let canavas = document.getElementById("game")


let context = canavas.getContext("2d")


import Life from  "live.js"


let game = new Life(context, 100, 100, 10, 10)
