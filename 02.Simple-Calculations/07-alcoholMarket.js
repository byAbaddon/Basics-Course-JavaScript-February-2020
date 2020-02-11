function alcoholMarket(arg){

  wiskeyLeva = arg[0]
  beerLt = arg[1]
  raciuLt = arg[3] 
  wineLt = arg[2]  
  wiskeyLt = arg[4] 
  
  let priceLtRakia = wiskeyLeva / 2
  let priceLtVine = priceLtRakia * 0.60 
  let priceLtBeer =  priceLtRakia   * 0.20
  
  sum = (raciuLt * priceLtRakia) + (wineLt * priceLtVine) + (beerLt * priceLtBeer) +(wiskeyLt *  wiskeyLeva)
  
  console.log(sum.toFixed(2));
}

//alcoholMarket([63.44, 3.57, 6.35, 8.15, 2.5])
