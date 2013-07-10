
var slideCount = 1;
var currentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var savedShowSlideIndex = 0;
var currentUser = Meteor.userId();
var imageCount = 0;

Meteor.methods({
  passingTheCount: function () {
    console.log(slideCount);
    Meteor.call('passSlideCount', slideCount);
    Meteor.call('passSlideCountSave', slideCount);
    Meteor.call('passSlideCountBitCoin', slideCount);
    Meteor.call('passSlideCountUserData', slideCount);
    Meteor.call('passSlideCountUserBub', slideCount);
    Meteor.call('passSlideCountBitBub', slideCount);
    Meteor.call('passSlideCountImage', slideCount);
  }
})

Meteor.methods({
  passingTheName: function (nowShow) {
    Meteor.call('passShowName', nowShow);
    Meteor.call('passShowNameSave', nowShow);
    Meteor.call('passShowNameBitCoin', nowShow);
    Meteor.call('passCurrentShowName', nowShow);
    Meteor.call('passShowNameUserData', nowShow);
    Meteor.call('passShowNamePreview', nowShow);
    Meteor.call('passShowNameBitBub', nowShow);
    Meteor.call('passShowNameUserBub', nowShow);
    Meteor.call('passShowNameImage', nowShow);
    Meteor.call('passShowNameChartCreate', nowShow);
  }
})

Meteor.methods({
  passImgCount: function (imgCount) {
    imageCount = imgCount;
    return imageCount;
  }
})

Meteor.methods({
  tickSlideCount: function () {
    slideCount++
    Meteor.call('passingTheCount');
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
    $('#hide-shows').remove();
    $('#user-show-template').show();
    $('#show-list-row').hide();
  }
})

Template.yummy_coins.events({
  'click #show-maker': function () {
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('#show-maker').remove();
    $('#user-session-show').remove();
    $('slide-inputs-chart').remove();
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    $('#show-row').remove();
    $('#slide-links').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
    $('.the-show').remove();
    $('#chart-render').remove();
    $('#chart-render-bitly').remove();
    $('#chart-render-bitcoin').remove();
    $('#chart-render-bitly-bubble').remove();
    $('#data-source-container').remove();
    $('#yummy-shows').append('<div id="show-row" class="row"></div>');
    $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
    $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a new Yummy Show by naming it here" autofocus /></span>');
    Meteor.call('passShowImgCount', 0);
  }
})

Template.userShows.allUserShows = function () {
  var showQuery = Shows.find().fetch();
  var thisUser = Meteor.userId();
  $('#hide-shows').remove();
  $('#show-list-row').hide();
  var showsExist;
  _.find(showQuery, function (obj) {
    if (obj[6]['meteorUser'] === thisUser) {
      showsExist = "My Yummy Shows";
    }
  })
  return showsExist;
};

Template.yummy_coins.events({
  //>>>>>>> SLIDE ONE INPUTS <<<<<<<<<
  'keypress #slide-title': function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var slideTitle = document.getElementById("slide-title").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'title',
        text: slideTitle,
        meteorUser: Meteor.userId()
      })
      var slideOneTitle = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      var userSlideMap = _.filter(slideOneTitle, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var slideOneTitleText = userSlideMap[0]['text'];
      $('#slide-title').remove();
      $('.instruct-title').remove();
      $('#create-chart-sub').remove();
      $('#add-image').remove();
      $('#slide-nav-row').append('<div id="slide-controls" class="span6"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      //$('#slide-nav-row').append('<div id="slide-img-row" class="span12"></div>');
      //$('#slide-img-row').append('<div id="add-image" class="span5"><div id="img-inputs" class="clearfix" onclick="files.click()"><span class="add-slide-image">Add an Image </span><input type="file" id="files" name="files[]" style="visibility:hidden;"/></div></div>'); //accept="image/jpg"
      $('.slide-title').append('<div class="slide-one-title"> <h1 id="title-title" class="drag-slide-text">' + slideOneTitleText +'</h1></div>');
      $(function() {
        $('#title-title').draggable();
      });
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
      var userSlideMap = _.filter(bulletObj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var bulletText = userSlideMap[1]['text'];
      $('#bullet-one').remove();
      $('.bullet-one').append('<div class="bullet-first-slide-one"> <h2 id="title-sub-bullet" class="drag-slide-text">' + bulletText +'</h2></div>');
      $(function() {
        $('#title-sub-bullet').draggable();
      });
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
      var userSlideMap = _.filter(bullet2Obj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var bullet2Text = userSlideMap[2]['text'];
      $('#bullet-two').remove();
      $('.bullet-two').append('<div class="bullet-second-slide-one"> <h2 id="title-sub-sub" class="drag-slide-text">' + bullet2Text +'</h2></div>');
      $(function() {
        $('#title-sub-sub').draggable();
      });
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
      $('.bullet-three').append('<div class="bullet-third-slide-one"> <h2 id="sub-sub-sub" class="drag-slide-text">' + bullet3Text +'</h2></div>');
      $(function() {
        $('#sub-sub-sub').draggable();
      });
      //$('.bullet-three').append('<input id="bullet-three" class="slide-text" type="text" placeholder="Enter Bullet Three Text Here" />');
      return bulletThree;
    }
  },
  'click #slide-controls': function (event) { //>>>>>>> SAVE SLIDE <<<<<<<<<
      event.preventDefault();
      var titleTop = "";
      var titleLeft = "";
      var firstBulTop = "";
      var firstBulLeft = "";
      var secondBulTop = "";
      var secondBulLeft = "";
      var thirdBulTop = "";
      var thirdBulLeft = "";
      var imageTop = "";
      var imageLeft = "";
      var imageWidth = "";
      var imageHeight = "";
      var imageTop2 = "";
      var imageLeft2 = "";
      var imageWidth2 = "";
      var imageHeight2 = "";
      var imageTop3 = "";
      var imageLeft3 = "";
      var imageWidth3 = "";
      var imageHeight3 = "";
      var imageTop4 = "";
      var imageLeft4 = "";
      var imageWidth4 = "";
      var imageHeight4 = "";

      if (document.getElementById("title-title")) {
        titleTop = document.getElementById("title-title").style.top;
        titleLeft = document.getElementById("title-title").style.left;
      }
      if (document.getElementById("title-sub-bullet")) {
        firstBulTop = document.getElementById("title-sub-bullet").style.top;
        firstBulLeft = document.getElementById("title-sub-bullet").style.left;
      }
      if (document.getElementById("title-sub-sub")) {
        secondBulTop = document.getElementById("title-sub-sub").style.top;
        secondBulLeft = document.getElementById("title-sub-sub").style.left;
      }
      if (document.getElementById("sub-sub-sub")) {
        thirdBulTop = document.getElementById("sub-sub-sub").style.top;
        thirdBulLeft = document.getElementById("sub-sub-sub").style.left;
      }
      if (document.getElementById("slide-image1")) {
        imageTop = document.getElementById("slide-image1").style.top;
        imageLeft = document.getElementById("slide-image1").style.left;
        imageWidth = document.getElementById("thisImage1").style.width;
        imageHeight = document.getElementById("thisImage1").style.height;
      }
      if (document.getElementById("slide-image2")) {
        imageTop2 = document.getElementById("slide-image2").style.top;
        imageLeft2 = document.getElementById("slide-image2").style.left;
        imageWidth2 = document.getElementById("thisImage2").style.width;
        imageHeight2 = document.getElementById("thisImage2").style.height;
      }
      if (document.getElementById("slide-image3")) {
        imageTop3 = document.getElementById("slide-image3").style.top;
        imageLeft3 = document.getElementById("slide-image3").style.left;
        imageWidth3 = document.getElementById("thisImage3").style.width;
        imageHeight3 = document.getElementById("thisImage3").style.height;
      }
      if (document.getElementById("slide-image4")) {
        imageTop4 = document.getElementById("slide-image4").style.top;
        imageLeft4 = document.getElementById("slide-image4").style.left;
        imageWidth4 = document.getElementById("thisImage4").style.width;
        imageHeight4 = document.getElementById("thisImage4").style.height;
      }
      $('#render-image').remove();
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
      $('#show-maker').remove();
      $('#chart-render').remove();
      $('#chart-render-bitly').remove();
      $('#chart-render-bitcoin').remove();
      $('chart-render-bitly-bubble').remove();
      $('#add-image').remove();
      $('#slide-img-row').remove();
      $('#make-new-show').append('<div id="show-maker"><span class="new-yum-show"><p> Make a new Yummy Show </p> </span></div>')
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      //$('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
      $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" />');
      $('#slide-links').append('<div id="saved-slide' + slideCount + '" title="'+ slideCount +'" class="span1 saved-slide"><span id="slidelink" class="slidelink' + slideCount + '"<p> Slide' + ' ' + slideCount + '</p></span></div>');
      if (slideCount <= 1) {
        $('#modal-container').append('<div id="slide-maker-modal" class="modal"></div>');
        $('#slide-maker-modal').append('<div class="modal-header"><button type="button" class="close slide-maker-goodbye" data-dismiss="modal">×</button><h3 id="myModalLabel"> Begin making your main body slides </h3></div>');
        $('#slide-maker-modal').append('<div class="modal-body"><h4 id="make-title-slide-modal-head" class="title-slide-modal"> Either make a Text Slide by typing in the inputs </br></br> OR </br></br> Make a Chart Slide by clicking on the big blue button </h4></div>');
        $('#slide-maker-modal').append('<div class="modal-footer"><button class="btn slide-maker-goodbye" data-dismiss="modal">Close</button></div>');
      }
      Meteor.call('refreshCountSlideImgs', 1);
      var slideTitle = Slides.find().fetch();
      var slideFilter = _.filter(slideTitle, function (obj) {
        if (obj['slide'] === slideCount && obj['show'] === currentShow) {
          return obj;
        }
      })
      var slideTitleText = slideFilter[0]['text'];
      if (slideFilter[1] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText, top: titleTop, left: titleLeft },
                      { bullet: 'first', text: "", top: firstBulTop, left: firstBulLeft },
                      { bullet: 'second', text: "", top: secondBulTop, left: secondBulLeft },
                      { bullet: 'third', text: "", top: thirdBulTop, left: thirdBulLeft  }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" },
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() },
          { chartType: "text" },
          { images: [
            {image: 'one', num: "", top: imageTop, left: imageLeft, width: imageWidth, height: imageHeight }, 
            {image: 'two', num: "", top: imageTop2, left: imageLeft2, width: imageWidth2, height: imageHeight2 },
            {image: 'three', num: "", top: imageTop3, left: imageLeft3, width: imageWidth3, height: imageHeight3 },
            {image: 'four', num: "", top: imageTop4, left: imageLeft4, width: imageWidth4, height: imageHeight4 }
            ]
          }
          ])
        slideCount++;
        Meteor.call('passingTheCount');
        return slideTitleText;
      } else {
        var bulletOneText = slideFilter[1]['text'];
      }
      if (slideFilter[2] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText, top: titleTop, left: titleLeft },
                      { bullet: 'first', text: bulletOneText, top: firstBulTop, left: firstBulLeft },
                      { bullet: 'second', text: "", top: secondBulTop, left: secondBulLeft },
                      { bullet: 'third', text: "", top: thirdBulTop, left: thirdBulLeft  }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" }, 
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() },
          { chartType: "text" },
          { images: [
            {image: 'one', num: "", top: imageTop, left: imageLeft, width: imageWidth, height: imageHeight }, 
            {image: 'two', num: "", top: imageTop2, left: imageLeft2, width: imageWidth2, height: imageHeight2 },
            {image: 'three', num: "", top: imageTop3, left: imageLeft3, width: imageWidth3, height: imageHeight3 },
            {image: 'four', num: "", top: imageTop4, left: imageLeft4, width: imageWidth4, height: imageHeight4 }
            ]
          }
          ])
        slideCount++;
        Meteor.call('passingTheCount');
        return bulletOneText;
      } else {
        var bulletTwoText = slideFilter[2]['text'];
      } 
      if (slideFilter[3] == null) {
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText, top: titleTop, left: titleLeft },
                      { bullet: 'first', text: bulletOneText, top: firstBulTop, left: firstBulLeft },
                      { bullet: 'second', text: bulletTwoText, top: secondBulTop, left: secondBulLeft },
                      { bullet: 'third', text: "", top: thirdBulTop, left: thirdBulLeft  }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" },
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() },
          { chartType: "text" },
          { images: [
            {image: 'one', num: "", top: imageTop, left: imageLeft, width: imageWidth, height: imageHeight }, 
            {image: 'two', num: "", top: imageTop2, left: imageLeft2, width: imageWidth2, height: imageHeight2 },
            {image: 'three', num: "", top: imageTop3, left: imageLeft3, width: imageWidth3, height: imageHeight3 },
            {image: 'four', num: "", top: imageTop4, left: imageLeft4, width: imageWidth4, height: imageHeight4 }
            ]
          }
          ])
        slideCount++;
        Meteor.call('passingTheCount');
        return bulletTwoText;
      } else {
        var bulletThreeText = slideFilter[3]['text'];
        Shows.insert([
          { show: currentShow },
          { slide: slideCount },
          { contents: [
                      { bullet: 'title', text: slideTitleText, top: titleTop, left: titleLeft },
                      { bullet: 'first', text: bulletOneText, top: firstBulTop, left: firstBulLeft },
                      { bullet: 'second', text: bulletTwoText, top: secondBulTop, left: secondBulLeft },
                      { bullet: 'third', text: bulletThreeText, top: thirdBulTop, left: thirdBulLeft  }
                      ]
          },
          { slideType: "text" },
          { dataSource: "text" },
          { fileNum: "" }, 
          { meteorUser: Meteor.userId() },
          { chartType: "text" },
          { images: [
            {image: 'one', num: "", top: imageTop, left: imageLeft, width: imageWidth, height: imageHeight }, 
            {image: 'two', num: "", top: imageTop2, left: imageLeft2, width: imageWidth2, height: imageHeight2 },
            {image: 'three', num: "", top: imageTop3, left: imageLeft3, width: imageWidth3, height: imageHeight3 },
            {image: 'four', num: "", top: imageTop4, left: imageLeft4, width: imageWidth4, height: imageHeight4 }
            ]
          }
          ])
        slideCount++;
        Meteor.call('passingTheCount');
        return bulletThreeText;
      }
    }
  })

// >>>>>>>>>>> YUMMY SHOW START <<<<<<<<<<<<<<<<<


var titleSlideModalHeader = function () {
  var modalHeader = "Nice. You just named your YummyShow";
  console.log(modalHeader);
  return modalHeader;
}

Template.yummy_coins.events({
  'click .title-slide-goodbye': function () {
    $('#title-slide-modal').remove();
  }
})

Template.yummy_coins.events({
  'click .text-drag-goodbye': function () {
    $('#text-drag-modal').remove();
  },
  'click .slide-maker-goodbye': function () {
    $('#slide-maker-modal').remove();
    $('#modal-container').append('<div id="text-drag-modal" class="modal"></div>');
    $('#text-drag-modal').append('<div class="modal-header"><button type="button" class="close text-drag-goodbye" data-dismiss="modal">×</button><h3 id="myModalLabel"> Reposition your text! </h3></div>');
    $('#text-drag-modal').append('<div class="modal-body"><h4 id="make-title-slide-modal-head" class="title-slide-modal"> Simply CLICK the text you want to move </br></br> and DRAG it to your desired position </br></br> Text DRAG is functional on all slides </h4></div>');
    $('#text-drag-modal').append('<div class="modal-footer"><button class="btn text-drag-goodbye" data-dismiss="modal">Close</button></div>'); 
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
        $('#mkt-text').remove();
        $('#create-show').append('<span class="create-show-input"></span>');
        $('.create-show-input').append('<input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a YummyShow by giving it a name here" autofocus />');
        $('#homepage-mkt').append('<div id="mkt-plug" class="row"><span id="user-login-alert" class="span12"> <h4> Try again. You must be signed in to create a tasty YummyShow </h4></span></div>')
      } else {
        currentUser = Meteor.userId();
        Meteor.call('passingTheName', currentShow);
        slideCount = 1;
        var modalHeader = titleSlideModalHeader();
        $('#modal-container').append('<div id="title-slide-modal" class="modal"></div>');
        $('#title-slide-modal').append('<div class="modal-header"><button type="button" class="close title-slide-goodbye" data-dismiss="modal">×</button><h3 id="myModalLabel">'+modalHeader+'</h3></div>');
        $('#title-slide-modal').append('<div class="modal-body"><h4 id="make-title-slide-modal-head" class="title-slide-modal">Now, make a title slide</h4><p> You have three text inputs for the title slide</p><p> Here is a basic usage example: </p class="modal-example"> NORCAL REAL ESTATE TRENDS </br> Hot Neighborhoods in SF </br> July 2013 </p></div>');
        $('#title-slide-modal').append('<div class="modal-footer"><button class="btn title-slide-goodbye" data-dismiss="modal">Close</button></div>');
        $('#create-show').remove();
        $('#marketing-text').remove();
        $('#call-2-action').remove();
        $('#myCarousel').remove();
        $('#user-session-show').remove();
        $('#user-login-alert').remove();
        $('#mkt-plug').remove();
        $('#homepage-mkt').remove();
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
      var slideTitle = document.getElementById("title-slide-title").value;
      Slides.insert({
        show: currentShow,
        slide: slideCount,
        bullet: 'title',
        text: slideTitle,
        meteorUser: Meteor.userId()
      })
      var slideOneTitle = Slides.find( { slide: slideCount, meteorUser: Meteor.userId() } ).fetch();
      var userSlideMap = _.filter(slideOneTitle, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var slideOneTitleText = userSlideMap[0]['text'];
      $('#title-slide-title').remove();
      $('.instruct-title').remove();
      $('#make-slide-options').remove();
      $('#user-login-alert').remove();
      $('#homepage-mkt').hide();
      $('#slide-nav-row').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save This Slide and Continue </p></span></div>');
      $('.title-slide-title').append('<div id="title-slideTitle" class="title-slideTitle"> <h1 id="title-title">' + slideOneTitleText +'</h1></div>');
      $(function() {
        $('#title-title').draggable();
      });
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
      var userSlideMap = _.filter(bulletObj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var subTitleText = userSlideMap[1]['text'];
      $('#title-slide-sub-title').remove();
      $('.bullet-one').append('<div class="title-sub-title"> <h2 id="title-sub-bullet">' + subTitleText +'</h2></div>');
      $(function() {
        $('#title-sub-bullet').draggable();
      });
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
      var userSlideMap = _.filter(bullet2Obj, function (obj) {
        if (obj['show'] === currentShow) {
          return obj;
        }
      })
      var subSubTitleText = userSlideMap[2]['text'];
      $('#title-slide-sub-sub').remove();
      $('#slide-controls').remove();
      $('.bullet-two').append('<div class="title-sub-sub"> <h2 id="title-sub-sub">' + subSubTitleText +'</h2></div>');
      $(function() {
        $('#title-sub-sub').draggable();
      });
      $('#slide-nav-row').append('<div id="slide-controls" class="span12"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div>');
      return bulletTwo;
    }
  }
})




