
var currentShow;
var thisCurrentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var yummySlideBulletCount = 0;
var thisShowName;
// var showFilter;

var thisTop;
var titleLeft;

Meteor.methods({
  passCurrentShowName: function (showName) {
    thisCurrentShow = showName;
    return thisCurrentShow;
  }
})

Meteor.methods({
  showRenderFix: function (titleTop, pixels) {
    console.log(pixels);
    var num = /\S\d+/;
    var newNum = num.exec(titleTop);
    var newTop = newNum[0];
    var intTop = parseInt(newTop);
    var plusTop = intTop+pixels;
    var pxTop = plusTop+"px";
    return pxTop;
  }
})

// Meteor.methods({
//   filterShows: function () {
//     currentYummyShow = Shows.find().fetch();
//     var showFilter = _.filter(currentYummyShow, function (obj) {
//       if (obj[0]['show'] === thisShowName) {
//         return obj;
//       }
//     })
//     return showFilter;
//   }
// })

Meteor.methods ({
  renderTitleTitle: function (showFilter) {
    var titleTop = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['top'];
    if (titleTop) {
      thisTop = Meteor.call('showRenderFix', titleTop, -11);
      var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
      titleLeft = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['left'];
      $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1 id="show-title-title" style="position: relative; top:'+ thisTop +'; left:'+ titleLeft +';">' + yummyTitleText +'</h1></span></div>');
    } else {
      var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
      $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1 id="show-title-title">' + yummyTitleText +'</h1></span></div>');
    }
  }
})

Meteor.methods ({
  renderTitleFirst: function (showGoods, yummyBulletOneText) {
    var firstTop = showGoods[1]['top'];
    if (firstTop) {
      // var pixels = -9;
      // var num = /\S\d+/;
      // var newNum = num.exec(firstTop);
      // var newTop = newNum[0];
      // var intTop = parseInt(newTop);
      // var plusTop = intTop+pixels;
      // var thisFirstTop = plusTop+"px";
      var thisFirstTop = Meteor.call('showRenderFix', firstTop, -9);
      var firstLeft = showGoods[1]['left'];
      $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2 id="show-title-first" style="position: relative; top:'+ thisFirstTop +'; left:'+ firstLeft +';">' + yummyBulletOneText +'</h2></span></div>');
    } else {
      $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2 id="show-title-first">' + yummyBulletOneText +'</h2></span></div>');
    } 
  }
})

Meteor.methods({
    yummyShowStart: function(showName){
        thisShowName = showName;
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        Meteor.call('passingTheName', thisShowName);
        $('#plug-text-title').remove();
        $('#show-maker').remove();
        $('.user-details').hide();
        $('#show-list-row').hide();
        $('#footer-div').hide();
        $('#user-shows').hide();
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
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#hot-bits-div').remove();
        $('#hotbit-line-chart').remove();
        $('#data-source-container').remove();
        $('.make-start').append('<div id="the-show-title" class="the-show"></div>');
        currentYummyShow = Shows.find().fetch();
        var showFilter = _.filter(currentYummyShow, function (obj) {
          if (obj[0]['show'] === thisShowName) {
            return obj;
          }
        })
        Meteor.call('renderTitleTitle', showFilter);
        // var titleTop = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['top'];
        // if (titleTop) {
        //   thisTop = Meteor.call('showRenderFix', titleTop, -11);
        //   console.log(thisTop);
        //   var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
        //   titleLeft = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['left'];
        //   $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1 id="show-title-title" style="position: relative; top:'+ thisTop +'; left:'+ titleLeft +';">' + yummyTitleText +'</h1></span></div></div>');
        // } else {
        //   var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
        //   $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1 id="show-title-title">' + yummyTitleText +'</h1></span></div></div>');
        // }
        yummySlideBulletCount++;
    }
})

//>>>>>>>> YUMMY SHOW <<<<<<<<<<<<<
Template.yummy_coins.events({
  'click #user-show-name-1': function () {
    var showName = $('#user-show-name-1').text();
    Meteor.call('yummyShowStart', showName );
  },
  'click #user-show-name-2': function () {
    showName = $('#user-show-name-2').text();
    Meteor.call('yummyShowStart', showName );
  },
  'click #user-show-name-3': function () {
    showName = $('#user-show-name-3').text();
    Meteor.call('yummyShowStart', showName );
  },
  'click #user-show-name-4': function () {
    showName = $('#user-show-name-4').text();
    Meteor.call('yummyShowStart', showName );
  },
  'click #user-show-name-5': function () {
    showName = $('#user-show-name-5').text();
    Meteor.call('yummyShowStart', showName );
  },
  'click #user-show-name-6': function () {
    showName = $('#user-show-name-6').text();
    Meteor.call('yummyShowStart', showName );
  }
})

Meteor.methods({
  showSlideLogic: function (showFilter) {
    if (showFilter[yummyShowSlideIndex] == null) {
      $('.the-show').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
      $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a new Yummy Show by naming it here" autofocus /></span>');
      $('.user-details').show();
      $('#footer-div').show();
      $('#hide-shows').remove();
      $('#user-show-template').show();
      $('#user-shows').show();
      $('#homepage-mkt').show();
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0;
      return;
    } else {
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      console.log(type);
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly" && chartType === "line") {
        $('.the-show').remove();
        var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3', bitPhrase);
      } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
        return Meteor.call('d3BubbleChart');
      } else if (type === "chart" && source === "userfile" && chartType === "line") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userFileLineChart', fileCount);
      } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userBubbleChart', fileCount);
      } else {
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#user-bub-chart-render').remove();
        $('#chart-render-bitly-bubble').remove();
        var titleTop = showFilter[yummyShowSlideIndex]['2']['contents'][0]['top'];
        if (titleTop) {
          var slideTop = Meteor.call('showRenderFix', titleTop, 40);
          console.log(slideTop);
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          var slideLeft = showFilter[yummyShowSlideIndex]['2']['contents'][0]['left'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1 id="show-title-title" style="position: relative; top:'+ slideTop +'; left:'+ slideLeft +';">' + yummyTitleText +'</h1></span></div>');
        } else {
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1 id="show-title-title">' + yummyTitleText +'</h1></span></div>');
        } 
      }
    }
  }
})

Template.yummy_coins.events({
  'click #the-show-title': function () {
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    $('.the-show').remove();
    $('.make-start').append('<div id="the-show-one" class="the-show"></div>');
    var showGoods = showFilter[yummyShowSlideIndex]['2']['contents'];
    Meteor.call('renderTitleTitle', showFilter);
    var yummyBulletOneText = showGoods[1]['text'];
    if (yummyBulletOneText) {
      Meteor.call('renderTitleFirst', showGoods, yummyBulletOneText);
      // var firstTop = showGoods[1]['top'];
      // if (firstTop) {
      //   var pixels = -9;
      //   var num = /\S\d+/;
      //   var newNum = num.exec(firstTop);
      //   var newTop = newNum[0];
      //   var intTop = parseInt(newTop);
      //   var plusTop = intTop+pixels;
      //   var thisFirstTop = plusTop+"px";
      //   var firstLeft = showGoods[1]['left'];
      //   $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2 id="show-title-first" style="position: relative; top:'+ thisFirstTop +'; left:'+ firstLeft +';">' + yummyBulletOneText +'</h2></span></div>');
      // } else {
      //   $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2 id="show-title-first">' + yummyBulletOneText +'</h2></span></div>');
      // }
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      Meteor.call('showSlideLogic', showFilter);
    }
  },
  'click #the-show-one': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    var showGoods = showFilter[yummyShowSlideIndex]['2']['contents'];
    var yummyBulletTwoText = showGoods[2]['text'];
    if (yummyBulletTwoText) {
      var secondTop = showGoods[2]['top'];
      if (secondTop) {
        var pixels = -9;
        var num = /\S\d+/;
        var newNum = num.exec(firstTop);
        var newTop = newNum[0];
        var intTop = parseInt(newTop);
        var plusTop = intTop+pixels;
        var thisSecondTop = plusTop+"px";
        var secondLeft = showGoods[2]['left'];
        $('.the-show').append('<div id="show-titleSlide-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2 id="show-title-second" style="position: relative; top:'+ thisSecondTop +'; left:'+ secondLeft +';">' + yummyBulletTwoText +'</h2></span></div>');
      } else {
        $('.the-show').append('<div id="show-titleSlide-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2 id="show-title-second">' + yummyBulletTwoText + '</h2></span></div></div>');
      }
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      Meteor.call('showSlideLogic', showFilter);
    }
  },

      // if (showFilter[yummyShowSlideIndex] == null) {
      //   $('.the-show').remove();
      //   $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      //   $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
      //   $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a new Yummy Show by naming it here" autofocus /></span>');
      //   $('.user-details').show();
      //   $('#footer-div').show();
      //   $('#hide-shows').remove();
      //   $('#user-show-template').show();
      //   $('#user-shows').show();
      //   $('#homepage-mkt').show();
      //   yummyShowSlideIndex = 0;
      //   yummySlideBulletCount = 0;
      //   return;
      // } else {
      //   var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      //   var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      //   var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      //   var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
      //   if (type === "chart" && source === "bitcoin") {
      //     $('.the-show').remove();
      //     $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      //     $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
      //     return Meteor.call('D3testinit'); 
      //   } else if (type === "chart" && source === "bitly" && chartType === "line") {
      //     var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
      //     $('.the-show').remove();
      //     $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      //     $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
      //     return Meteor.call('bitlyLineChartD3', bitPhrase);
      //   } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
      //     $('.the-show').remove();
      //     $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      //     $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
      //     return Meteor.call('d3BubbleChart');
      //   } else if (type === "chart" && source === "userfile" && chartType === "line") {
      //     $('.the-show').remove();
      //     $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      //     $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
      //     return Meteor.call('userFileLineChart', fileCount);
      //   } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
      //     $('.the-show').remove();
      //     $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
      //     $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
      //     return Meteor.call('userBubbleChart', fileCount);
      //   } else {
      //     var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
      //     $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      //   }

  'click #the-show-two': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    var yummyBulletThreeText = showFilter[yummyShowSlideIndex]['2']['contents'][3]['text'];
    if (yummyBulletThreeText) {
      $('.the-show').append('<div id="show-titleSlide-bullet-three" class="span12 show-bullet-three"><span class="show-bullet-three"><h2>' + yummyBulletThreeText +'</h2></span></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show();
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        return;
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly" && chartType === "line") {
          var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3', bitPhrase);
        } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
          return Meteor.call('d3BubbleChart');
        } else if (type === "chart" && source === "userfile" && chartType === "line") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userFileLineChart', fileCount);
        } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userBubbleChart', fileCount);
        } else {
          $('#chart-render').remove();
          $('#chart-render-bitly').remove();
          $('#chart-render-bitcoin').remove();
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #the-show-three': function () {
    yummyShowSlideIndex++;
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show();
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
      return;
    } else {
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly" && chartType === "line") {
        var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3', bitPhrase);
      } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
        return Meteor.call('d3BubbleChart');
      } else if (type === "chart" && source === "userfile" && chartType === "line") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userFileLineChart', fileCount);
      } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userBubbleChart', fileCount);
      } else {
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
 },

//>>>>>>>>>>>>>>>>> SHOW BODY SLIDES <<<<<<<<<<<<<<<<<

  'click #show-content-title': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    $('.the-show').remove();
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    $('.make-start').append('<div id="show-content-one" class="the-show"></div>');
    $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    if (yummyBulletOneText) {
      $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show();
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly" && chartType === "line") {
          var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3', bitPhrase);
        } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
          return Meteor.call('d3BubbleChart');
        } else if (type === "chart" && source === "userfile" && chartType === "line") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userFileLineChart', fileCount);
        } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userBubbleChart', fileCount);
        } else {
          $('#chart-render').remove();
          $('#chart-render-bitly').remove();
          $('#chart-render-bitcoin').remove();
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-one': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = showFilter[yummyShowSlideIndex]['2']['contents'][2]['text'];
    var yummyBulletThreeText = showFilter[yummyShowSlideIndex]['2']['contents'][3]['text'];
    var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-two" class="the-show"></div>');
    $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    if (yummyBulletTwoText) {
      $('.the-show').append('<div id="show-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletTwoText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show();
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly" && chartType === "line") {
          var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3', bitPhrase);
        } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
          return Meteor.call('d3BubbleChart');
        } else if (type === "chart" && source === "userfile" && chartType === "line") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userFileLineChart', fileCount);
        } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userBubbleChart', fileCount);
        } else {
          $('#chart-render').remove();
          $('#chart-render-bitly').remove();
          $('#chart-render-bitcoin').remove();
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-two': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = showFilter[yummyShowSlideIndex]['2']['contents'][2]['text'];
    var yummyBulletThreeText = showFilter[yummyShowSlideIndex]['2']['contents'][3]['text'];
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-three" class="the-show"></div>');
    $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    $('.the-show').append('<div id="show-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletTwoText +'</h2></span></div></div>');
    if (yummyBulletThreeText) {
      $('.the-show').append('<div id="show-bullet-three" class="span12 show-bullet-three"><span class="show-bullet-three"><h2>' + yummyBulletThreeText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show(); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly" && chartType === "line") {
          var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3', bitPhrase);
        } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
          return Meteor.call('d3BubbleChart');
        } else if (type === "chart" && source === "userfile" && chartType === "line") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userFileLineChart', fileCount);
        } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
          return Meteor.call('userBubbleChart', fileCount);
        } else {
          $('#chart-render').remove();
          $('#chart-render-bitly').remove();
          $('#chart-render-bitcoin').remove();
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-three': function () {
    yummyShowSlideIndex++;
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (showFilter[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
        $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="To get started type your Yummy Show name here" autofocus /></span>');
        $('.user-details').show();
        $('#footer-div').show();
        $('#hide-shows').remove();
        $('#user-show-template').show();
        $('#user-shows').show();
        $('#homepage-mkt').show();
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
      return
    } else {
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly" && chartType === "line") {
        var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3', bitPhrase);
      } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
        return Meteor.call('d3BubbleChart');
      } else if (type === "chart" && source === "userfile" && chartType === "line") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userFileLineChart', fileCount);
      } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userBubbleChart', fileCount);
      } else {
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  }
})

Template.yummy_coins.events({
  'click .show-chart-render': function (){
    yummyShowSlideIndex++;
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    $('#chart-control').remove();
    $('.the-show').remove();
    $('#slide-inputs-chart').remove();
    $('#chart-render-bitly-bubble').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (showFilter[yummyShowSlideIndex] == null) {
      $('#chart-render').remove();  
      $('#chart-render-bitly').remove();
      $('#chart-render-bitcoin').remove();
      $('#chart-render-bitly-bubble').remove();
      $('.the-show').remove();
      $('#user-bub-chart-render').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
      $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a new Yummy Show by naming it here" autofocus /></span>');
      $('.user-details').show();
      $('#footer-div').show();
      $('#hide-shows').remove();
      $('#user-show-template').show();
      $('#user-shows').show();
      $('#homepage-mkt').show();
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0
      return
    } else { 
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      var chartType = showFilter[yummyShowSlideIndex]['7']['chartType'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly" && chartType === "line") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        var bitPhrase = showFilter[yummyShowSlideIndex]['2']['contents'];
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3', bitPhrase);
      } else if (type === "chart" && source === "bitly" && chartType === "bubble") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12 show-chart-render"></div>');
        return Meteor.call('d3BubbleChart');
      } else if (type === "chart" && source === "userfile" && chartType === "line") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userFileLineChart', fileCount);
    } else if (type === "chart" && source === "userfile" && chartType === "bubble") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="user-bub-chart-render" class="span12 show-chart-render"></div>');
        return Meteor.call('userBubbleChart', fileCount);
      } else {
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#chart-render-bitly-bubble').remove();
        $('#user-bub-chart-render').remove();
        var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  }
})
