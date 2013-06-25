

Template.yummy_coins.events({
  'click #bitly-line-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('#slide-inputs').remove();
    $('.make-start').append('<div id="chart-render-bitly" class="span12"></div>');
   // $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    //$('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
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





