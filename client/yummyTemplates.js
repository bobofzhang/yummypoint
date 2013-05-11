
var textArray = [];
var text2Array = [];

Template.yummy_coins.events({
  'click input.add': function () {
    var bulletOne = document.getElementById("bullet_one").value;
    console.log(bulletOne);
    textArray.push(bulletOne);
    console.log(textArray);
    Slides.insert({
      bullet: 'first',
      text: bulletOne
    })
    return textArray;
  },
  'click input.add2': function () {
    var bulletTwo = document.getElementById("bullet_two").value;
    console.log(bulletTwo);
    text2Array.push(bulletTwo);
    console.log(text2Array);
    Slides.insert({
      bullet: 'second',
      text: bulletTwo
    })
    return text2Array;
  },
  'click input.save_slide_one': function () {
      $('.bullet_one').remove();
      $('.bullet_two').remove();
      $('.create_graph').remove();
      $('.save_slide_one').remove();
      $('.slide_inputs').append('<div> <input type="button" class="start_yummy" value="ready to start the show?"/> </div>');
    },
  'click input.start_yummy': function () {
      $('.start_yummy').remove();
      // var firstBul = Slides.findOne({});
      var bulletObj = (Slides.find({bullet: 'first'}).fetch());
      console.log(bulletObj);
      var bulletText = bulletObj[0]['text'];
      console.log(bulletText);
      $('.slide_inputs').append('<div class="bulletOneText"> <h3>' + bulletText +'</h3>');
    }
})

// Template.yummy_coins.D3test = function () {
//   console.log(Datastores.findOne({}));
//   return Meteor.call('makeDataSet');
// };

Template.yummy_coins.events({
  'click input.add_chart': function () {
    return Meteor.call('D3testinit');
  }
});
