
var currentShow;
var thisCurrentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var yummySlideBulletCount = 0;
var thisShowName;

Meteor.methods({
  passCurrentShowName: function (showName) {
    console.log('in the passCurrentShowName');
    thisCurrentShow = showName;
    return thisCurrentShow;
  }
})


//>>>>>>>> YUMMY SHOW <<<<<<<<<<<<<
Template.yummy_coins.events({
  'click #user-show-name-1': function () {
    thisShowName = $('#user-show-name-1').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    $('')
    yummySlideBulletCount++;
  },
  'click #user-show-name-2': function () {
    thisShowName = $('#user-show-name-2').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    yummySlideBulletCount++;
  },
  'click #user-show-name-3': function () {
    thisShowName = $('#user-show-name-3').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    yummySlideBulletCount++;
  },
  'click #user-show-name-4': function () {
    thisShowName = $('#user-show-name-4').text()
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    yummySlideBulletCount++;
  },
  'click #user-show-name-5': function () {
    thisShowName = $('#user-show-name-5').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    yummySlideBulletCount++;
  },
  'click #user-show-name-6': function () {
    thisShowName = $('#user-show-name-6').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    Meteor.call('passShowName', thisShowName);
    Meteor.call('passShowNameBitCoin', thisShowName);
    Meteor.call('passCurrentShowName', thisShowName);
    Meteor.call('passShowNameUserData', thisShowName);
    Meteor.call('passShowNamePreview', thisShowName);
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
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
    $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
    yummySlideBulletCount++;
  },
  'click #the-show-title': function () {
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    $('.the-show').remove();
    $('.make-start').append('<div id="the-show-one" class="the-show"></div>');
    $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div>'); 
    if (yummyBulletOneText) {
      $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        return;
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
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
  'click #the-show-one': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = showFilter[yummyShowSlideIndex]['2']['contents'][2]['text'];
    $('.the-show').remove();
    $('.make-start').append('<div id="the-show-two" class="the-show"></div>');
    $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div>'); 
    $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    if (yummyBulletTwoText) {
      $('.the-show').append('<div id="show-titleSlide-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletTwoText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        return;
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #the-show-two': function () {
    currentYummyShow = Shows.find().fetch();
    var showFilter = _.filter(currentYummyShow, function (obj) {
      if (obj[0]['show'] === thisShowName) {
        return obj;
      }
    })
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = showFilter[yummyShowSlideIndex]['2']['contents'][2]['text'];
    var yummyBulletThreeText = showFilter[yummyShowSlideIndex]['2']['contents'][3]['text'];
    $('.the-show').remove();
    $('.make-start').append('<div id="the-show-three" class="the-show"></div>');
    $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div>'); 
    $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    $('.the-show').append('<div id="show-titleSlide-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletTwoText +'</h2></span></div></div>');
    if (yummyBulletThreeText) {
      $('.the-show').append('<div id="show-titleSlide-bullet-three" class="span12 show-bullet-three"><span class="show-bullet-three"><h2>' + yummyBulletThreeText +'</h2></span></div></div>');
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
        return;
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
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
    console.log(showFilter);
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0;
      return;
    } else {
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
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
    console.log(showFilter);
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
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
    console.log(showFilter);
    var yummyTitleText = showFilter[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = showFilter[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = showFilter[yummyShowSlideIndex]['2']['contents'][2]['text'];
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
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
    console.log(showFilter);
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
        var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('.the-show').remove();
          $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
          $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
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
    console.log(showFilter);
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
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
      return
    } else {
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('.the-show').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
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
    console.log(showFilter);
    $('#chart-control').remove();
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
    $('.the-show').remove();
    $('#slide-inputs-chart').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (showFilter[yummyShowSlideIndex] == null) {
      $('#chart-render').remove();  
      $('#chart-render-bitly').remove();
      $('#chart-render-bitcoin').remove();
      $('.the-show').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="create-show" class="span12 create-show"></div>');
      $('#create-show').append('<span class="create-show-input"><input id="create-show-input" class="make-a-show" type="text" placeholder="Begin making a new Yummy Show by naming it here" autofocus /></span>');
      $('.user-details').show();
      $('#footer-div').show();
      $('#hide-shows').remove();
      $('#user-show-template').show();
      $('#user-shows').show();
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0
      return
    } else { 
      var type = showFilter[yummyShowSlideIndex]['3']['slideType'];
      var source = showFilter[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = showFilter[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitcoin" class="span12 show-chart-render"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="chart-render-bitly" class="span12 show-chart-render"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('.the-show').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div><div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.make-start').append('<div id="chart-render" class="span12 show-chart-render"></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
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
