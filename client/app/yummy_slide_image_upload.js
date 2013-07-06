var imgCount = 0;

Template.yummy_coins.events({
  'click #slide-img_upload': function() {
    $('#user-chart-options-row').append('<div id="user-line-instruct" class="span12"><span class="user-line-info"> Upload a CSV file to create a line graph slide </br> The first column is the y-axis </br> The second column is the time scale x-axis </br> The second column of your data file must be in date format </span></div>')
    $('#user-chart-options-row').append('<div id="cloak-inputs" class="span12"><div id="img-inputs" class="clearfix" onclick="files.click()"><span class="input-text"> Upload file from computer </span><input type="file" id="files" name="files[]" style="visibility:hidden;"/></div></div>');
  }
})

Template.yummy_coins.events({
  // 'click #cloak-inputs': function () {
  //   filepicker.setKey('A12wDVTEfRR2KhAhTTwyBz');
  //   var input = document.getElementById("read-input");
  //   var output = document.getElementById("read-result");
  //   if (!input.value) {
  //   console.log("Choose an image to read below");
  //   } else {
  //     filepicker.read(input, {base64encode: true}, 
  //     function(imgdata){
  //           output.src = 'data:image/png;base64,'+imgdata;
  //           console.log("Read successful");
  //     }, function(fperror) {
  //           console.log(fperror.toString());
  //     });
  //   }
  // },
  'change #img-inputs': function (event, tmpl) {
    $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    // event.preventDefault();
    var files = event.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(event) {
      var img = event.target.result;
      Images.insert({
        name: file.name,
        count: imgCount,  
        file: img
        //meteorUser: Meteor.userId(),
        //show: thisShowName
      })
      imgCount++;
      reader.onerror = function(){ 
        alert('Unable to read ' + file.fileName); 
      };
    }
    $('#img-inputs').remove();
    $('.make-start').append('<div id="post-image-upload"><div id="upload-success-msg" class="span12"><span class="success-msg"><p> File Upload Success </p></span></div></div>');
    $('#post-image-upload').append('<div id="render-image" class="span8 see-userFile"> <span class="view-image"> <p> prview image</p></span></div>');    
  },
  'click #render-image': function () {
    alert('feel the click');
    var myImages = Images.find().fetch();
    var showImg = myImages[0]['file'];
    //var showImg = window.btoa(unescape(encodeURIComponent( thisImg )));
    console.log(showImg);
    $('.make-start').append('<div id="image-test"><img id="thisImage" src="'+showImg+'" alt="An awesome image" /></div>');
    $(function() {
      $('#image-test').draggable();
      //$('#image-test').resizable();
      $('#thisImage').resizable();
    });
  }
})

