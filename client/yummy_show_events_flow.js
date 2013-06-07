
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
  'click .start-current-show': function () {
      //$('.navbar').remove();
      //Meteor.clearInterval(Session.get("bitcoinInterval"));
      $('.bitcoin-chart').remove();
      $('.bitly-chart').remove();
      $('#yummy-shows').remove();
      $('#slide-index').remove();
      $('#slide-inputs').remove();
      //$('.make-start').remove();
      $('#slide-preview').remove();
      $('#img-back-upload').remove();
      $('#slide-controls').remove();
      $('#create-chart-sub').remove();
      currentYummyShow = (Shows.find({ 0 : { show: thisCurrentShow }}).fetch());
      console.log(currentYummyShow);
      var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
      //$('#body-row').append('<div class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      $('.make-start').append('<div id="the-show-title" class="the-show"><div id="show-titleSlide-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>'); 
      yummySlideBulletCount++;
  },
  // 'click .the-show': function () {
  //   // alert('i feel the touch');
  //   // event.preventDefault();
  //   //yummySlideBulletCount++;
  //   var yummyBulletText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][yummySlideBulletCount]['text'];
  //   if (yummyBulletText) {
  //     if ((yummyShowSlideIndex = 0) && (yummySlideBulletCount = 1)) {
  //       $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletText +'</h2></span></div></div>');
  //       yummySlideBulletCount++;
  //     } else if ((yummyShowSlideIndex = 0) && (yummySlideBulletCount = 2)) {
  //       $('.the-show').append('<div id="show-titleSlide-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletText +'</h2></span></div></div>');
  //       yummySlideBulletCount++;
  //     } else if ((yummyShowSlideIndex = 0) && (yummySlideBulletCount = 3)) {
  //       $('.the-show').append('<div id="show-titleSlide-bullet-three" class="span12 show-bullet-three"><span class="show-bullet-three"><h2>' + yummyBulletText +'</h2></span></div></div>');
  //       yummySlideBulletCount = 0;
  //       alert(yummySlideBulletCount);
  //     }
  //   }
  //   // if (yummyBulletOneText) {
  //   //   if (yummyShowSlideIndex = 0) {
  //   //     $('.the-show').append('<div id="show-titleSlide-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
  //   //   } else {
  //   //     $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
  //   //   }
  //   //<<<<<<<<<<< I NEED THE CODE BELOW >>>>>>>>>>>>>
  //   // } else {
  //   //   yummyShowSlideIndex++;
  //   //   $('#show-titleSlide-title').remove();
  //   //   var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
  //   //   var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
  //   //   console.log(type);
  //   //   if (type === "chart" && source === "bitcoin") {
  //   //     $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
  //   //     $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
  //   //     // var func = slideTitle[1]['2']['contents'];
  //   //     return Meteor.call('D3testinit'); 
  //   //   } else if (type === "chart" && source === "bitly") {
  //   //     $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
  //   //     $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
  //   //     return Meteor.call('bitlyLineChartD3');
  //   //   } else {
  //   //     var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
  //   //     $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
  //   //   }
  //   // }
  // },
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
      $('#show-titleSlide-title').remove();
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
      $('#show-titleSlide-title').remove();
      $('#show-titleSlide-bullet-one').remove();
      // $('#show-bullet-two').remove();
      // $('#show-bullet-three').remove();
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
      // $('#show-titleSlide-title').remove();
      // $('#show-titleSlide-bullet-one').remove();
      // $('#show-titleSlide-bullet-two').remove();
      // $('#show-bullet-three').remove();
      $('.the-show').remove();
      $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  },
  'click #the-show-three': function () {
    yummyShowSlideIndex++;
    // $('#show-titleSlide-title').remove();
    // $('#show-titleSlide-bullet-one').remove();
    // $('#show-titleSlide-bullet-two').remove();
    // $('#show-titleSlide-bullet-three').remove();
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
    var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
    console.log(type);
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
      // var func = slideTitle[1]['2']['contents'];
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else {
      var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
      $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    }
    //var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    //$('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
      $('#show-title').remove();
      // $('#show-bullet-one').remove();
      // $('#show-bullet-two').remove();
      // $('#show-bullet-three').remove();
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
      $('#show-title').remove();
      $('#show-bullet-one').remove();
      // $('#show-bullet-two').remove();
      // $('#show-bullet-three').remove();
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
      $('#show-title').remove();
      $('#show-bullet-one').remove();
      $('#show-bullet-two').remove();
      // $('#show-bullet-three').remove();
      var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
      var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
      console.log(type);
      if (type === "chart" && source === "bitcoin") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        // var func = slideTitle[1]['2']['contents'];
        return Meteor.call('D3testinit'); 
      } else if (type === "chart" && source === "bitly") {
        $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        return Meteor.call('bitlyLineChartD3');
      } else {
        var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
        $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
      }
    }
  },
  'click #show-content-three': function () {
    yummyShowSlideIndex++;
    // $('#show-title').remove();
    // $('#show-bullet-one').remove();
    // $('#show-bullet-two').remove();
    // $('#show-bullet-three').remove();
    $('.the-show').remove();
    $('.make-start').append('<div id="show-content-title" class="the-show"></div>');
    var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
    var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
    console.log(type);
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
      // var func = slideTitle[1]['2']['contents'];
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else {
      var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
      $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    }
    //var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    //$('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
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
    var type = currentYummyShow[yummyShowSlideIndex]['3']['slideType'];
    var source = currentYummyShow[yummyShowSlideIndex]['4']['dataSource'];
    console.log(type);
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      // var func = slideTitle[1]['2']['contents'];
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="chart-control" class="span12"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else {
      var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
      $('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    }
  }
})
