
var currentShow;
var thisCurrentShow;
var currentYummyShow;
var yummyShowSlideIndex = 0;

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
      // $('#navbar').remove();
      //Meteor.clearInterval(Session.get("bitcoinInterval"));
      $('.bitcoin-chart').remove();
      $('.bitly-chart').remove();
      $('#yummy-shows').remove();
      $('#slide-index').remove();
      $('.make-start').remove();
      $('#slide-preview').remove();
      $('#img-back-upload').remove();
      $('#slide-controls').remove();
      $('#create-chart-sub').remove();
      currentYummyShow = (Shows.find({ 0 : { show: thisCurrentShow }}).fetch());
      console.log(currentYummyShow);
      var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
      $('#body-row').append('<div class="the-show"><div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
    },
  'click #show-title': function () {
    var yummyBulletOneText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][1]['text'];
    $('.the-show').append('<div id="show-bullet-one" class="span12 show-bullet-one"><span class="show-bullet-one"><h2>' + yummyBulletOneText +'</h2></span></div></div>');
    },
  'click #show-bullet-one': function () {
    var yummyBulletTwoText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][2]['text'];
    $('.the-show').append('<div id="show-bullet-two" class="span12 show-bullet-two"><span class="show-bullet-two"><h2>' + yummyBulletTwoText +'</h2></span></div></div>');
    },
  'click #show-bullet-two': function () {
    var yummyBulletThreeText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][3]['text'];
    $('.the-show').append('<div id="show-bullet-three" class="span12 show-bullet-three"><span class="show-bullet-three"><h2>' + yummyBulletThreeText +'</h2></span></div></div>');
    },
  'click #show-bullet-three': function () {
    yummyShowSlideIndex++;
    $('#show-title').remove();
    $('#show-bullet-one').remove();
    $('#show-bullet-two').remove();
    $('#show-bullet-three').remove();
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
    //var yummyTitleText = currentYummyShow[yummyShowSlideIndex]['2']['contents'][0]['text'];
    //$('.the-show').append('<div id="show-title" class="span12 show-title"><span class="title"><h1>' + yummyTitleText +'</h1></span></div></div>');
  }
})

Template.yummy_coins.events({
  'click #chart-control': function (){
    yummyShowSlideIndex++;
    $('#chart-control').remove();
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
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
