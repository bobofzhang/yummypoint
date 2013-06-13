
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
    //var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var slideTitle = Shows.find({meteorUser: this.userId}).fetch();
    //var slideTitle = Shows.find({ meteorUser: Meteor.userId() }).fetch();
    console.log(slideTitle);
    var type = slideTitle[1]['3']['slideType'];
    var source = slideTitle[1]['4']['dataSource'];
    var fileCount = slideTitle[1]['5']['fileNum'];
    console.log(type);
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
      // var slideTitleMap = _.map(slideTitle, function(obj) {
      //   if (obj[0]['show'] === previewShowName) {
      //     console.log(obj[0]['show']);
      //     return obj;
      //   }
      // })
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[1][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    //var slideTitle = Shows.find( { meteorUser: Meteor.userId() } ).fetch();
    console.log(slideTitle);
    var type = slideTitle[2]['3']['slideType'];
    var source = slideTitle[2]['4']['dataSource'];
    var fileCount = slideTitle[2]['5']['fileNum'];
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
      //$('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[2][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[3]['3']['slideType'];
    var source = slideTitle[3]['4']['dataSource'];
    var fileCount = slideTitle[3]['5']['fileNum'];
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
      //$('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
      Meteor.call('userFileLineChart', fileCount);
      $('#save-userfile-slide').remove();
      return;
    } else {
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[3][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[4]['3']['slideType'];
    var source = slideTitle[4]['4']['dataSource'];
    var fileCount = slideTitle[4]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[4][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[5]['3']['slideType'];
    var source = slideTitle[5]['4']['dataSource'];
    var fileCount = slideTitle[5]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[5][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[6]['3']['slideType'];
    var source = slideTitle[6]['4']['dataSource'];
    var fileCount = slideTitle[6]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[6][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[7]['3']['slideType'];
    var source = slideTitle[7]['4']['dataSource'];
    var fileCount = slideTitle[7]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[7][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[8]['3']['slideType'];
    var source = slideTitle[8]['4']['dataSource'];
    var fileCount = slideTitle[8]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[8][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[9]['3']['slideType'];
    var source = slideTitle[9]['4']['dataSource'];
    var fileCount = slideTitle[9]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[9][2]['contents'];
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
    var slideTitle = Shows.find({}, {meteorUser: this.userId}).fetch();
    var type = slideTitle[10]['3']['slideType'];
    var source = slideTitle[10]['4']['dataSource'];
    var fileCount = slideTitle[10]['5']['fileNum'];
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
      var slideTitleMap = [];
      for (var i = 0; i < slideTitle.length; i++) {
        if (slideTitle[i][0]['show'] === previewShowName) {
          slideTitleMap.push(slideTitle[i]);
        }
      }
      console.log(slideTitleMap);
      var slideTextArray = slideTitleMap[10][2]['contents'];
      var title = slideTextArray[0]['text'];
      var firstBull = slideTextArray[1]['text'];
      var secondBull = slideTextArray[2]['text'];
      var thirdBull = slideTextArray[3]['text'];
      $('#slide-nav-row').append('<div id="edit-current-slide" class="span4"><span class="edit-slide"><p class="edit-this-slide"> Edit This Slide </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
      $('.make-start').append('<div class="span12 saved-slide-preview"> <div class="slide-one-title"> <h1>' + title + '</h1></div><div class="bullet-first-slide-one"><h2>' + firstBull + '</h2></div><div class="bullet-second-slide-one"> <h2>' + secondBull + '</h2></div><div class="bullet-third-slide-one"> <h2>' + thirdBull + '</h2></div></div>');
    }
  }
})

