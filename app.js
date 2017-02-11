$(document).ready(function() {
  controller.onClickListener()
})

let controller = {
  onClickListener: function(){
    $('#roller button.add').on('click', view.addDice)
    $('#roller button.roll').on('click', view.rollDice)
  },
  getData: function(){
    return model.randomSix()
  }
}

let view = {
  addDice : function(){
    $('.dice').append('<div class="die">0</div>')
  },
  rollDice: function() {
    $('.die').each(function(k, die) {
      $(die).text(controller.getData)
    })
  }
}

let model = {
  randomSix: function(){
    return Math.floor((Math.random()*6)+1)
  }
}
