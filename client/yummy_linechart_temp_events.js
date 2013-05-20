
Meteor.methods({
  renderHotBits: function(){
    var bitTags = Hotbits.find({}, { sort: { time: -1, rate: -1 }, limit: 20 }).fetch();
    console.log(bitTags);
    $('.hot-bits').remove();
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[0]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[1]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[2]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[3]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[4]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[5]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[6]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[7]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[8]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[9]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[10]['phrase'] + '</p></span></div>');
    $('.make-start').append('<div class="span1"><span class="hot-bits"><p>' + bitTags[11]['phrase'] + '</p></span></div>');
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
    $('.make-start').append('<div class="save-bitly-slide"><div class="row"><div class="span12"> <span class="save-bitly-slide"> <p> That Looks Sick. Put that in Yummy </p> </span></div></div></div>');
    // var bitTags;
    // // Deps.autorun(function(){
    // //   bitTags = Hotbits.find({}, { sort: { time: -1 }, limit: 6 }).fetch();
    // //   return bitTags;
    // // });
    // Meteor.setInterval(function(){
    //   bitTags = Hotbits.find({}, { sort: { time: -1 }, limit: 6 }).fetch();
    //   return bitTags;
    // }, 10000);
    // console.log(bitTags);
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[0]['phrase'] + '</p></span></div>');
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[1]['phrase'] + '</p></span></div>');
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[2]['phrase'] + '</p></span></div>');
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[3]['phrase'] + '</p></span></div>');
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[4]['phrase'] + '</p></span></div>'); Deps.autorun(function(){ return Meteor.call('renderHotBits'); })
    // $('.make-start').append('<div class="span2"><span class="hot-bits"><p>' + bitTags[5]['phrase'] + '</p></span></div>'); Meteor.setInterval(function(){ Meteor.call("renderHotBits") }, 10000);
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

// Template.yummy_coins.events({
//   'click .save-bitly-slide': function() {
//     console.log('you are saving a bitly slide');
//     Charts.insert({
//       show: currentShow, 
//       slide: slideCount

//     })
//   }
// })


