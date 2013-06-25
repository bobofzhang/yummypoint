
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

Template.yummy_coins.events({
  'click #bitly-line-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('#slide-inputs').remove();
    $('.make-start').append('<div id="chart-render-bitly" class="span12"></div>');
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
    $('.make-start').append('<div id="chart-render-bitcoin" class="span12"></div>');
    $('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save Bitcoin Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    return Deps.autorun(function(){ return Meteor.call('D3testinit'); });
  }
})





