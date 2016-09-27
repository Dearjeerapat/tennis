function Tennis(){
  var scoreA = 0;
  var scoreB = 0;

  function playerAGetScore(){

  }
  function playerBGetScore(){

  }
  this.start = function(){
    scoreA = 0;
    scoreB = 0;
  }
  this.echo = function(){
    if(scoreA == 0 && scoreB == 0){return 'Love - Love';}
  }


}

describe("Tennis game", function() {
  it('should echo "Love - Love" when starting the game', function() {
    var tennis = new Tennis();
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
});
