
MeteorFile = function (options) {
  options = options || {};
  this.name = options.name;
  this.type = options.type;
  this.size = options.size;
  this.source = options.source;
};

MeteorFile.fromJSONValue = function (value) {
  return new MeteorFile({
    name: value.name,
    type: value.type,
    size: value.size,
    source: EJSON.fromJSONValue(value.source)
  });
};

MeteorFile.prototype = {
  constructor: MeteorFile,

  typeName: function () {
    return "MeteorFile";
  },

  equals: function (other) {
    return
      this.name == other.name &&
      this.type == other.type &&
      this.size == other.size;
  },

  clone: function () {
    return new MeteorFile({
      name: this.name,
      type: this.type,
      size: this.size,
      source: this.source
    });
  },

  read: function (file, callback) {
    var reader = new FileReader;
    var meteorFile = this;

    callback = callback || function () {};

    reader.onload = function () {
      meteorFile.source = new Uint8Array(reader.result);
      callback(null, meteorFile);
    };

    reader.onerror = function () {
      callback(reader.error);
    };

    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
    //return new MeteorFile(file).read(file, callback);
  },

  toJSONValue: function () {
    return {
      name: this.name,
      type: this.type,
      size: this.size,
      source: EJSON.toJSONValue(this.source)
    };
  }
};

EJSON.addType("MeteorFile", MeteorFile.fromJSONValue);

// _.extend(MeteorFile.prototype, {
//   read: function (file, callback) {
//     var reader = new FileReader;
//     var meteorFile = this;

//     callback = callback || function () {};

//     reader.onload = function () {
//       meteorFile.source = new Uint8Array(reader.result);
//       callback(null, meteorFile);
//     };

//     reader.onerror = function () {
//       callback(reader.error);
//     };

//     reader.readAsArrayBuffer(file);
//   }
// });

_.extend(MeteorFile, {
  read: function (file, callback) {
    return new MeteorFile(file).read(file, callback);
  }
});

// Template.pickFile.events({
//   'change #files-upload': function (event, tmpl) {
//     event.preventDefault();
//     console.log('im in the bitch');
//     var fileInput = document.getElementById("files-upload").value;
//     console.log(fileInput);
//     var fileVal = tmpl.find('input[type=file]');
//     var form = event.currentTarget;
//     console.log(form);
//     var theFile = fileVal.files[0];
//     console.log(theFile);
//     //var theFile = event.target.files; // FileList object
//     // files is a FileList of File objects. List some properties.
//     var output = [];
//     output.push('<li><strong>', escape(theFile.name), '</strong> (', theFile.type || 'n/a', ') - ',
//                   theFile.size, ' bytes, last modified: ',
//                   theFile.lastModifiedDate ? theFile.lastModifiedDate.toLocaleDateString() : 'n/a',
//                   '</li>');
//     document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

//     Files.insert({
//       file: theFile
//     })
//     var testImg = Files.find({}).fetch();
//     console.log(testImg);
//     var testTest = testImg[0]['file']['name']
//     console.log(testTest);
//     //$('#fileTest').append('<span><img src=' + testTest + '></span>');
//     $('#fileTest').append('<h3>' + testTest + '</h3>');
//     $('.make-start').append('<span><img src=' + testTest + '></span>');

//     MeteorFile.read(theFile, function (err, meteorFile) {
//       console.log('i am in the meteorfile func');
//       // Make a Meteor method call passing a meteorFile
//       Meteor.call("uploadFile", meteorFile, function (err) {
//         console.log('yippy in the upload file call');
//         if (err) 
//           throw err;
//         else
//           console.log('yo... somthing');
//           form.reset();
//       })
//     })
//   }
// })

Template.pickFile.events({
  'change #inputs': function (event, tmpl) {
    console.log('i feel you');
    // event.preventDefault();
    // $('#files').bind('change', handleFileSelect);

    //function handleFileSelect(event) {
      var files = event.target.files; // FileList object
      var file = files[0];

      // read the file metadata
      var output = ''
          output += '<span style="font-weight:bold;">' + escape(file.name) + '</span><br />\n';
          output += ' - FileType: ' + (file.type || 'n/a') + '<br />\n';
          output += ' - FileSize: ' + file.size + ' bytes<br />\n';
          output += ' - LastModified: ' + (file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a') + '<br />\n';

      // read the file contents
      printTable(file);

      // post the results
      $('#list').append(output);
    //}

    function printTable(file) {
      console.log('i am in printTable');
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var csv = event.target.result;
        //console.log(csv);
        var data = $.csv.toArrays(csv);
        console.log(data);
        Files.insert({
          name: file.name,
          file: data
        })
        var html = '';
        for(var row in data) {
          html += '<tr>\r\n';
          for(var item in data[row]) {
            html += '<td>' + data[row][item] + '</td>\r\n';
          }
          html += '</tr>\r\n';
        }
        $('#contents').html(html);
      };
      reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    }
  }
})





