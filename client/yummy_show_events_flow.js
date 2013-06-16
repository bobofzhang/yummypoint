
var currentShow;
var thisCurrentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;
var yummySlideBulletCount = 0;

Meteor.methods({
  passCurrentShowName: function (showName) {
    console.log('in the passCurrentShowName');
    thisCurrentShow= showName;
    return thisCurrentShow;
  }
})


//>>>>>>>> YUMMY SHOW <<<<<<<<<<<<<
Template.yummy_coins.events({
  // 'click #start-this-show': function () {
  //     //Meteor.clearInterval(Session.get("bitcoinInterval"));
  //     $('.bitcoin-chart').remove();
  //     $('.bitly-chart').remove();
  //     // $('#yummy-shows').remove();
  //     $('#show-row').remove();
  //     $('#slide-index').remove();
  //     $('#slide-inputs').remove();
  //     $('#slide-inputs-chart').remove();
  //     $('#slide-nav-row').remove();
  //     $('.saved-slide-preview').remove();
  //     $('#slide-preview').remove();
  //     $('#img-back-upload').remove();
  //     $('#slide-controls').remove();
  //     $('#create-chart-sub').remove();
  //     currentYummyShow = (Shows.find({ 0 : { show: thisCurrentShow }}).fetch());
  //     var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
  //     $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
  //     yummySlideBulletCount++;
  // },
  'click #user-show-name-1': function () {
    var thisShowName = $('#user-show-name-1').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
  'click #user-show-name-2': function () {
    var thisShowName = $('#user-show-name-2').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
    var thisShowName = $('#user-show-name-3').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
    var thisShowName = $('#user-show-name-4').text()
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
    var thisShowName = $('#user-show-name-5').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
    var thisShowName = $('#user-show-name-6').text();
    yummyShowSlideIndex = 0;
    yummySlideBulletCount = 0;
    $('.bitcoin-chart').remove();
    $('.bitly-chart').remove();
    $('#the-show-title').remove();
    $('#preview-slide-inputs').remove();
    $('#myCarousel').remove();
    // $('#yummy-shows').remove();
    $('#show-row').remove();
    $('#slide-index').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-nav-row').remove();
    $('.saved-slide-preview').remove();
    $('#slide-preview').remove();
    $('#img-back-upload').remove();
    $('#slide-controls').remove();
    $('#create-chart-sub').remove();
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
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    $('.the-show').remove();
    $('.make-start').append('<div id="the-show-one" class="the-show"></div>');
    $('.the-show').append('<div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div>'); 
    if (yummyBulletOneText) {
      $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }        
      }
    }
  },
  'click #the-show-one': function () {
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][2]['text'];
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
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #the-show-two': function () {
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][2]['text'];
    var yummyBulletThreeText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][3]['text'];
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
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #the-show-three': function () {
    yummyShowSlideIndex++;
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (currentYummyShow[yummyShowSlideIndex] == null) {
      $('.the-show').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
      $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0
      return
    } else {
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
 },

//>>>>>>>>>>>>>>>>> SHOW BODY SLIDES <<<<<<<<<<<<<<<<<

  'click #show-content-title': function () {
    $('.the-show').remove();
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    $('.make-start').append('<div id="show-content-one" class="the-show"></div>');
    $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    if (yummyBulletOneText) {
      $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    } else {
      yummyShowSlideIndex++;
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-one': function () {
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][2]['text'];
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
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-two': function () {
    var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    var yummyBulletTwoText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][2]['text'];
    var yummyBulletThreeText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][3]['text'];
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
      if (currentYummyShow[yummyShowSlideIndex] == null) {
        $('.the-show').remove();
        $('#yummy-shows').append('<div id="show-row" class="row"></div>');
        $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
        $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
        yummyShowSlideIndex = 0;
        yummySlideBulletCount = 0
        return
      } else {
        var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
        var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
        var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
        if (type === "chart" && source === "bitcoin") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          // var func = slideTitle[1]['2']['contents'];
          return Meteor.call('D3testinit'); 
        } else if (type === "chart" && source === "bitly") {
          $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
          $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
          return Meteor.call('bitlyLineChartD3');
        } else if (type === "chart" && source === "userfile") {
          $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
          Meteor.call('userFileLineChart', fileCount);
          $('#save-userfile-slide').remove();
          return;
        } else {
          var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
          $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
        }
      }
    }
  },
  'click #show-content-three': function () {
    yummyShowSlideIndex++;
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (currentYummyShow[yummyShowSlideIndex] == null) {
      $('.the-show').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
      $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0
      return
    } else {
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  }
})

Template.yummy_coins.events({
  'click #slide-inputs-chart': function (){
    yummyShowSlideIndex++;
    $('#chart-control').remove();
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
    $('.the-show').remove();
    $('#slide-inputs-chart').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    if (currentYummyShow[yummyShowSlideIndex] == null) {
      $('.the-show').remove();
      $('#yummy-shows').append('<div id="show-row" class="row"></div>');
      $('#show-row').append('<div id="session-show" class="span7"><span class="current-show"><h2>' + thisCurrentShow + '</h2></span></div>');
      $('#show-row').append('<div id="start-this-show" class="span4"><span class="start-current-show"><h2> Start' + ' ' + thisCurrentShow + '</h2></span><div>'); 
      yummyShowSlideIndex = 0;
      yummySlideBulletCount = 0
      return
    } else { 
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      var fileCount = currentYummyShow[yummyShowSlideIndex]['5']['fileNum'];
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else if (type === "chart" && source === "userfile") {
        $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
        Meteor.call('userFileLineChart', fileCount);
        $('#save-userfile-slide').remove();
        return;
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  }
})
