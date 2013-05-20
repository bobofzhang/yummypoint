


Template.yummy_coins.events({
  'click .chart-slide': function () {
    console.log('I am playing with charts');
    $('.text-slide').remove();
    $('.chart-slide').remove();
    $('.slide-preview').remove();
    // $('.liveData-slide').remove();
    // $('.make-start').append('<div class="create_graph"><input type="button" class="add_chart" value="Make a Chart!" /> </br> </br></div>');
    // $('.top-body').append('<div class="create_graph"><div class="row"><div class=span12><span class="line-chart"> <p> Line Chart</p></span> </div></div></div>');
    $('.make-start').append('<div class="create_graph"><div class="row"><div class="span4"> <span class="line-chart"> <h1> Line Chart</h1></span></div><div class="span4"> <span class="bar-chart"> <h1> Bar Chart</h1></span></div><div class="span4"> <span class="bubble-chart"> <h1> Bubble Chart </h1> </span> </div> </div> </div>');
    // $('.make-start').append('<div class="slide_inputs"><div class="slide-title"><input id="slide-title" type="text" /> <input type="button" class="add-title" value="Slide Title" /><div class="bullet_one"><input id="bullet_one" type="text" /> <input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet_two"> <input id="bullet_two" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet_three"><input id="bullet_three" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> <input type="button" class="make_another_slide" value="Make Another Slide" /> </br> <br> <input type="button" class="save_slides" value="Save and Preview" /> </br> <br></div>');
  }
})