
var slideCount = 1;
var currentShow;

Template.yummy_coins.events({
  'click .text-slide': function () {
    $('.text-slide').remove();
    $('.chart-slide').remove();
    $('.make-start').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
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
      console.log(currentShow);
      var slideTitle = document.getElementById("slide-title").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'title',
        text: slideTitle
      })
      var slideOneTitle = (Slides.find({slide: slideCount}).fetch());
      var slideOneTitleText = slideOneTitle[0]['text'];
      $('.slide-preview').append('<div class="slide-one-title"> <h1>' + slideOneTitleText +'</h1></div>');
      $('.bullet-one').append('<input id="bullet-one" class="slide-text" type="text" placeholder="Make Your First Point" autofocus />');
      // $('#slide-title').val('');
      $('#slide-title').remove();
      return slideTitle;
    }
  },
  'keypress #bullet-one': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletOne = document.getElementById("bullet-one").value;
      Slides.insert({
        slide: slideCount,
        bullet: 'first',
        text: bulletOne
      })
      var bulletObj = (Slides.find({slide: slideCount}).fetch());
      console.log(bulletObj);
      var bulletText = bulletObj[1]['text'];
      $('.slide-preview').append('<div class="bullet-first-slide-one"> <h2>' + bulletText +'</h2></div>');
      $('.bullet-two').append('<input id="bullet-two" class="slide-text" type="text" placeholder="Enter Bullet Two Text Here" autofocus />');
      // $('#bullet-one').val('');
      $('#bullet-one').remove();
      return bulletOne;
    }
  },
  'keypress #bullet-two': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletTwo = document.getElementById("bullet-two").value;
      Slides.insert({
        slide: slideCount,
        bullet: 'second',
        text: bulletTwo
      })
      var bullet2Obj = (Slides.find({slide: slideCount}).fetch());
      console.log(bullet2Obj);
      var bullet2Text = bullet2Obj[2]['text'];
      $('.slide-preview').append('<div class="bullet-second-slide-one"> <h2>' + bullet2Text +'</h2></div>');
      $('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" autofocus />');
      // $('#bullet-two').val('');
      $('#bullet-two').remove();
      return bulletTwo;
    }
  },
  'keypress #bullet-three': function (event) {
    if (event.which == 13) {
      var bulletThree = document.getElementById("bullet-three").value;
      event.preventDefault();
      Slides.insert({ 
        slide: slideCount,
        bullet: 'third',
        text: bulletThree
      })
      var bullet3Obj = (Slides.find({slide: slideCount}).fetch());
      var bullet3Text = bullet3Obj[3]['text'];
      $('.slide-preview').append('<div class="bullet-third-slide-one"> <h2>' + bullet3Text +'</h2></div>');
      //$('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      // $('#bullet-three').val('');
      $('#bullet-three').remove();
      return bulletThree;
    }
  },

  //>>>>>>>>>> SHOW MAKER HELPERS <<<<<<<<<<<<<<<<<
  'click .slidelink1': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    var slideTextArray = slideTitle[0][1]['contents'];
    console.log(slideTextArray);
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .slidelink2': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    console.log(slideTitle);
    var slideTextArray = slideTitle[1][1]['contents'];
    console.log(slideTextArray);
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .slidelink3': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    var slideTextArray = slideTitle[2][1]['contents'];
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .slidelink4': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    var slideTextArray = slideTitle[3][1]['contents'];
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .slidelink5': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    var slideTextArray = slideTitle[4][1]['contents'];
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .slidelink6': function(){
    $('.slide-inputs').remove();
    $('.saved-slide-preview').remove();
    var slideTitle = Shows.find({}).fetch();
    var slideTextArray = slideTitle[5][1]['contents'];
    var title = slideTextArray[0]['text'];
    var firstBull = slideTextArray[1]['text'];
    var secondBull = slideTextArray[2]['text'];
    var thirdBull = slideTextArray[3]['text'];
    $('.make-start').append('<div class="saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
  },
  'click .make-first-slide': function () {
      console.log(slideCount);
      $('#slide-inputs').remove();      
      $('#slide-controls').remove();
      $('.slide-one-title').remove();
      $('.bullet-first-slide-one').remove();
      $('.bullet-second-slide-one').remove();
      $('.bullet-third-slide-one').remove();
      $('#slide-links').append('<div class="span1"><span class="slidelink' + slideCount + '"<p> Slide' + ' ' + slideCount + '</p></span></div>');
      $('.make-start').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
      //$('.make-start').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-second-slide"> Save Slide and Continue </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
      $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      // $('#slide-inputs').append('<div class="slide-two-title"></div><div class="slide-two-bullet-one"></div><div class="slide-two-bullet-two"></div><div class="slide-two-bullet-three"></div>');
      // $('.slide-two-title').append('<input id="slide-two-slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      var slideTitle = (Slides.find({slide: slideCount}).fetch());
      var slideTitleText = slideTitle[0]['text'];
      var bulletOne = (Slides.find({slide: slideCount}).fetch());
      var bulletOneText = bulletOne[1]['text'];
      var bulletTwo = (Slides.find({slide: slideCount}).fetch());
      var bulletTwoText = bulletTwo[2]['text'];
      var bulletThree = (Slides.find({slide: slideCount}).fetch());
      var bulletThreeText = bulletThree[3]['text'];
      Shows.insert([
        { slide: slideCount },
        { contents: [
                    { bullet: 'title', text: slideTitleText },
                    { bullet: 'first', text: bulletOneText },
                    { bullet: 'second', text: bulletTwoText },
                    { bullet: 'third', text: bulletThreeText }
                    ]
        }])
      slideCount++;
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

//>>>>>>>>>>>> Line-Chart Events <<<<<<<<<<<<<<

    'click .save-bitly-slide': function() {
      console.log('you are saving a bitly slide');
      Charts.insert({
        show: currentShow, 
        slide: slideCount, 
        chart: "Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); });"
      })
    },
//>>>>>>>> YUMMY SHOW <<<<<<<<<<<<<
  'click .start-current-show': function () {
      $('#navbar').remove();
      $('#yummy-shows').remove();
      $('#slide-index').remove();
      $('.make-start').remove();
      $('#slide-preview').remove();
      var currentShowSlides = (Slides.find({show: currentShow}).fetch());
      var showSlideOneTitle = currentShowSlides[0]['text'];
      $('#body-row').append('<div class="span12 slide-one-title"><span class="title"><h1>' + showSlideOneTitle +'</h1></span></div>');
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
})

Template.yummy_coins.events({
  'keypress #create-show-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var showName = document.getElementById("create-show-input").value;
      currentShow = showName;
      // $('.create-show-input').remove();
      $('#create-show').remove();
      $('#show-row').append('<div><div class="span8"><span class="current-show"><h2>' + showName + '</h2></span></div><div class="span3"><span class="start-current-show"><p> Start' + ' ' + showName + '</p></span></div></div>');
      //$('#create-show').append('<div class="span8"><span class="current-show"><h2>' + showName + '</h2></span></div><div class="span4"><span class="start-current-show"><p> Start' + ' ' + showName + '</p></span><div>');
    }
  }
})

// Template.yummy_coins.D3test = function () {
//   console.log(Datastores.findOne({}));
//   return Meteor.call('makeDataSet');
// };
