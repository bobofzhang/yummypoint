
var previewShowName;

Meteor.methods({
  passShowNamePreview: function (showName) {
    previewShowName = showName;
    return previewShowName;
  }
})

Meteor.methods({
  topRenderFix: function (titleTop, pixels) {
    var num = /\S\d+/;
    var newNum = num.exec(titleTop);
    var newTop = newNum[0];
    var intTop = parseInt(newTop);
    var plusTop = intTop+pixels;
    var pxTop = plusTop+"px";
    console.log(pxTop);
    return pxTop;
  }
})

Meteor.methods({
  slidePreviewRender: function(currentSlide){
    $('#create-chart-sub').remove();
    $('#edit-current-slide').remove();
    $('#create-text-sub').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#preview-slide-inputs').remove();
    $('.saved-slide-preview').remove();
    $('.chart-data-sources-types').remove();
    $('#save-userfile-slide').remove();
    $('#save-bitcoin-slide').remove();
    $('#save-user-bub-slide').remove();
    $('#render-userFile').remove();
    $('#chart-render').remove();
    $('#chart-render-bitly').remove();
    $('#chart-render-bitcoin').remove();
    $('#chart-render-bitly-bubble').remove();
    $('#user-bub-chart-render').remove();
    $('#render-user-bub-file').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    var type = slideShowMap[currentSlide]['3']['slideType'];
    var source = slideShowMap[currentSlide]['4']['dataSource'];
    var fileCount = slideShowMap[currentSlide]['5']['fileNum'];
    var chartType = slideShowMap[currentSlide]['7']['chartType'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="chart-render-bitcoin" class="span12"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly" && chartType === "line") {
      var bitPhrase = slideShowMap[currentSlide]['2']['contents'];
      console.log(bitPhrase);
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="chart-render-bitly" class="span12"></div>');
      return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhrase); });
    } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12"></div>');
      return Meteor.call('d3BubbleChart');
    } else if (type === "chart" && source === "userfile" && chartType === "line") {
      $('#slide-nav-row').remove();
      $('#slide-nav').append('<div id="slide-nav-row" class="row"></div>');
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="chart-render" class="span12"></div>');
      return Meteor.call('userFileLineChart', fileCount);
    } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
      $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      $('.make-start').append('<div id="user-bub-chart-render" class="span12"></div>');
      return Meteor.call('userBubbleChart', fileCount);
    } else {
      var slideTextArray = slideShowMap[currentSlide][2]['contents'];
      $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      if (currentSlide === 0) {
        $('.make-start').append('<div id="slide-preview" class="span12 saved-slide-preview"></div>'); 
        var titleTop = (slideTextArray[0]['top']);
        if (titleTop) {
          var thisTop = Meteor.call('topRenderFix', titleTop, 172);
          var title = slideTextArray[0]['text'];
          var titleLeft = slideTextArray[0]['left'];
          $('#slide-preview').append('<div id="show-title" class="show-title"> <h1 id="title-title" style="position: relative; top:'+ thisTop +'; left:'+ titleLeft +';">' + title + '</h1></div>');
        } else {
          var title = slideTextArray[0]['text'];
          $('#slide-preview').append('<div id="show-title-notop" class="show-title"> <h1 id="title-title">' + title + '</h1></div>');
        }
        var firstTop = slideTextArray[1]['top'];
        if (firstTop) {
          var thisFirstTop = Meteor.call('topRenderFix', firstTop, 162);
          var firstBull = slideTextArray[1]['text'];
          var firstLeft = slideTextArray[1]['left'];
          $('#slide-preview').append('<div class="bullet-first-slide-one"><h2 id="first-bullet" style="position: relative; top:'+ thisFirstTop +'; left:'+ firstLeft +';">' + firstBull + '</h2></div>');
        } else {
          var firstBull = slideTextArray[1]['text'];
          $('#slide-preview').append('<div class="bullet-first-slide-one"><h2 id="first-bullet">' + firstBull + '</h2></div>');
        }
        var secondTop = slideTextArray[2]['top'];
        if (secondTop) {
          var thisSecondTop = Meteor.call('topRenderFix', secondTop, 148);
          var secondBull = slideTextArray[2]['text'];
          var secondLeft = slideTextArray[2]['left'];
          $('#slide-preview').append('<div class="bullet-second-slide-one"> <h2 id="second-bullet" style="position: relative; top:'+ thisSecondTop +'; left:'+ secondLeft +';">' + secondBull + '</h2></div>');
        } else {
          var secondBull = slideTextArray[2]['text'];
          $('#slide-preview').append('<div class="bullet-second-slide-one"> <h2 id="second-bullet">' + secondBull + '</h2></div>');
        }
      }
      if (currentSlide > 0) {
        console.log("current slide is " + currentSlide);
        $('.make-start').append('<div id="slide-preview" class="span12 saved-slide-preview"></div>'); 
        var titleTop = (slideTextArray[0]['top']);
        console.log(titleTop);
        if (titleTop) {
          var thisTop = Meteor.call('topRenderFix', titleTop, 40);
          var title = slideTextArray[0]['text'];
          var titleLeft = slideTextArray[0]['left'];
          $('#slide-preview').append('<div class="slide-one-title"> <h1 id="title-title" style="position: relative; top:'+ thisTop +'; left:'+ titleLeft +';">' + title + '</h1></div>');
        } else {
          var title = slideTextArray[0]['text'];
          $('#slide-preview').append('<div class="slide-one-title-notop"> <h1 id="title-title">' + title + '</h1></div>');
        }
        var firstTop = slideTextArray[1]['top'];
        if (firstTop) {
          var thisFirstTop = Meteor.call('topRenderFix', firstTop, 105);
          var firstBull = slideTextArray[1]['text'];
          var firstLeft = slideTextArray[1]['left'];
          $('#slide-preview').append('<div class="bullet-first-slide-one"><h2 id="first-bullet" style="position: relative; top:'+ thisFirstTop +'; left:'+ firstLeft +';">' + firstBull + '</h2></div>');
        } else {
          var firstBull = slideTextArray[1]['text'];
          $('#slide-preview').append('<div class="bullet-first-slide-one"><h2 id="first-bullet">' + firstBull + '</h2></div>');
        }
        var secondTop = slideTextArray[2]['top'];
        if (secondTop) {
          var thisSecondTop = Meteor.call('topRenderFix', secondTop, 105);
          var secondBull = slideTextArray[2]['text'];
          var secondLeft = slideTextArray[2]['left'];
          $('#slide-preview').append('<div class="bullet-second-slide-one"> <h2 id="second-bullet" style="position: relative; top:'+ thisSecondTop +'; left:'+ secondLeft +';">' + secondBull + '</h2></div>');
        } else {
          var secondBull = slideTextArray[2]['text'];
          $('#slide-preview').append('<div class="bullet-second-slide-one"> <h2 id="second-bullet">' + secondBull + '</h2></div>');
        }
        var thirdTop = slideTextArray[3]['top'];
        if (thirdTop) {
          var thisThirdTop = Meteor.call('topRenderFix', thirdTop, 145);
          var thirdBull = slideTextArray[3]['text'];
          var thirdLeft = slideTextArray[3]['left'];
          $('#slide-preview').append('<div class="bullet-third-slide-one"> <h2 id="third-bullet" style="position: relative; top:'+ thisThirdTop +'; left:'+ thirdLeft +';">' + thirdBull + '</h2></div></div>');
        } else {
          var thirdBull = slideTextArray[3]['text'];
          $('#slide-preview').append('<div class="bullet-third-slide-one"> <h2 id="third-bullet">' + thirdBull + '</h2></div></div>');
        }
      }
      //var chartType = slideShowMap[currentSlide]['7']['chartType'];
      // $(function() {
      //   $('#title-title').draggable();
      //   $('#first-bullet').draggable();
      //   $('#second-bullet').draggable();
      // })
    }
  }
})

Template.yummy_coins.events({
  'click #saved-slide1': function(){
    var slideNumGetter = document.getElementById("saved-slide1");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide2': function(){
    var slideNumGetter = document.getElementById("saved-slide2");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide3': function(){
    var slideNumGetter = document.getElementById("saved-slide3");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide4': function(){
    var slideNumGetter = document.getElementById("saved-slide4");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide5': function(){
    var slideNumGetter = document.getElementById("saved-slide5");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide6': function(){
    var slideNumGetter = document.getElementById("saved-slide6");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide7': function(){
    var slideNumGetter = document.getElementById("saved-slide7");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide8': function(){
    var slideNumGetter = document.getElementById("saved-slide8");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide9': function(){
    var slideNumGetter = document.getElementById("saved-slide9");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide10': function(){
    var slideNumGetter = document.getElementById("saved-slide10");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  },
  'click #saved-slide11': function(){
    var slideNumGetter = document.getElementById("saved-slide11");
    var slideNum = slideNumGetter.getAttribute("title");
    var currentSlide = slideNum - 1;
    Meteor.call('slidePreviewRender', currentSlide);
  }
})


