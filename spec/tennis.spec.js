function Tennis(){
  var scoreA = 0;
  var scoreB = 0;

  this.playerAGetScore = function(){
      scoreA += 1;
  }
  this.playerBGetScore = function(){
      scoreB += 1;
  }
  this.start = function(){
    scoreA = 0;
    scoreB = 0;
  }
  this.echo = function(){
    let echoScoreA ='';
    let echoScoreB ='';

    if(scoreA === 0){echoScoreA = 'Love';}
    else if (scoreA === 1){echoScoreA = 'Fifteen';}
    else if (scoreA === 2){echoScoreA = 'Thirty';}
    else if (scoreA === 3){echoScoreA = 'Forty';}
    else if (scoreA === 4){echoScoreA = 'player A won';}

    if(scoreB === 0){echoScoreB = 'Love';}
    else if (scoreB === 1){echoScoreB = 'Fifteen';}
    else if (scoreB === 2){echoScoreB = 'Thirty';}
    else if (scoreB === 3){echoScoreB = 'Forty';}
    else if (scoreB === 4){echoScoreB = 'player B won';}

    if(scoreA === 4){
      scoreA = 0;
      return echoScoreA;
    }else if(scoreB === 4){
      scoreB = 0;
      return echoScoreB;
    }else{
      return echoScoreA + ' - ' + echoScoreB;
    }
  }
}

describe("Tennis game", function() {
  var tennis = new Tennis();
  it('should echo "Love - Love" when starting the game', function() {
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should echo "Fifteen - Love" when player A get first score', function() {
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });
  it('should echo "Thirty - Love" when player A get second score', function() {
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });
  it('should echo "Forty - Love" when player A get third score', function() {
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Forty - Love');
  });
  it('should echo "player A won" when player A get fourth score', function() {
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('player A won');
  });
  it('should echo "Love - Fifteen" when player B get first score', function() {
    tennis.start();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('should echo "Love - Thirty" when player B get second score', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
  it('should echo "Love - Forty" when player B get third score', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Forty');
  });
  it('should echo "player B won" when player B get fourth score', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('player B won');
  });
  it('should echo "Fifteen - Fifteen" when player A and player B have 15 point', function() {
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  });
  it('should echo "Thirty - Fifteen" when player A have 30 point and player B have 15 point', function() {
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Thirty - Fifteen');
  });
});
