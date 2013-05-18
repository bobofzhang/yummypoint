
// var titleArray = [];
// var textArray = [];
// var text2Array = [];
// var text3Array = [];

Template.yummy_coins.events({
  'click .text-slide': function () {
    $('.text-slide').remove();
    $('.chart-slide').remove();
    $('.make-start').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
    //$('.bullet-one').append('<input id="bullet-one" class="slide-text" type="text" placeholder="Enter Bullet Text Here" />');
    // $('.bullet-two').append('<input id="bullet-two" class="slide-text" type="text"/><input type="button" class="add2" value="Make a Point" />');
    // $('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" /><input type="button" class="add3" value="Make a Point" />');
    // $('.make-start').append('<div class="slide_inputs"><div class="slide-title"><input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus /><input type="button" class="add-title" value="Slide Title" /></div><div class="bullet-one"><input id="bullet-one" class="slide-text" type="text" /><input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet-two"> <input id="bullet-two" class="slide-text" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet-three"><input id="bullet-three" class="slide-text" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> </div>');
    //$('.slide-preview').append('<div id="slide-controls" class="row"><span class="span12"><p class="make-first-slide"> Make Another Slide </p></span></div>');
  },

  //>>>>>>> SLIDE ONE INPUTS <<<<<<<<<
  'keypress #slide-title': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var slideTitle = document.getElementById("slide-title").value;
      Slides.insert({
        slide: 'first',
        bullet: 'title',
        text: slideTitle
      })
      var slideOneTitle = (Slides.find({bullet: 'title'}).fetch());
      var slideOneTitleText = slideOneTitle[0]['text'];
      $('.slide-preview').append('<div class="slide-one-title"> <h1>' + slideOneTitleText +'</h1></div>');
      $('.bullet-one').append('<input id="bullet-one" class="slide-text" type="text" placeholder="Make Your First Point" />');
      // $('#slide-title').val('');
      $('#slide-title').remove();
      return slideTitle;
    }
  },
  'keypress #bullet-one': function (event) {
    if (event.which == 13) {
      var bulletOne = document.getElementById("bullet-one").value;
      // textArray.push(bulletOne);
      Slides.insert({
        slide: 'first',
        bullet: 'first',
        text: bulletOne
      })
      var bulletObj = (Slides.find({bullet: 'first'}).fetch());
      var bulletText = bulletObj[0]['text'];
      $('.slide-preview').append('<div class="bullet-first-slide-one"> <h2>' + bulletText +'</h2></div>');
      $('.bullet-two').append('<input id="bullet-two" class="slide-text" type="text" placeholder="Enter Bullet Two Text Here" />');
      // $('#bullet-one').val('');
      $('#bullet-one').remove();
      return bulletOne;
    }
  },
  'keypress #bullet-two': function (event) {
    if (event.which == 13) {
      var bulletTwo = document.getElementById("bullet-two").value;
      // text2Array.push(bulletTwo);
      Slides.insert({
        slide: 'first',
        bullet: 'second',
        text: bulletTwo
      })
      var bullet2Obj = (Slides.find({bullet: 'second'}).fetch());
      var bullet2Text = bullet2Obj[0]['text'];
      $('.slide-preview').append('<div class="bullet-second-slide-one"> <h2>' + bullet2Text +'</h2></div>');
      $('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      // $('#bullet-two').val('');
      $('#bullet-two').remove();
      return bulletTwo;
    }
  },
  'keypress #bullet-three': function () {
    if (event.which == 13) {
      var bulletThree = document.getElementById("bullet-three").value;
      // text3Array.push(bulletThree);
      Slides.insert({ 
        slide: 'first',
        bullet: 'third',
        text: bulletThree
      })
      var bullet3Obj = (Slides.find({bullet: 'third'}).fetch());
      var bullet3Text = bullet3Obj[0]['text'];
      $('.slide-preview').append('<div class="bullet-third-slide-one"> <h2>' + bullet3Text +'</h2></div>');
      //$('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      // $('#bullet-three').val('');
      $('#bullet-three').remove();
      return bulletThree;
    }
  },

  //>>>>>>>>>> SLIDE TWO INPUTS <<<<<<<<<

  'keypress #slide-two-slide-title': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var slideTitle = document.getElementById("slide-two-slide-title").value;
      Slides.insert({
        slide: 'second',
        bullet: 'title',
        text: slideTitle
      })
      var slideTwoTitle = (Slides.find({ slide: 'second' }).fetch());
      if (slideTwoTitle[0]['bullet'] === 'title') {
        var slideTwoTitleText = slideTwoTitle[0]['text'];
      }
      $('#slide-two-slide-title').remove();
      $('.slide-preview').append('<div class="slide-one-title"> <h1>' + slideTwoTitleText +'</h1></div>');
      $('.slide-two-bullet-one').append('<input id="slide-two-bullet-one" class="slide-text" type="text" placeholder="Make Your First Point" />');
      return slideTwoTitleText;
    }
  },
  'keypress #slide-two-bullet-one': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletOne = document.getElementById("slide-two-bullet-one").value;
      console.log(bulletOne);
      Slides.insert({
        slide: 'second',
        bullet: 'first',
        text: bulletOne
      })
      var slideTwoBulletOne = (Slides.find({ slide: 'second' }).fetch());
      console.log(slideTwoBulletOne);
      if (slideTwoBulletOne[1]['bullet'] === 'first') {
        var slideTwoBulletOneText = slideTwoBulletOne[1]['text'];
      }
      console.log(slideTwoBulletOneText);
      $('.slide-preview').append('<div class="bullet-first-slide-one"> <h2>' + slideTwoBulletOneText + '</h2></div>');
      return slideTwoBulletOneText;
    }
  },
  'click input.slide-two-add2': function () {
    var bulletTwo = document.getElementById("slide-two-bullet-two").value;
    Slides.insert({
      slide: 'second',
      bullet: 'second',
      text: bulletTwo
    })
    var slideTwoBulletTwo = (Slides.find({ slide: 'second' }).fetch());
    if (slideTwoBulletTwo[2]['bullet'] === 'second') {
      var slideTwoBulletTwoText = slideTwoBulletTwo[2]['text'];
    }
    console.log(slideTwoBulletTwoText);
    $('.slide-preview').append('<div class="bullet-second-slide-one"> <h2>' + slideTwoBulletTwoText + '</h2></div>');
    return slideTwoBulletTwoText;
  },
  'click input.slide-two-add3': function () {
    var bulletThree = document.getElementById("slide-two-bullet-three").value;
    Slides.insert({ 
      slide: 'second',
      bullet: 'third',
      text: bulletThree
    })
    var slideTwoBulletThree = (Slides.find({ slide: 'second' }).fetch());
    if (slideTwoBulletThree[3]['bullet'] === 'third') {
      var slideTwoBulletThreeText = slideTwoBulletThree[3]['text'];
    }
    console.log(slideTwoBulletThreeText);
    $('.slide-preview').append('<div class="bullet-third-slide-one"> <h2>' + slideTwoBulletThreeText + '</h2></div>');
    return slideTwoBulletThreeText;
  },

  //>>>>>>>>>> SHOW MAKER HELPERS <<<<<<<<<<<<<<<<<
  'click .slidelink': function(){
    $('.slide-inputs').remove();
    var slideTitle = Shows.find({}, { slide: 'first'} ).fetch();
    var slideTextArray = slideTitle[0][1]['contents'];
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .make-first-slide': function () {
      // event.preventDefault();
      $('#slide-inputs').remove();      
      $('#slide-controls').remove();
      $('.slide-one-title').remove();
      $('.bullet-first-slide-one').remove();
      $('.bullet-second-slide-one').remove();
      $('.bullet-third-slide-one').remove();
      $('#slide-links').append('<span class="slidelink"<p> Slide One </p></span>');
      $('.make-start').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-second-slide"> Save Slide and Continue </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-inputs').append('<div class="slide-two-title"></div><div class="slide-two-bullet-one"></div><div class="slide-two-bullet-two"></div><div class="slide-two-bullet-three"></div>');
      $('.slide-two-title').append('<input id="slide-two-slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      //$('.make-start').append('<div class="slide-two_inputs"><div class="slide-two-title"><input id="slide-two-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus /><div class="slide-two-bullet-one"></div> <div class="slide-two-bullet-two"> <input id="slide-two-bullet-two" class="slide-text" type="text"/> <input type="button" class="slide-two-add2" value="Make a Point" /> </br> <br> </div> <div class="slide-two-bullet-three"><input id="slide-two-bullet-three" class="slide-text" type="text" /> <input type="button" class="slide-two-add3" value="Make a Point" /> </br> </br></div> </div>');
      //$('.slide-preview').append('<div id="slide-controls" class="row"><span class="span12"><p class="make_second_slide"> Make Second Slide </p></span></div>');
      var slideOneTitle = (Slides.find({bullet: 'title'}).fetch());
      var slideOneTitleText = slideOneTitle[0]['text'];
      var bulletObj = (Slides.find({bullet: 'first'}).fetch());
      var bulletText = bulletObj[0]['text'];
      var bullet2Obj = (Slides.find({bullet: 'second'}).fetch());
      var bullet2Text = bullet2Obj[0]['text'];
      var bullet3Obj = (Slides.find({bullet: 'third'}).fetch());
      var bullet3Text = bullet3Obj[0]['text'];
      Shows.insert([
        { slide: 'first' },
        { contents: [
                    { bullet: 'title', text: slideOneTitleText },
                    { bullet: 'first', text: bulletText },
                    { bullet: 'second', text: bullet2Text },
                    { bullet: 'third', text: bullet3Text }
                    ]
        }])
      //$('.slide_inputs').append('<div><input type="button" class="start_yummy" value="ready to start the show?"/> </div>');
    },
    'click input.save_slides': function () {
      $('.bullet-one').remove();
      $('.bullet-two').remove();
      $('.bullet-three').remove();
      $('.slide-title').remove();
      // $('.create_graph').remove();
      $('.make_another_slide').remove();
      $('.save_slides').remove();
      $('.slide-inputs').append('<div><input type="button" class="start_yummy" value="ready to start the show?"/> </div>');
    },

    //>>>>>>>> YUMMY SHOW <<<<<<<<<<<<<
  'click input.start_yummy': function () {
      $('.start_yummy').remove();
      // var firstBul = Slides.findOne({});
      var slideOneTitle = (Slides.find({bullet: 'title'}).fetch());
      var slideOneTitleText = slideOneTitle[0]['text'];
      $('.slide-inputs').append('<div class="slide-one-title"> <h1>' + slideOneTitleText +'</h1></div>');
    },
  'click .slide-one-title': function () {
      // $('.slideOneTitle').remove();
      // var firstBul = Slides.findOne({});
      var bulletObj = (Slides.find({bullet: 'first'}).fetch());
      var bulletText = bulletObj[0]['text'];
      var bullet2Obj = (Slides.find({bullet: 'second'}).fetch());
      var bullet2Text = bullet2Obj[0]['text'];
      var bullet3Obj = (Slides.find({bullet: 'third'}).fetch());
      var bullet3Text = bullet3Obj[0]['text'];
      $('.slide-inputs').append('<div class="slideOneBullets"> <h2>' + bulletText +'</h2><h2>' + bullet2Text + '</h2><h2>' + bullet3Text + '</h2></div>');
    }
    // 'click .bulletTwoText': function () {
    //   $('.bulletTwoText').remove();
    //   var bulletObj = (Slides.find({bullet: 'third'}).fetch());
    //   var bulletText = bulletObj[0]['text'];
    //   $('.slide_inputs').append('<div class="bulletThreeText"> <h3>' + bulletText +'</h3></div>');
    // }
})

// Template.yummy_coins.D3test = function () {
//   console.log(Datastores.findOne({}));
//   return Meteor.call('makeDataSet');
// };
