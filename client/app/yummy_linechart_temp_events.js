

Template.yummy_coins.events({
  'click #bitly-line-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('#slide-inputs').remove();
    $('.make-start').append('<div id="chart-render-bitly" class="span12"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#modal-container').append('<div id="bitly-line-modal" class="modal"></div>');
    $('#bitly-line-modal').append('<div class="modal-header"><button type="button" class="close bitly-line-goodbye" data-dismiss="modal">×</button><h4 id="myModalLabel"> Bitly Hot Phrase Line Graph </h4></div>');
    $('#bitly-line-modal').append('<div class="modal-body"><h4 id="bitly-line-head" class="bitly-line-msg-modal"> Bitly Hot Phrases track link click behavior of articles being shared via social media (e.g. Twitter, Facebook) </br></br> Hot Phrases are dynamic in real time </br> The Y-Axis measures the Hot Phrase link CTR. The X-Axis is time </br></br> The Bitly line chart is reactive and will update in real time (roughly every 30 seconds) </h4></div>');
    $('#bitly-line-modal').append('<div class="modal-footer"><button class="btn bitly-line-goodbye" data-dismiss="modal">Close</button></div>');
    return Meteor.call("renderHotBits");
  },
  'click .bitly-line-goodbye': function () {
    $('#bitly-line-modal').remove();
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





