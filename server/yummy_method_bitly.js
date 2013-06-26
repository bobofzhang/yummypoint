
var preDataSet = [];

Meteor.setInterval(function(){
  Meteor.call("searchBitly", function(error, result) { 
    console.log("search bitly called"); 
    return result;
  })
}, 20000);

Meteor.methods({
  searchBitly: function(){
    //Hotbits.remove({});
    // var accessToken = 06cc854f25b36aebb4a9fac685d880413d511967;
    var result = Meteor.http.call('GET',
      //'https://api-ssl.bitly.com/v3/search?access_token=06cc854f25b36aebb4a9fac685d880413d511967&query=walmart&limit=1'
      //'https://api-ssl.bitly.com/v3/realtime/clickrate?access_token=06cc854f25b36aebb4a9fac685d880413d511967&phrase=popchips'
      //'https://api-ssl.bitly.com/v3/realtime/bursting_phrases?access_token=06cc854f25b36aebb4a9fac685d880413d511967'
      'https://api-ssl.bitly.com/v3/realtime/hot_phrases?access_token=06cc854f25b36aebb4a9fac685d880413d511967'
      // {
      //   query: '/v3/search?access_token=06cc854f25b36aebb4a9fac685d880413d511967&query=obama&limit=10'
      // }
    )
    var linkData = result.data.data.phrases;
    for (var i = 0; i < linkData.length; i++) {
      var bitPhrase = linkData[i].phrase;
      var bitRate = linkData[i].rate;
      var date = new Date();
      var time = date.getTime();
      Hotbits.insert({
        phrase: bitPhrase,
        clickrate: bitRate,
        time: time
      })
      Bubhotbits.insert({
        phrase: bitPhrase,
        clickrate: bitRate,
        time: time
      })
    }
  }
})


    //   var bitTags = Hotbits.find({}, { sort: { time: -1, clickrate: -1 }, limit: 80 }).fetch();
      
    //   var bitTagsArray =[]; 
    //   for (var i = 0; i < bitTags.length; i++) {
    //       var phrase = bitTags[i]['phrase'];
    //       var clickrate = bitTags[i]['clickrate'];
    //       bitTagsArray.push([ clickrate, phrase ]);
    //   }

    //   for (var i = 0; i < bitTagsArray.length; i++) {
    //       var phrase = bitTagsArray[i][1];
    //       console.log(phrase);
    //       if (preDataSet[0] == null) {
    //           console.log('hi');
    //           preDataSet.push(bitTagsArray[i]);
    //       }
    //       for (var j = 0; j < preDataSet.length; j++) {
    //           var thisPhrase = preDataSet[j][1];
    //           if (phrase === thisPhrase) {
    //               preDataSet.splice(j, 1, bitTagsArray[i]);
    //           } else {
    //               preDataSet.push(bitTagsArray[i]);
    //           }
    //       }
    //   }

    //   //console.log(preDataSet);

    //   var datasetSort = [];

    //   for (var i = 0; i < preDataSet.length; i++) {
    //       if (datasetSort[0] == null) {
    //           datasetSort.push(preDataSet[i]);
    //       } else {
    //           for (var j = 0; j < datasetSort.length; j++) {
    //               var k = j-1;
    //               if (preDataSet[i][1] <= datasetSort[j][1]) {
    //                   datasetSort.splice(k, preDataSet[i]);
    //               } else {
    //                   datasetSort.push(preDataSet[i]);
    //               }
    //           }
    //       }
    //   }

    //   var dataset = [];
    //   for (var i = 0; i <= 25; i++) {
    //       dataset.push(datasetSort[i]);
    //   }
    //   return console.log(dataset);
//     }
//   }
// })


