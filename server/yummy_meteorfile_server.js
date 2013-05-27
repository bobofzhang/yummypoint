
var fs = Npm.require('fs');
var path = Npm.require('path');

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

  save: function (dirPath, options) {
    console.log('i have been called');
    var filePath = path.join(dirPath, this.name);
    var buffer = new Buffer(this.data);
    fs.writeFileSync(filepath, buffer, options);
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

// _.extend(MeteorFile, {
//   save: function (dirPath, options) {
//     console.log('i have been called');
//     var filePath = path.join(dirPath, this.name);
//     var buffer = new Buffer(this.data);
//     fs.writeFileSync(filepath, buffer, options);
//   }
// });

Meteor.methods({
  uploadFile: function (file) {
    file.save('/Users/Tyson/Desktop/image_store/', {});
    console.log(file);
  }
});