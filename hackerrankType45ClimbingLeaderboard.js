function climbingLeaderboard(ranked, player) {
    ranked=[...new Set(ranked)]
    let rankList=[]

    function getPlayerrank(playerrank){
        if(playerrank<ranked[ranked.length-1]){
             ranked.push(playerrank)
             rankList.push(ranked.length)
        }
        else{
            for(let i=0;i<ranked.length;i++){
                if(playerrank>ranked[i]){
                  rankList.push(i+1)
                  ranked.unshift(playerrank)
                  break
                }
                else if(playerrank===ranked[i]){
                    rankList.push(i+1)
                    break
                }
                else if(playerrank<ranked[i] && playerrank>ranked[i+1]){
                    rankList.push(i+2)
                    ranked.splice(i+2,playerrank)
                    break
                }
              }
        }
     
    }
   
  for(let i=0;i<player.length;i++){
   getPlayerrank(player[i])
  }
 return rankList
}
console.log(climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]))