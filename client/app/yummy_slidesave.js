
var thisShow;
var slideNumber;
var fileCount;
var bitPhrase;

Meteor.methods({
  passSlideCountSave: function (count) {
    slideNumber = count;
    return slideNumber;
  }
})

Meteor.methods({
  passShowNameSave: function (showName) {
    thisShow = showName;
    return thisShow;
  }
})

Meteor.methods({
  passFileCount: function (fileNum) {
    fileCount = fileNum;
    return fileCount;
  }
})

Meteor.methods({
  passBitPhrase: function (hotBit) {
    bitPhrase = hotBit;
    return bitPhrase;
  }
})

Meteor.methods({
  saveSlideElementRemoval: function(){
    $('#slide-links').append('<div id="saved-slide' + slideNumber + '" title="'+ slideNumber +'" class="span1 saved-slide"><span class="slidelink' + slideNumber + '"<p> Slide' + ' ' + slideNumber + '</p></span></div>');
    $('#slide-instruct').remove();
    $('#create-text-sub').remove();
    $('#create-chart-sub').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#slide-inputs-chart-user-bubble').remove();
    $('#chart-render').remove();
    $('#chart-render-bitcoin').remove();
    $('#chart-render-bitly').remove();
    $('#chart-render-bitly-bubble').remove();
    $('#save-bitcoin-slide').remove();
    $('#save-userfile-slide').remove();
    $('#save-bitly-slide-bubble').remove();
    $('#save-bitly-slide').remove();
    $('#save-user-bub-slide').remove();
    $('#hotbit-line-chart').remove();
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create Chart Slide </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    Meteor.call('tickSlideCount');
  }
})

Template.yummy_coins.events({
  'click #save-bitly-slide-bubble': function() {
      Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: "Meteor.call('d3BubbleChart')" }, 
      { slideType: "chart" },
      { dataSource: "bitly" },
      { fileNum: ""}, 
      { meteorUser: Meteor.userId() },
      { chartType: "bubble" }
      ]);
      Meteor.call('saveSlideElementRemoval');
  },
  'click #save-bitly-slide': function() {
    Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: bitPhrase }, 
      { slideType: "chart" },
      { dataSource: "bitly" },
      { fileNum: ""}, 
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    Meteor.call('saveSlideElementRemoval');
  },
  'click #save-bitcoin-slide': function() {
    Shows.insert([
      { show: thisShow},
      { slide: slideNumber },
      { contents: "Meteor.call('D3testinit')" },
      { slideType: "chart" },
      { dataSource: "bitcoin" },
      { fileNum: ""},
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    Meteor.call('saveSlideElementRemoval');
  },
  'click #save-userfile-slide': function () {
    console.log(fileCount);
    Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: "Meteor.call('userFileLineChart')" },
      { slideType: "chart" },
      { dataSource: "userfile" },
      { fileNum: fileCount },
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    Meteor.call('saveSlideElementRemoval');
  },
  'click #save-user-bub-slide': function () {
    Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: "Meteor.call('userBubbleChart')" },
      { slideType: "chart" },
      { dataSource: "userfile" },
      { fileNum: fileCount },
      { meteorUser: Meteor.userId() },
      { chartType: "bubble" }
    ]);
    Meteor.call('saveSlideElementRemoval');
  }
})

