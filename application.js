function Die(){
  this.side = 6
};

Die.prototype.roll = function() {
  return Math.floor((Math.random()*this.side)+1);
};

// function Bag () {
//   this.dice = []
// }


$(document).ready(function() {
 var diceHolder = new Bag;
 var die = new Die;
 var newDie = '<div class="die">0</div>';

 $('#roller button.add').on('click', function() {
    $('.dice').append(newDie);
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(index ,value) {
      $(value).text(die.roll());
    });
  });
});

