function Die() {
  this.side = 6;
  this.$view = $(this.template);
}

Die.prototype.roll = function() {
  var value = Math.floor((Math.random()*this.side)+1);
  this.$view.text(value);
};

Die.prototype.template = '<div class="die">0</div>';

function DiceHolder() {
  this.dice = [];
  this.$view = $('.dice');
}

DiceHolder.prototype.addDie = function() {
  var die = new Die();
  this.dice.push(die);
  this.$view.append(die.$view);
};

DiceHolder.prototype.rollAll = function() {
  this.dice.forEach(function(die) {
    die.roll();
  });
};

$(document).ready(function() {
  var diceHolder = new DiceHolder();
  var die = new Die();

  $('#roller button.add').on('click', function() {
    diceHolder.addDie();
  });

  $('#roller button.roll').on('click', function() {
    diceHolder.rollAll();
  });
});
