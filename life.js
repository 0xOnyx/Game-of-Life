
/*

1 - Toute cellule vivante avec moins de deux voisins vivants meurt, comme par sous-population.
2 - Toute cellule vivante avec deux ou trois voisins vivants vit jusqu'à la prochaine génération.
3 - Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.
4 - Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.



*/



class Life{
  constructor(canvas, weigth, heigth, scale, refresh){
    this.canvas = canvas
    this.game = []
    this.weigth = weigth
    this.heigth = heigth
    this.refresh = refresh
    this.scale = scale

    this.init()
  }


  init(){
    for(let y = 0 ; y < this.heigth ; y++){
      this.game[y] = []
      for(let x = 0 ; x < this.weigth ; x++){
        this.game[y][x] = Math.floor(Math.random() * 2)
      }
    }

    this.write(this.game)
    this.loop()
  }



  write(array){
    for(let y = 0 ; y < array.length ; y++){
      for(let x = 0 ; x < array[y].length ; x++){
        if(array[y][x] === 1){
          this.canvas.fillStyle = "#ecf0f1" //2c3e50
        }
        else if (array[y][x] === 0) {
          this.canvas.fillStyle = "#2c3e50"  //ecf0f1
        }
        let reactX = ((x+1) * this.scale) - this.scale
        let reactY = ((y+1) * this.scale) - this.scale
        this.canvas.fillRect(reactX, reactY, this.scale, this.scale)
      }
    }
  }


  checklife(){
    let newGame = []
    for(let y = 0 ; y < this.heigth ; y++){
      newGame[y] = []
      for(let x = 0 ; x < this.weigth ; x++){
          newGame[y][x] = 0
      }
    }


    for(let y = 0 ; y < this.heigth ; y++){
      for(let x = 0 ; x < this.weigth ; x++){
        let live = this.life(y, x, this.game)

        if(this.game[y][x] === 0 && live === 3){
          newGame[y][x] = 1
        }
        else if(this.game[y][x] === 1 && (live < 2 || live > 3) ){
          newGame[y][x] = 0
        }
        else if(this.game[y][x] === 1 && (live === 2 || live === 3) ){
          newGame[y][x] = this.game[y][x]
        }
      }
    }
    this.game = newGame
    this.write(newGame)
  }


  life(currentY, currentX, array){
    let live = 0
    for(let y = -1; y < 2 ; y++){
      for(let x = -1; x < 2; x++){
        let row = (currentX + x + this.weigth) % this.weigth
        let col = (currentY + y + this.heigth) % this.heigth
        live += array[col][row]
      }
    }
    live -= array[currentY][currentX]

    return live
  }



  loop(){
    setInterval(()=>{
      this.checklife()
    }, this.refresh)
  }
}


export default Life
