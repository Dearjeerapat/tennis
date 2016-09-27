describe("Tennis game", function() {
  it('should echo "Love - Love" when starting the game', function() {
    var tennis = new Tennis();
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
});
