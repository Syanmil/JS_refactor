$(document).ready(function() {
  roller.onClickListener()
})
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
  },
  onClickListener: function(){
    $('#roller button.add').on('click', roller.addDice)
    $('#roller button.roll').on('click', roller.rollDice)
  }
}
