let roller = {
  addDice : function(){
    $('.dice').append('<div class="die">0</div>')
  },
  rollDice: function() {
    $('.die').each(function(k, die) {
      $(die).text(roller.randomSix())
    })
  },
  randomSix: function(){
    return Math.floor((Math.random()*6)+1)
  }
}
