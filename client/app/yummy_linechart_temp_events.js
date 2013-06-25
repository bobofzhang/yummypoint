
// Meteor.methods({
//   renderHotBits: function(){
//     var bitTags = Hotbits.find({}, { sort: { clickrate: -1 }, limit: 50 }).fetch();
//     var bitTagsArray =[];
//     for (var i = 0; i < bitTags.length; i++) {
//         bitTagsArray.push(bitTags[i]['phrase']);
//     }
//     var bitArray = _.uniq(bitTagsArray);
//     console.log(bitArray);
//     $('.hot-bits').remove();
//     $('.make-start').append('<div id="hot-bits-div"></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-1" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[0] + '">' + bitArray[0] + '</p></span></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-2" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[1] + '">' + bitArray[1] + '</p></span></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-3" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[2] + '">' + bitArray[2] + '</p></span></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-4" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[3] + '">' + bitArray[3] + '</p></span></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-5" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[4] + '">' + bitArray[4] + '</p></span></div>');
//     $('#hot-bits-div').append('<div id="hot-bit-6" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[5] + '">' + bitArray[5] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-1" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[0]['phrase'] + '">' + bitArray[0]['phrase'] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-2" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[1]['phrase'] + '">' + bitArray[1]['phrase'] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-3" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[2]['phrase'] + '">' + bitArray[2]['phrase'] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-4" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[3]['phrase'] + '">' + bitArray[3]['phrase'] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-5" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[4]['phrase'] + '">' + bitArray[4]['phrase'] + '</p></span></div>');
//   //   $('#hot-bits-div').append('<div id="hot-bit-6" class="span2"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[5]['phrase'] + '">' + bitArray[5]['phrase'] + '</p></span></div>');
//   }
// })

// Template.yummy_coins.events({
//   'click #hot-bit-1': function() {
//     var hotBitVal2 = document.getElementById("hot-bit1");
//     var bitPhraseVal = hotBitVal2.getAttribute("title");
//     return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
//   }
// })

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
    return Meteor.call("renderHotBits");
    //return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); });
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





