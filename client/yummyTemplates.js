
var slideCount = 1;
var currentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var savedShowSlideIndex = 0;


Meteor.methods({
  tickSlideCount: function () {
    slideCount++
    console.log(slideCount);
    return slideCount;
  }
})

Template.yummy_coins.events({
  'click #create-text-sub': function () {
    $('#create-chart').remove();
    $('#create-text').remove();
    $('#make-slide-options').remove();
    $('#text-bullets').remove();
    $('#chart-bullets').remove();
    $('#save-bitly-slide').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();
    $('#slide-controls').remove();
    $('#line-chart-nav').remove();
    $('#bar-chart-nav').remove();
    $('#bubble-chart-nav').remove();
    $('#preview-slide-inputs').remove();
    $('#slide-inputs').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('.chart-data-sources-types').remove();
    $('#slide-inputs-chart').remove();
    $('#save-userfile-slide').remove();
    $('#inputs').remove();
    $('#slide-nav').append('<div id="slide-nav-row" class="row"></div>');
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
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
      $('#slide-title').remove();
      $('.instruct-title').remove();
      $('#create-chart-sub').remove();
      $('#slide-nav-row').append('<div id="slide-controls" class="span6"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.slide-title').append('<div class="slide-one-title"> <h1>' + slideOneTitleText +'</h1></div>');
      $('.bullet-one').append('<input id="bullet-one" class="slide-text" type="text" placeholder="Make Your First Point" autofocus />');
      return slideTitle;
    }
  },
  'keypress #bullet-one': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletOne = document.getElementById("bullet-one").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'first',
        text: bulletOne
      })
      var bulletObj = (Slides.find({slide: slideCount}).fetch());
      console.log(bulletObj);
      var bulletText = bulletObj[1]['text'];
      $('#bullet-one').remove();
      $('.bullet-one').append('<div class="bullet-first-slide-one"> <h2>' + bulletText +'</h2></div>');
      $('.bullet-two').append('<input id="bullet-two" class="slide-text" type="text" placeholder="Enter Bullet Two Text Here" autofocus />');
      return bulletOne;
    }
  },
  'keypress #bullet-two': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletTwo = document.getElementById("bullet-two").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'second',
        text: bulletTwo
      })
      var bullet2Obj = (Slides.find({slide: slideCount}).fetch());
      console.log(bullet2Obj);
      var bullet2Text = bullet2Obj[2]['text'];
      $('#bullet-two').remove();
      $('.bullet-two').append('<div class="bullet-second-slide-one"> <h2>' + bullet2Text +'</h2></div>');
      $('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" autofocus />');
      return bulletTwo;
    }
  },
  'keypress #bullet-three': function (event) {
    if (event.which == 13) {
      var bulletThree = document.getElementById("bullet-three").value;
      event.preventDefault();
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'third',
        text: bulletThree
      })
      var bullet3Obj = (Slides.find({slide: slideCount}).fetch());
      var bullet3Text = bullet3Obj[3]['text'];
      $('#bullet-three').remove();
      $('.instruct-bullet-one').remove();
      $('.bullet-three').append('<div class="bullet-third-slide-one"> <h2>' + bullet3Text +'</h2></div>');
      //$('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      // $('#bullet-three').val('');

      return bulletThree;
    }
  },
  'click #slide-controls': function () { //>>>>>>> SAVE SLIDE <<<<<<<<<
      console.log(slideCount);
      $('#slide-controls').remove();
      $('#slide-inputs').remove();  
      $('#slide-inputs-chart').remove();    
      $('.slide-one-title').remove();
      $('.bullet-first-slide-one').remove();
      $('.bullet-second-slide-one').remove();
      $('.bullet-third-slide-one').remove();
      $('#slide-instruct').remove();
      $('.instruct-bullet-one').remove();
      $('#start-this-show').remove();
      $('#make-slide-options').remove();
      $('#create-chart-sub').remove();
      //$('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      //$('#slide-nav-row').append('<div id="slide-controls" class="span6"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
      $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + currentShow + '</h2></span><div>');
      $('#slide-links').append('<div id="saved-slide" title="'+ slideCount +'" class="span1"><span class="slidelink' + slideCount + '"<p> Slide' + ' ' + slideCount + '</p></span></div>');
      var slideTitle = (Slides.find({slide: slideCount}).fetch());
      var slideTitleText = slideTitle[0]['text'];
      if (slideTitle[1] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText },
                      { bullet: 'first', text: "" },
                      { bullet: 'second', text: "" },
                      { bullet: 'third', text: "" }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" },
          { fileNum: ""}
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return slideTitleText;
      } else {
        var bulletOneText = slideTitle[1]['text'];
      }
      if (slideTitle[2] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText },
                      { bullet: 'first', text: bulletOneText },
                      { bullet: 'second', text: "" },
                      { bullet: 'third', text: "" }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return bulletOneText;
      } else {
        var bulletTwoText = slideTitle[2]['text'];
      } 
      if (slideTitle[3] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText },
                      { bullet: 'first', text: bulletOneText },
                      { bullet: 'second', text: bulletTwoText },
                      { bullet: 'third', text: "" }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return bulletTwoText;
      } else {
        var bulletThreeText = slideTitle[3]['text'];
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText },
                      { bullet: 'first', text: bulletOneText },
                      { bullet: 'second', text: bulletTwoText },
                      { bullet: 'third', text: bulletThreeText }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return bulletThreeText;
      }
    },

// >>>>>>>>>>> UPLOAD FILE <<<<<<<<<<<<<<<<<

    'click #img-back-upload': function () {
      alert('Dont you wish!');
    }
  })

//>>>>>>>>>>>> Line-Chart Events <<<<<<<<<<<<<<


Template.yummy_coins.events({
  'keypress #create-show-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var showName = document.getElementById("create-show-input").value;
      currentShow = showName;
      Meteor.call('passShowName', currentShow);
      Meteor.call('passShowNameBitCoin', currentShow);
      Meteor.call('passCurrentShowName', currentShow);
      Meteor.call('passShowNameUserData', currentShow);
      $('#create-show').remove();
      $('#marketing-text').remove();
      $('#call-2-action').remove();
      $('#myCarousel').remove();
      $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + showName + '</h2></span></div>'); 
      $('.make-start').append('<div id="make-slide-options" class="span12"><span class="slide-options"><h2> Make a title slide for your Yummy Show <span class="current-show-plug">' + ' ' + currentShow + '</span></span>');
      $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
      $('#slide-inputs').append('<div class="title-slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
      $('.title-slide-title').append('<input id="title-slide-title" class="slide-text" type="text" placeholder="Enter cover slide title here" autofocus />');
    } 
  },
  'keypress #title-slide-title': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      console.log(currentShow);
      var slideTitle = document.getElementById("title-slide-title").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'title',
        text: slideTitle
      })
      var slideOneTitle = (Slides.find({slide: slideCount}).fetch());
      var slideOneTitleText = slideOneTitle[0]['text'];
      $('#title-slide-title').remove();
      $('.instruct-title').remove();
      $('#slide-nav-row').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
      $('.title-slide-title').append('<div class="title-slideTitle"> <h1>' + slideOneTitleText +'</h1></div>');
      $('.bullet-one').append('<input id="title-slide-sub-title" class="slide-text" type="text" placeholder="Enter your sub title here" autofocus />');
      return slideTitle;
    }
  },
  'keypress #title-slide-sub-title': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletOne = document.getElementById("title-slide-sub-title").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'first',
        text: bulletOne
      })
      var bulletObj = (Slides.find({slide: slideCount}).fetch());
      console.log(bulletObj);
      var subTitleText = bulletObj[1]['text'];
      $('#title-slide-sub-title').remove();
      $('.bullet-one').append('<div class="title-sub-title"> <h2>' + subTitleText +'</h2></div>');
      $('.bullet-two').append('<input id="title-slide-sub-sub" class="slide-text" type="text" placeholder="Enter additional details here" autofocus />');
      return bulletOne;
    }
  },
  'keypress #title-slide-sub-sub': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var bulletTwo = document.getElementById("title-slide-sub-sub").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'second',
        text: bulletTwo
      })
      var bullet2Obj = (Slides.find({slide: slideCount}).fetch());
      console.log(bullet2Obj);
      var subSubTitleText = bullet2Obj[2]['text'];
      $('#title-slide-sub-sub').remove();
      $('#slide-controls').remove();
      $('.bullet-two').append('<div class="title-sub-sub"> <h3>' + subSubTitleText +'</h3></div>');
      $('#slide-nav-row').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
      return bulletTwo;
    }
  },
  'click .slidelink1': function(){
    $('.slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('.saved-slide-preview').remove();
    $('#create-chart-sub').remove();
    $('#edit-current-slide').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('#save-userfile-slide').remove();
    $('#save-bitcoin-slide').remove();
    $('#render-userFile').remove();
    var slideTitle = Shows.find({}).fetch();
    console.log(slideTitle);
    var type = slideTitle[0]['3']['slideType'];
    var source = slideTitle[0]['4']['dataSource'];
    console.log(type);
    if (type === "chart" && source === "bitcoin") {
      // var func = slideTitle[1]['2']['contents'];
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      return Meteor.call('bitlyLineChartD3'); 
    } else {
      var slideTextArray = slideTitle[0][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="preview-slide-inputs" class="span12"></div>');
      //$('#slide-nav-row').append('<div id="slide-controls" class="span6"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      // $('#preview-slide-inputs').append('<div class="preview-title-slide-title"></div>'); 
      $('#preview-slide-inputs').append('<div class="preview-title-slideTitle"> <h1>' + title + '</h1></div><div class="title-sub-title"><h2>' + firstBull + '</h2></div><div class="title-sub-sub"> <h3>' + secondBull + '</h3></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click #edit-current-slide': function () {
    alert('oh yeah bitchy bitch. this whole thing is getting closer to the promise land');
  }
})




