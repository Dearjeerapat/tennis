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
    else if (scoreA == 30 && scoreB == 0){return 'Thirty - Love';}
    else if (scoreA == 40 && scoreB == 0){return 'Forty - Love';}
    else if (scoreA == 0 && scoreB == 15){return 'Love - Fifteen';}
    else if (scoreA == 0 && scoreB == 30){return 'Love - Thirty';}
    else if (scoreA == 0 && scoreB == 40){return 'Love - Forty';}
    else if (scoreA == 15 && scoreB == 15){return 'Fifteen - Fifteen';}
    else if (scoreA == 15 && scoreB == 30){return 'Fifteen - Thirty';}
    else if (scoreA == 15 && scoreB == 40){return 'Fifteen - Forty';}
    else if (scoreA == 30 && scoreB == 15){return 'Thirty - Fifteen';}
    else if (scoreA == 30 && scoreB == 30){return 'Thirty - Thirty';}
    else if (scoreA == 30 && scoreB == 40){return 'Thirty - Forty';}
    else if (scoreA == 40 && scoreB == 15){return 'Forty - Fifteen';}
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
  it('should echo "Forty - Love" when player A get third score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Forty - Love');
  });
  it('should echo "Love - Fifteen" when player B get first score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('should echo "Love - Thirty" when player B get second score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
  it('should echo "Love - Forty" when player B get third score', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Forty');
  });
  it('should echo "Fifteen - Fifteen" when player A and player B have 15 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  });
  it('should echo "Fifteen - Thirty" when player A have 15 point, player B have 30 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Thirty');
  });
  it('should echo "Fifteen - Forty" when player A have 15 point, player B have 40 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Forty');
  });
  it('should echo "Thirty - Fifteen" when player A have 30 point, player B have 15 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Thirty - Fifteen');
  });
  it('should echo "Thirty - Thirty" when player A have 30 point, player B have 30 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Thirty - Thirty');
  });
  it('should echo "Thirty - Forty" when player A have 30 point, player B have 40 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Thirty - Forty');
  });
  it('should echo "Forty - Fifteen" when player A have 40 point, player B have 15 point', function() {
    var tennis = new Tennis();
    tennis.start();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerAGetScore();
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Forty - Fifteen');
  });

});
