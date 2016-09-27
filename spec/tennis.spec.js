function Tennis(){
  var scoreA = 0;
  var scoreB = 0;

  this.playerAGetScore = function(){
    if(scoreA == 0){
      scoreA += 15;
    }else if(scoreA == 15){
      scoreA += 15;
    }else if(scoreA == 30){
      scoreA += 10;
    }else if(scoreA == 40){
      scoreA += 10;
    }
  }
  this.playerBGetScore = function(){
    if(scoreB == 0){
      scoreB += 15;
    }else if(scoreB == 15){
      scoreB += 15;
    }else if(scoreB == 30){
      scoreB += 10;
    }else if(scoreB == 40){
      scoreB += 10;
    }
  }
  this.start = function(){
    scoreA = 0;
    scoreB = 0;
  }
  this.echo = function(){
    if(scoreA == 0 && scoreB == 0){return 'Love - Love';}
    else if (scoreA == 15 && scoreB == 0){return 'Fifteen - Love';}

  }


}

describe("Tennis game", function() {
  it('should echo "Love - Love" when starting the game', function() {
    var tennis = new Tennis();
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should echo "Fifteen - Love" when player A get first score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });
  it('should echo "Thirty - Love" when player A get second score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });
});
