let canavas = document.getElementById("game")


let context = canavas.getContext("2d")


import Life from "./life.js"

                      //Canvas   H    L   Scale  Time
let lifeGame = new Life(context, 200, 100, 30, 1)


/*
H   ==>  Hauteur du tableaux
L   ==>  Largeur du tableaux
Scale ==> Grandeur de chaque cellule
Time ==> Time de refresh



*/
let jeremy = `
 ▄▄▄██▀▀▀▓█████  ██▀███  ▓█████  ███▄ ▄███▓▓██   ██▓
   ▒██   ▓█   ▀ ▓██ ▒ ██▒▓█   ▀ ▓██▒▀█▀ ██▒ ▒██  ██▒
   ░██   ▒███   ▓██ ░▄█ ▒▒███   ▓██    ▓██░  ▒██ ██░
▓██▄██▓  ▒▓█  ▄ ▒██▀▀█▄  ▒▓█  ▄ ▒██    ▒██   ░ ▐██▓░
 ▓███▒   ░▒████▒░██▓ ▒██▒░▒████▒▒██▒   ░██▒  ░ ██▒▓░
 ▒▓▒▒░   ░░ ▒░ ░░ ▒▓ ░▒▓░░░ ▒░ ░░ ▒░   ░  ░   ██▒▒▒
 ▒ ░▒░    ░ ░  ░  ░▒ ░ ▒░ ░ ░  ░░  ░      ░ ▓██ ░▒░
 ░ ░ ░      ░     ░░   ░    ░   ░      ░    ▒ ▒ ░░
 ░   ░      ░  ░   ░        ░  ░       ░    ░ ░
                                            ░ ░

`


console.log(jeremy)
