// Bit.ly accees token - 

// 06cc854f25b36aebb4a9fac685d880413d511967

// http://127.0.0.1:3000/
// new way to express your point
// Client ID: eb827c160a0ea7808d3b46ca0c4ae5f4574871ef
// Client Secret: 9e9871d1366e87768fd4daf25165a8f0073de83a

//     var result = Meteor.http.call("GET", 
//       'https://api.twitter.com/1.1/statuses/home_timeline.json',
//       {
//         headers: {
//           Authorization : 'OAuth oauth_consumer_key="FpJhBU4rgGywYpbV2ADzg"' + ', ' + 'oauth_nonce=' + '"' + oauth_nonce + '"' + ', ' + 'oauth_signature=' + '"' + oauth_signature + '"' + ', ' + 'oauth_signature_method="HMAC-SHA1"' + ', ' + 'oauth_timestamp=' + '"' + oauth_timestamp + '"' + ', ' + 'oauth_token=' + '"' + oauth_token + '"' + ', ' + 'oauth_version="1.0"'
//         }
//       }
//     );


Meteor.call("searchBitly", function(error, result) {
  console.log("search bitly called"); 
  // var data = result.data;
  // var dataMap = _.map
  return result;
});

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
    var bitPhrase = linkData[0].phrase;
    var bitRate = linkData[0].rate;
    var bitGhashes = linkData[0].ghashes[3];
    // var linkData = result.data.data.results;
    console.log(bitGhashes);
    console.log(bitPhrase);
    console.log(bitRate);
  }
})


