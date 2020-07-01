

class Life{
  constructor(canvas, weigth, heigth, scale, refresh){
    this.game = []
    this.canavas = canavas
    this.init()
    this.weigth = weigth
    this.heigth = heigth
    this.refresh = refresh
    this.scale = scale
  }


  init(){
    for(let y = 0 ; y < this.heigth ; y++){
      for(let x = 0 ; x < this.weigth ; x++){
        this.game[y][x] = Math.floor(Math.random() * 2)
      }
    }
    this.loop()
  }
}


write(array){
  for(let y = 0 ; y < array.length ; y++){
    for(let x = 0 ; x < array[y].length ; x++){
      if(array[y][x] === 1){
        this.canvas.fillStyle = "black"
      }
      else if (array[y][x] === 0) {
        this.canvas.fillSytle = "white"
      }
      let reactX = (y * this.scale) - this.scale
      let reactY = (y * this.scale) - this.scale
      this.canavas.fillRect(x, y, this.scale, this.scale)
    }
  }
}


checklife(){
  for(let y = 0 ; y < this.heigth ; y++){
    for(let x = 0 ; x < this.weigth ; x++){
        this.game = life(y, x, this.game)

    }
  }
  write(this.game)
}

life(currentY, currentX, array){

  let newGame = []
  let num = 0
  for(let y = -1; y < 2 ; y++){
    for(let x = -1; x < 2; x++){
      let row = (x + currentY ) % this.weigth
      let col = (y + currentX )
      num += this.array[col][row]
    }
  }
  num -= this.array[currenty][currentX]

  if(this.array[currentY][currentX] === 0 && num === 3){
    newGame[currenY][currentX] = 1
  }
  else if(this.array[currentY][currentX] === 0 && (num < 2 || num > 3) ){
      newGame[currenY][currentX] = 0
  }
  else{
    newGame[currenY][currentX] = 0
  }
  return newGame

}



loop(){
  setInterval(()=>{
    checklife()
  }, refresh)
}


export default Life
