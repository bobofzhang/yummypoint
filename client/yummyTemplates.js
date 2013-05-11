
var textArray = [];
var text2Array = [];
var text3Array = [];

Template.yummy_coins.events({
  'click .text-slide': function () {
    $('.text-slide').remove();
    $('.chart-slide').remove();
    $('.liveData-slide').remove();
    // $('.make-start').append('<div class="create_graph"><input type="button" class="add_chart" value="Make a Chart!" /> </br> </br></div>');
    $('.make-start').append('<div class="slide_inputs"><div class="bullet_one"><input id="bullet_one" type="text" /> <input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet_two"> <input id="bullet_two" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet_three"><input id="bullet_three" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> <input type="button" class="make_another_slide" value="Make Another Slide" /> </br> <br> <input type="button" class="save_slides" value="Save and Preview" /> </br> <br></div>');
  },
  'click input.add': function () {
    var bulletOne = document.getElementById("bullet_one").value;
    textArray.push(bulletOne);
    Slides.insert({
      bullet: 'first',
      text: bulletOne
    })
    return textArray;
  },
  'click input.add2': function () {
    var bulletTwo = document.getElementById("bullet_two").value;
    text2Array.push(bulletTwo);
    Slides.insert({
      bullet: 'second',
      text: bulletTwo
    })
    return text2Array;
  },
  'click input.add3': function () {
    var bulletThree = document.getElementById("bullet_three").value;
    text3Array.push(bulletThree);
    Slides.insert({
      bullet: 'third',
      text: bulletThree
    })
    return text3Array;
  },
  'click input.make_another_slide': function () {
      $('.bullet_one').remove();
      $('.bullet_two').remove();
      // $('.create_graph').remove();
      $('.make_another_slide').remove();
      $('.save_slides').remove();
      $('.slide_inputs').append('<div> <input type="button" class="start_yummy" value="ready to start the show?"/> </div>');
    },
    'click input.save_slides': function () {
      $('.bullet_one').remove();
      $('.bullet_two').remove();
      $('.bullet_three').remove();
      // $('.create_graph').remove();
      $('.make_another_slide').remove();
      $('.save_slides').remove();
      $('.slide_inputs').append('<div> <input type="button" class="start_yummy" value="ready to start the show?"/> </div>');
    },
  'click input.start_yummy': function () {
      $('.start_yummy').remove();
      // var firstBul = Slides.findOne({});
      var bulletObj = (Slides.find({bullet: 'first'}).fetch());
      var bulletText = bulletObj[0]['text'];
      var bullet2Obj = (Slides.find({bullet: 'second'}).fetch());
      var bullet2Text = bullet2Obj[0]['text'];
      $('.slide_inputs').append('<div class="bulletOneText"> <h2>' + bulletText +'</h2><h3>' + bullet2Text + '</h3></div>');
    },
  'click .bulletOneText': function () {
      $('.bulletOneText').remove();
      // var firstBul = Slides.findOne({});
      var bulletObj = (Slides.find({bullet: 'second'}).fetch());
      var bulletText = bulletObj[0]['text'];
      $('.slide_inputs').append('<div class="bulletTwoText"> <h3>' + bulletText +'</h3></div>');
    },
    'click .bulletTwoText': function () {
      $('.bulletTwoText').remove();
      var bulletObj = (Slides.find({bullet: 'third'}).fetch());
      var bulletText = bulletObj[0]['text'];
      $('.slide_inputs').append('<div class="bulletThreeText"> <h3>' + bulletText +'</h3></div>');
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
