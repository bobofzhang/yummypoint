
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
  'click .line-chart': function () {
    $('.create_graph').remove();
    $('.make-start').append('<div class="line-chart-options"><div class="row"><div class="span12"> <span class="line-chart"> <h1> Line Chart</h1></span></div></div></div>');
    $('.make-start').append('<div class="line-chart-data-sources"><div class="row"><div class="span6"> Upload a File </div><div class="span6"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span6"></div><div class="span2"><span class="twitter"> <h3> Twitter </h3> </span></div><div class="span2"><span class="bit-coins"> <h3> Bit Coins </h3> </span></div><div class="span2"><span class="bitly"> <h3> Bitly </h3> </span></div></div></div>');
    // Meteor.call("getBitCoinData");
    // return Meteor.call('D3testinit');
  }
})

Template.yummy_coins.events({
  'click .bitly': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    //$('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bitly-hot"> <h3> Bitly </h3> </span></div></div></div>');
    $('.make-start').append('<div id="save-bitly-slide" class="save-bitly-slide"><div class="row"><div class="span12"> <span class="save-bitly-slide"> <p> That Looks Sick. Put that in Yummy </p> </span></div></div></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); }) && Meteor.setInterval(function(){ Meteor.call("renderHotBits") }, 10000) && Meteor.call("renderHotBits");
  }
})

Template.yummy_coins.events({
  'click .bit-coins': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bit-coins"> <h3> Bit Coins </h3> </span></div></div></div>');
    return Meteor.call('D3testinit');
  }
})





