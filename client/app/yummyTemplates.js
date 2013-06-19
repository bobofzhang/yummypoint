
var slideCount = 1;
var currentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var savedShowSlideIndex = 0;
var currentUser = Meteor.userId();

Meteor.methods({
  tickSlideCount: function () {
    slideCount++
    Meteor.call('passSlideCount', slideCount);
    Meteor.call('passSlideCountBitCoin', slideCount);
    Meteor.call('passSlideCountUserData', slideCount);
    return slideCount;
  }
})

Template.userShows.events({
  'click #user-show-template': function () {
    currentUser = Meteor.userId();
    var nameNum = 0;
    $('#show-list-row').show();
    Deps.autorun(function(){
      $('.user-show').remove();
      var showFind = Shownames.find().fetch();
      userShowsMap = [];
      for (var i = 0; i < showFind.length; i++) {
        if (showFind[i]['meteorUser'] === currentUser) {
          userShowsMap.push(showFind[i]['show']);
        }
      }
      _.each(userShowsMap, function (name) {
        if (name) {
          nameNum++;
          $('#show-list-row').append('<div id="user-show-name-'+ nameNum +'" class="span2 user-show">' + name + '</div>');
        }
      })
    })
    $('#user-show-template').hide();
    $('#all-user-shows').append('<div id="hide-shows" class="user-showcontrols"><span> Hide My Shows </span></div>');
  }
})

Template.yummy_coins.events({
  'click #hide-shows': function (){
    $('#user-show-template').show();
    $('#show-list-row').hide();
    $('#hide-shows').remove();
  }
})

Template.userShows.allUserShows = function () {
  console.log("i am in the all userShows temp")
  var showQuery = Shows.find().fetch();
  console.log(showQuery);
  var thisUser = Meteor.userId();
  var showsExist;
  _.find(showQuery, function (obj) {
    if (obj[6]['meteorUser'] === thisUser) {
      showsExist = "My Yummy Shows";
    }
  })
  return showsExist;
};

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
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter the Slide Title Here" autofocus />');
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
        text: slideTitle,
        meteorUser: Meteor.userId()
      })
      var slideOneTitle = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(slideOneTitle);
      var userSlideMap = _.filter(slideOneTitle, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var slideOneTitleText = userSlideMap[0]['text'];
      $('#slide-title').remove();
      $('.instruct-title').remove();
      $('#create-chart-sub').remove();
      $('#slide-nav-row').append('<div id="slide-controls" class="span6"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
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
        text: bulletOne, 
        meteorUser: Meteor.userId()
      })
      var bulletObj = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(bulletObj);
      var userSlideMap = _.filter(bulletObj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var bulletText = userSlideMap[1]['text'];
      $('#bullet-one').remove();
      $('.bullet-one').append('<div class="bullet-first-slide-one"> <h2>' + bulletText +'</h2></div>');
      $('.bullet-two').append('<input id="bullet-two" class="slide-text" type="text" placeholder="Make a Second Point Here" autofocus />');
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
        text: bulletTwo,
        meteorUser: Meteor.userId()
      })
      var bullet2Obj = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(bullet2Obj);
      var userSlideMap = _.filter(bullet2Obj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var bullet2Text = userSlideMap[2]['text'];
      $('#bullet-two').remove();
      $('.bullet-two').append('<div class="bullet-second-slide-one"> <h2>' + bullet2Text +'</h2></div>');
      $('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Make a Third and Final Point Here" autofocus />');
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
        text: bulletThree,
        meteorUser: Meteor.userId()
      })
      var bullet3Obj = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      var userSlideMap = _.filter(bullet3Obj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var bullet3Text = userSlideMap[3]['text'];
      $('#bullet-three').remove();
      $('.instruct-bullet-one').remove();
      $('.bullet-three').append('<div class="bullet-third-slide-one"> <h2>' + bullet3Text +'</h2></div>');
      //$('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      return bulletThree;
    }
  },
  'click #slide-controls': function (event) { //>>>>>>> SAVE SLIDE <<<<<<<<<
      event.preventDefault();
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
      $('.new-yum-show').remove();
      $('#make-new-show').append('<span class="new-yum-show"> Make a new Yummy Show </span>')
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
      $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      $('#slide-links').append('<div id="saved-slide" title="'+ slideCount +'" class="span1"><span id="slidelink" class="slidelink' + slideCount + '"<p> Slide' + ' ' + slideCount + '</p></span></div>');
      var slideTitle = Slides.find().fetch();
      var slideFilter = _.filter(slideTitle, function (obj) {
        if (obj['slide'] === slideCount && obj['show'] === currentShow) {
          return obj;
        }
      })
      console.log(slideFilter);
      var slideTitleText = slideFilter[0]['text'];
      if (slideFilter[1] == null) {
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
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return slideTitleText;
      } else {
        var bulletOneText = slideFilter[1]['text'];
      }
      if (slideFilter[2] == null) {
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
          { dataSource: "text" }, 
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return bulletOneText;
      } else {
        var bulletTwoText = slideFilter[2]['text'];
      } 
      if (slideFilter[3] == null) {
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
          { dataSource: "text" },
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() }
          ])
        slideCount++;
        Meteor.call('passSlideCount', slideCount);
        Meteor.call('passSlideCountBitCoin', slideCount);
        Meteor.call('passSlideCountUserData', slideCount);
        return bulletTwoText;
      } else {
        var bulletThreeText = slideFilter[3]['text'];
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
          { dataSource: "text" },
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() }
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


Template.yummy_coins.events({
  'keypress #create-show-input': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var showName = document.getElementById("create-show-input").value;
      currentShow = showName;
      if (Meteor.userId() == null) {
        $('#plug-text-title').remove();
        $('.create-show-input').remove();
        $('user-login-alert').remove();
        $('#create-show').append('<span class="create-show-input"></span>');
        $('.create-show-input').append('<input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a YummyShow by giving it a name here" autofocus />');
        $('#mkt-plug').append('<span id="user-login-alert" class="span12"> <h4> Try again. You must be signed in to create a tasty YummyShow </h4></span>')
      } else {
        currentUser = Meteor.userId();
        Meteor.call('passShowName', currentShow);
        Meteor.call('passShowNameBitCoin', currentShow);
        Meteor.call('passCurrentShowName', currentShow);
        Meteor.call('passShowNameUserData', currentShow);
        Meteor.call('passShowNamePreview', currentShow);
        slideCount = 1;
        $('#create-show').remove();
        $('#marketing-text').remove();
        $('#call-2-action').remove();
        $('#myCarousel').remove();
        $('#user-session-show').remove();
        $('#mkt-plug').remove();
        Shownames.insert({
          show: showName,
          meteorUser: currentUser
        })
        $('.make-start').append('<div id="make-slide-options" class="span12"><span class="slide-options"><h4> Begin your YummyShow with a cover slide. Follow the prompts in the inputs below. </span></h4>');
        $('#slide-nav').append('<div id="slide-nav-row" class="row"></div>');
        $('#current-show').append('<span id="user-session-show" class="span-session-show">' + showName + '</span>')
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"</div>');
        $('#slide-inputs').append('<div class="title-slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
        $('.title-slide-title').append('<input id="title-slide-title" class="slide-text" type="text" placeholder="Enter the cover slide title here" autofocus />');
        $('#slide-index-row').append('<div id="slide-links" class="span12 slide-links"></div>');
      }
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
        text: slideTitle,
        meteorUser: Meteor.userId()
      })
      var slideOneTitle = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(slideOneTitle);
      var userSlideMap = _.filter(slideOneTitle, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      console.log(userSlideMap);
      var slideOneTitleText = userSlideMap[0]['text'];
      $('#title-slide-title').remove();
      $('.instruct-title').remove();
      $('#make-slide-options').remove();
      $('#homepage-mkt').remove();
      $('#slide-nav-row').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save This Slide and Continue </p></span></div>');
      $('.title-slide-title').append('<div class="title-slideTitle"> <h1>' + slideOneTitleText +'</h1></div>');
      $('.bullet-one').append('<input id="title-slide-sub-title" class="slide-text" type="text" placeholder="Enter a sub slide title here... if you want" autofocus />');
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
        text: bulletOne,
        meteorUser: Meteor.userId()
      })
      var bulletObj = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(bulletObj);
      var userSlideMap = _.filter(bulletObj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var subTitleText = userSlideMap[1]['text'];
      $('#title-slide-sub-title').remove();
      $('.bullet-one').append('<div class="title-sub-title"> <h2>' + subTitleText +'</h2></div>');
      $('.bullet-two').append('<input id="title-slide-sub-sub" class="slide-text" type="text" placeholder="Enter additional details here. Like the date." autofocus />');
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
        text: bulletTwo,
        meteorUser: Meteor.userId()
      })
      var bullet2Obj = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      console.log(bullet2Obj);
      var userSlideMap = _.filter(bullet2Obj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var subSubTitleText = userSlideMap[2]['text'];
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
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === currentShow) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[0]['3']['slideType'];
    var source = slideShowMap[0]['4']['dataSource'];
    if (type === "chart" && source === "bitcoin") {
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      return Meteor.call('bitlyLineChartD3'); 
    } else {
      var slideTextArray = slideShowMap[0][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      //$('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="preview-slide-inputs" class="span12"></div>');
      $('#preview-slide-inputs').append('<div class="preview-title-slideTitle"> <h1>' + title + '</h1></div><div class="title-sub-title"><h2>' + firstBull + '</h2></div><div class="title-sub-sub"> <h3>' + secondBull + '</h3></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click #edit-current-slide': function () {
    alert('oh yeah bitchy bitch. this whole thing is getting closer to the promise land');
  }
})




