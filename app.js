

class Life{
  constructor(canavas, weigth, heigth, refresh){
    this.game = []
    this.canavas = canavas
    this.init()
    this.weigth = weigth
    this.heigth = heigth
    this.refresh = refresh
  }


  init(){
    for(let y = 0 ; y < this.heigth ; y++){
      for(let x = 0 ; x < this.weigth ; x++){
        this.game[y][x] = Math.floor(Math.random() * 2)
      }
    }
    this.time()
  }
}


write(){
  for(let y = 0 ; y < this.heigth ; y++){
    for(let x = 0 ; x < this.weigth ; x++){
        if(this.game[y][x] === 1){

        }
        else if(this.game[])
      }
    }
  }
}


life()



loop(){
  setInterval(()=>{
    life()
  }, refresh)
}
