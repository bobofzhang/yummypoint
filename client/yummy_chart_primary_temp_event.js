


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
    $('#create-text-sub').remove();
    $('#preview-slide-inputs').remove();
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
    $('.make-start').append('<div class="chart-data-sources-types"></div>');
    $('.chart-data-sources-types').append('<div id="user-data-row" class="row"></div><div id="user-chart-options-row" class="row"></div>');
    $('#user-data-row').append('<div id="userFile-chart" class="span12"><span class="line-chart-upload"><h3> Upload Your Own Data </h3><span></div>');
    $('#user-chart-options-row').append('<div id="line-chart-nav" class="span4"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    $('#user-chart-options-row').append('<div id="bar-chart-nav" class="span4"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    $('#user-chart-options-row').append('<div id="bubble-chart-nav" class="span4"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('.chart-data-sources-types').append('<div id="public-data-row" class="row"></div><div id="twitter-data-row" class="row"></div><div id="bitcoin-data-row" class="row"></div><div id="bitly-data-row" class="row"></div>');
    $('#public-data-row').append('<div class="span12"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div>');
    $('#twitter-data-row').append('<div id="twitter-data" class="span3"><span class="twitter"> <h4> Twitter </h4> </span></div>');
    //$('#twitter-data-row').append('<div id="line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    $('#twitter-data-row').append('<div id="twit-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    $('#twitter-data-row').append('<div id="twit-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('#bitcoin-data-row').append('<div id="bitcoin-data" class="span3"><span class="bit-coins"> <h4> Bit Coins </h4> </span></div>');
    $('#bitcoin-data-row').append('<div id="coin-line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    $('#bitcoin-data-row').append('<div id="coin-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    //$('#bitcoin-data-row').append('<div id="bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    $('#bitly-data-row').append('<div id="bitly-data" class="span3"><span class="bitly"> <h4> Bitly </h4> </span></div>');
    $('#bitly-data-row').append('<div id="bitly-line-chart-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart</h4></span></div>');
    $('#bitly-data-row').append('<div id="bitly-bar-chart-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
    $('#bitly-data-row').append('<div id="bitly-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
    //$('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
    }
})

// Template.yummy_coins.events({
//   'click #create-chart': function () {
//     $('#create-chart').remove();
//     $('#create-text').remove();
//     $('#make-slide-options').remove();
//     $('#text-bullets').remove();
//     $('#chart-bullets').remove();
//     $('#slide-inputs').remove();
//     // $('#slide-instruct').remove();
//     // $('.slide-title').remove();
//     // $('#create-chart-sub').remove();
//     // $('#img-back-upload').remove();
//     $('#slide-nav-row').append('<div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
//     $('.make-start').append('<div class="create_graph"><div id="create-graph-row" class="row"></div></div>');
//     $('#create-graph-row').append('<div id="line-chart-nav" class="span4"> <span class="line-chart"> <h1> Line Chart</h1></span></div>');
//     $('#create-graph-row').append('<div id="bar-chart-nav" class="span4"> <span class="bar-chart"> <h1> Bar Chart</h1></span></div>');
//     $('#create-graph-row').append('<div id="bubble-chart-nav" class="span4"> <span class="bubble-chart"> <h1> Bubble Chart </h1></span></div>');
//     $('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
//     //$('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
//     //$('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
//     // $('.make-start').append('<div class="slide_inputs"><div class="slide-title"><input id="slide-title" type="text" /> <input type="button" class="add-title" value="Slide Title" /><div class="bullet_one"><input id="bullet_one" type="text" /> <input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet_two"> <input id="bullet_two" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet_three"><input id="bullet_three" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> <input type="button" class="make_another_slide" value="Make Another Slide" /> </br> <br> <input type="button" class="save_slides" value="Save and Preview" /> </br> <br></div>');
//   }
// })

