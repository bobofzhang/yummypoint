
Template.yummy_coins.events({
  'click #create-chart-sub': function () {
    $('#slide-instruct').remove();
    $('.slide-title').remove();
    $('#create-chart-sub').remove();
    $('#img-back-upload').remove();
    $('#make-slide-options').remove();
    $('#text-bullets').remove();
    $('#chart-bullets').remove();
    $('#slide-inputs').remove();
    $('.slide-controls').remove();
    $('#save-bitcoin-slide').remove();
    $('#save-bitly-slide').remove();
    $('#render-userFile').remove();
    $('#create-text-sub').remove();
    $('#preview-slide-inputs').remove();
    $('#slide-controls').remove();
    $('.saved-slide-preview').remove();
    $('#edit-current-slide').remove();
    $('#inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#save-userfile-slide').remove();
    $('#chart-render').remove();
    $('#chart-render-bitly').remove();
    $('#chart-render-bitcoin').remove();
    $('#slide-nav-row').append('<div id="create-text-sub" class="span12"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div>');
    // $('.make-start').append('<div class="row chart-data-sources-types"></div>');
    // $('.chart-data-sources-types').append('<div id="user-data-row" class="span12"></div>');
    $('.make-start').append('<div id="data-source-container" class="span12 chart-data-sources-types"></div>');
    $('.chart-data-sources-types').append('<div id="user-data-row" class="row"></div>');
    $('.chart-data-sources-types').append('<div id="user-chart-options-row" class="row"></div>');
    $('#user-data-row').append('<div id="userFile-chart" class="span12"><span class="line-chart-upload"><p> Create a Chart Slide Using Your Data </p><span></div>');
    // $('#user-data-row').append('<div id="user-chart-options-row" class="span6"></div>');
    $('#user-chart-options-row').append('<div id="user-data" class="span3"><span class="user-file"> <h4> Upload Your CSV File </h4> </span></div>');
    //$('#user-chart-options-row').append('<div id="user-data-bar-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#user-chart-options-row').append('<div id="user-data-bubble-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('#user-chart-options-row').append('<div id="inputs" class="span3 clearfix pull-right"><h4><input type="file" id="files" name="files[]" /><h4></div>');
    //$('#user-chart-options-row').append('<div id="bar-chart-nav" class="span4"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#user-chart-options-row').append('<div id="bubble-chart-nav" class="span4"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('.chart-data-sources-types').append('<div id="public-data-row" class="row"></div>');
    $('.chart-data-sources-types').append('<div id="twitter-data-row" class="row"></div>');
    $('.chart-data-sources-types').append('<div id="bitcoin-data-row" class="row"></div>');
    $('.chart-data-sources-types').append('<div id="bitly-data-row" class="row"></div>');
    //$('#public-data-row').append('<div id="live-data-space" class="span1"></div>');
    $('#public-data-row').append('<div id="live-data-head" class="span12"><span class="live-data-header"> <p> Create a Chart Slide Using Live Data Sources </p> </span></div>');
    //$('#public-data-row').append('<div id="live-data-space" class="span1"></div>');
    //$('#twitter-data-row').append('<div id="twitter-data" class="span3"><span class="twitter"> <h4> Twitter </h4> </span></div>');
    //$('#twitter-data-row').append('<div id="line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    //$('#twitter-data-row').append('<div id="twit-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#twitter-data-row').append('<div id="twit-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('#bitcoin-data-row').append('<div id="bitcoin-data" class="span3"><span class="bit-coins"> <h4> Bitcoin Mt.Gox (USD) </h4> </span></div>');
    $('#bitcoin-data-row').append('<div id="coin-line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    //$('#bitcoin-data-row').append('<div id="coin-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#bitcoin-data-row').append('<div id="bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('#bitly-data-row').append('<div id="bitly-data" class="span3"><span class="bitly"> <h4> Bitly </h4> </span></div>');
    $('#bitly-data-row').append('<div id="bitly-line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    //$('#bitly-data-row').append('<div id="bitly-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#bitly-data-row').append('<div id="bitly-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    //$('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
    }
})


