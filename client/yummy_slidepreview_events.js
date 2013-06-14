
var previewShowName;

Meteor.methods({
  passShowNamePreview: function (showName) {
    console.log('in the pass Show Name Preview Yippee Yippee');
    previewShowName = showName;
    return previewShowName;
  }
})

Template.yummy_coins.events({
  'click .slidelink2': function(){
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
    $('#render-userFile').remove();
    //var thisUser = Meteor.userId();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[1]['3']['slideType'];
    var source = slideShowMap[1]['4']['dataSource'];
    var fileCount = slideShowMap[1]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3'); 
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[1][2]['contents'];
      console.log(slideTextArray);
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click .slidelink3': function(){
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
    $('#render-userFile').remove();
    //var thisUser = Meteor.userId();
    //var slideTitle = Shows.find({"meteorUser": thisUser}).fetch();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[2]['3']['slideType'];
    var source = slideShowMap[2]['4']['dataSource'];
    var fileCount = slideShowMap[2]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3'); 
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      //$('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[2][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click .slidelink4': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[3]['3']['slideType'];
    var source = slideShowMap[3]['4']['dataSource'];
    var fileCount = slideShowMap[3]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      //$('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[3][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click .slidelink5': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[4]['3']['slideType'];
    var source = slideShowMap[4]['4']['dataSource'];
    var fileCount = slideShowMap[4]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[4][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
     }
  },
  'click .slidelink6': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[5]['3']['slideType'];
    var source = slideShowMap[5]['4']['dataSource'];
    var fileCount = slideShowMap[5]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      // var func = slideTitle[1]['2']['contents'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return; 
    } else {
      var slideTextArray = slideShowMap[5][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click .slidelink7': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[6]['3']['slideType'];
    var source = slideShowMap[6]['4']['dataSource'];
    var fileCount = slideShowMap[6]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return; 
    } else {
      var slideTextArray = slideShowMap[6][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
     }
  },
  'click .slidelink8': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[7]['3']['slideType'];
    var source = slideShowMap[7]['4']['dataSource'];
    var fileCount = slideShowMap[7]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      // var func = slideTitle[1]['2']['contents'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[7][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
     }
  },
  'click .slidelink9': function(){
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
    $('#render-userFile').remove();    
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[8]['3']['slideType'];
    var source = slideShowMap[8]['4']['dataSource'];
    var fileCount = slideShowMap[8]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[8][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
     }
  },
  'click .slidelink10': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[9]['3']['slideType'];
    var source = slideShowMap[9]['4']['dataSource'];
    var fileCount = slideShowMap[9]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return; 
    } else {
      var slideTextArray = slideShowMap[9][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  },
  'click .slidelink11': function(){
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
    $('#render-userFile').remove();
    var slideTitle = Shows.find().fetch();
    var slideShowMap = [];
    for (var i = 0; i < slideTitle.length; i++) {
      if (slideTitle[i][0]['show'] === previewShowName) {
        slideShowMap.push(slideTitle[i]);
      }
    }
    console.log(slideShowMap);
    var type = slideShowMap[10]['3']['slideType'];
    var source = slideShowMap[10]['4']['dataSource'];
    var fileCount = slideShowMap[10]['5']['fileNum'];
    if (type === "chart" && source === "bitcoin") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('D3testinit'); 
    } else if (type === "chart" && source === "bitly") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      return Meteor.call('bitlyLineChartD3');
    } else if (type === "chart" && source === "userfile") {
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTextArray = slideShowMap[10][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  }
})

