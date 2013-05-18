

// Meteor.setInterval(function(){
//   Meteor.call("searchBitly", function(error, result) { 
//     console.log("search bitly called"); 
//     return result;
//   })
// }, 60000);

Meteor.methods({
  searchBitly: function(){
    console.log('i am in bitly');

    // var accessToken = 06cc854f25b36aebb4a9fac685d880413d511967;
    var result = Meteor.http.call('GET',
      //'https://api-ssl.bitly.com/v3/search?access_token=06cc854f25b36aebb4a9fac685d880413d511967&query=walmart&limit=1'
      //'https://api-ssl.bitly.com/v3/realtime/clickrate?access_token=06cc854f25b36aebb4a9fac685d880413d511967&phrase=popchips'
      'https://api-ssl.bitly.com/v3/realtime/bursting_phrases?access_token=06cc854f25b36aebb4a9fac685d880413d511967'
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
    }
  }
})


