
var thisShowName;
var chartCount = 0;

Meteor.methods({
    passShowNameChartCreate: function (showName) {
        console.log('im in the show pass');
        thisShowName = showName;
        chartCount = 0;
        return thisShowName && chartCount;
    }
})

Meteor.methods({
    primeChartNavRemoveElem: function(){
        $('#slide-instruct').remove();
        $('.slide-title').remove();
        $('#hot-bits-div').remove();
        $('#hotbit-line-chart').remove();
        $('#create-chart-sub').remove();
        $('#create-text-sub').remove();
        $('#make-slide-options').remove();
        $('#text-bullets').remove();
        $('#chart-bullets').remove();
        $('#slide-inputs').remove();
        $('.slide-controls').remove();
        $('#save-bitcoin-slide').remove();
        $('#save-bitly-slide').remove();
        $('#save-bitly-slide-bubble').remove();
        $('#save-userfile-slide').remove();
        $('#save-user-bub-slide').remove();
        $('#preview-slide-inputs').remove();
        $('#slide-controls').remove();
        $('#slide-inputs-chart').remove();
        $('.saved-slide-preview').remove();
        $('#edit-current-slide').remove();
        $('#inputs').remove();
        $('#render-userFile').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitcoin').remove();
        $('#user-bub-chart-render').remove();
        $('#chart-render-bitly-bubble').remove();
    }
})

// Template.yummy_coins.events({
//   'click .text-drag-goodbye': function () {
//     $('#text-drag-modal').remove();
//   },
//   'click .slide-maker-goodbye': function () {
//     $('#slide-maker-modal').remove(); 
//   }
// })

Template.yummy_coins.events({
    'click #create-chart-sub': function () {
        Meteor.call('primeChartNavRemoveElem');
        $('#slide-nav-row').append('<div id="create-text-sub" class="span12"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div>');
        $('.make-start').append('<div id="data-source-container" class="span12 chart-data-sources-types"></div>');
        $('.chart-data-sources-types').append('<div id="user-data-row" class="row"></div>');
        $('.chart-data-sources-types').append('<div id="user-chart-options-row" class="row"></div>');
        $('#user-data-row').append('<div id="userFile-chart" class="span12"><span class="line-chart-upload"><p> Create a Chart Slide Using Your Data </p><span></div>');
        // $('#user-data-row').append('<div id="user-chart-options-row" class="span6"></div>');
        $('#user-chart-options-row').append('<div id="user-data" class="span3"><span class="user-file"> <h4> Upload Your CSV File </h4> </span></div>');
        //$('#user-chart-options-row').append('<div id="user-data-bar-nav" class="span3 pull-right"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
        //$('#user-chart-options-row').append('<div id="user-data-bubble-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
        $('#user-chart-options-row').append('<div id="user-data-line-nav" class="span3 pull-right"> <span class="line-chart"> <h4> Line Chart </h4></span></div>');
        //$('#user-chart-options-row').append('<div id="inputs" class="span3 clearfix pull-right"><h4><input type="file" id="files" name="files[]" /><h4></div>');
        //$('#user-chart-options-row').append('<div id="bar-chart-nav" class="span4"> <span class="bar-chart"> <h4> Bar Chart</h4></span></div>');
        $('#user-chart-options-row').append('<div id="user-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
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
        $('#bitly-data-row').append('<div id="bitly-bubble-chart-nav" class="span3 pull-right"> <span class="bubble-chart"> <h4> Bubble Chart </h4></span></div>');
        //$('.make-start').append('<div id="slide-inputs" class="span12 show-title-slide"></div>');
        console.log(thisShowName);
        var chartCheck = Shows.find().fetch();
        var showCheckFilter = _.filter(chartCheck, function (show) {
            if (show[0]['show'] === thisShowName) {
                return show;
            }
        })
        var chartReCheck = _.filter(showCheckFilter, function (obj) {
            console.log(chartCount);
            // var tys = obj[0]['chartType'];
            // console.log(tys);
            var tysD = obj['7']['chartType'];
            console.log(tysD);
            if (tysD != "text" || chartCount >= 1) {
                return;
            } else {
                $('#modal-container').append('<div id="text-drag-modal" class="modal"></div>');
                $('#text-drag-modal').append('<div class="modal-header"><button type="button" class="close text-drag-goodbye" data-dismiss="modal">×</button><h3 id="myModalLabel"> Data makes your Yummy Show tasty </h3></div>');
                $('#text-drag-modal').append('<div class="modal-body"><h4 id="make-title-slide-modal-head" class="title-slide-modal"> You can easily intregrate DATA into your Yummy Show </br></br> Choose from our comprehensive set of public DATA sources </br></br> OR </br></br> Use your own DATA </h4></div>');
                $('#text-drag-modal').append('<div class="modal-footer"><button class="btn text-drag-goodbye" data-dismiss="modal">Close</button></div>');
                chartCount++;
            }
        })
    },
    'click #create-text-sub': function () {
        Meteor.call('primeChartNavRemoveElem');
        $('#line-chart-nav').remove();
        $('#bar-chart-nav').remove();
        $('#bubble-chart-nav').remove();
        $('#slide-nav-row').remove();
        $('.chart-data-sources-types').remove();
        $('#slide-nav').append('<div id="slide-nav-row" class="row"></div>');
        $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
        $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
        //$('#slide-nav-row').append('<div id="add-image" class="span5"><div id="img-inputs" class="clearfix" onclick="files.click()"><span class="add-slide-image">Add an Image </span><input type="file" id="files" accept="image/jpg" name="files[]" style="visibility:hidden;"/></div></div>');
        $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create a Chart Slide </p></span></div>');
        $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter the Slide Title Here" autofocus />');
    }
})



