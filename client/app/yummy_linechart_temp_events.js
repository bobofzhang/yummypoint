
Meteor.methods({
  renderHotBits: function(){
    var bitTags = Hotbits.find({}, { sort: { time: -1, rate: -1 }, limit: 20 }).fetch();
    // console.log(bitTags);
    $('.hot-bits').remove();
    $('.make-start').append('<div id="hot-bit-1" class="span1"><span class="hot-bits"><p id="hot-bit1">' + bitTags[0]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-2" class="span1"><span class="hot-bits"><p>' + bitTags[1]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-3" class="span1"><span class="hot-bits"><p>' + bitTags[2]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-4" class="span1"><span class="hot-bits"><p>' + bitTags[3]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-5" class="span1"><span class="hot-bits"><p>' + bitTags[4]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-6" class="span1"><span class="hot-bits"><p>' + bitTags[5]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-7" class="span1"><span class="hot-bits"><p>' + bitTags[6]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-8" class="span1"><span class="hot-bits"><p>' + bitTags[7]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-9" class="span1"><span class="hot-bits"><p>' + bitTags[8]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-10" class="span1"><span class="hot-bits"><p>' + bitTags[9]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-11" class="span1"><span class="hot-bits"><p>' + bitTags[10]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div id="hot-bit-12" class="span1"><span class="hot-bits"><p>' + bitTags[11]['phrase'] + '</p></span></div>');
  }
})

Template.yummy_coins.events({
  'click .hot-bits': function() {
    console.log($('p').val());
    console.log($(this).val());
    var hotBitVal2 = document.getElementById("hot-bit1").value;
    console.log("hi");
    console.log(hotBitVal2);
    console.log($('p').val());
  }
})

// Template.yummy_coins.events({
//   'click .line-chart': function () {
//     $('.create_graph').remove();
//     $('#slide-nav-row').append('<div id="bar-chart-switch" class="span2"><span class="bar-recall"><p> Switch to Bar Chart </p></span></div><div id="bubble-chart-switch" class="span2"><span class="bubble-recall"><p> Switch to Bubble Chart </p></span></div>');
//     $('.make-start').append('<div class="line-chart-data-sources"><div id="line-data-row" class="row"><div id="userFile-chart" class="span6"><span class="line-chart-upload"><h3> Upload a File</h3><span></div></div>');
//     $('#line-data-row').append('<div class="span6"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div></div></div>');
//     $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span6"></div><div class="span2"><span class="twitter"> <h3> Twitter </h3> </span></div><div class="span2"><span class="bit-coins"> <h3> Bit Coins </h3> </span></div><div class="span2"><span class="bitly"> <h3> Bitly </h3> </span></div></div></div>');
//   },
//   'click #bar-chart-switch': function () {
//     alert('congratulations... but sorry, no easter eggs!')
//   },
//   'click #bubble-chart-switch': function () {
//     alert('sorry... you loose. wrong button mister clicker!!!')
//   }
// })

Template.yummy_coins.events({
  'click #bitly-line-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('.make-start').append('<div id="slide-inputs-chart" class="span12 show-title-slide"></div>');
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    //return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); }) && Meteor.call("renderHotBits");
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); });
  }
})

Template.yummy_coins.events({
  'click #coin-line-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('.make-start').append('<div id="slide-inputs-chart" class="span12 show-title-slide"></div>');
    $('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save Bitcoin Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    return Deps.autorun(function(){ return Meteor.call('D3testinit'); });
  }
})

Template.yummy_coins.events({
    'click #twit-line-chart-nav': function () {
        alert('Thanks for trying. Feature coming soon.');
    }
})





