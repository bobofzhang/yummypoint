


Template.yummy_coins.events({
  'click #create-chart-sub': function () {
    $('#slide-instruct').remove();
    $('.slide-title').remove();
    $('#create-chart-sub').remove();
    $('#img-back-upload').remove();
    //$('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    $('.make-start').append('<div class="create_graph"><div id="create-graph-row" class="row"></div></div>');
    $('#create-graph-row').append('<div id="line-chart-nav" class="span4"> <span class="line-chart"> <h1> Line Chart</h1></span></div>');
    $('#create-graph-row').append('<div id="bar-chart-nav" class="span4"> <span class="bar-chart"> <h1> Bar Chart</h1></span></div>');
    $('#create-graph-row').append('<div id="bubble-chart-nav" class="span4"> <span class="bubble-chart"> <h1> Bubble Chart </h1></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
    //$('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
    // $('.make-start').append('<div class="slide_inputs"><div class="slide-title"><input id="slide-title" type="text" /> <input type="button" class="add-title" value="Slide Title" /><div class="bullet_one"><input id="bullet_one" type="text" /> <input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet_two"> <input id="bullet_two" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet_three"><input id="bullet_three" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> <input type="button" class="make_another_slide" value="Make Another Slide" /> </br> <br> <input type="button" class="save_slides" value="Save and Preview" /> </br> <br></div>');
  }
})

