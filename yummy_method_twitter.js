// Meteor.call("checkTwitter", function(error, result) {
//   console.log("check twitter called"); 
//   // return result.data; 
//   return result;
// });

//>>>>>>>>>>>> HOME TIME LINE <<<<<<<<<<<<<<<<<<<<<<<<

// Meteor.methods({
//   checkTwitter: function() {
//     var oauthNonce = function (m) {
//       var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       for (var i=0; i < m; i++) { 
//         s += r.charAt(Math.floor(Math.random()*r.length)); 
//       }
//       console.log(s);
//       return s;
//     };

//     var userObj = Meteor.users.find(Meteor.user()).fetch();
//     // console.log(userObj);

//     var current_user_img = userObj[0]['services']['twitter']['profile_image_url'];

//     var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
//     console.log('i am the url' + url);
//     // var params = 'since_id=' + lastweetid;

//     // this.unblock();
//     var oauth_consumer_key = 'FpJhBU4rgGywYpbV2ADzg'; //specific to yummyshow app
//     var oauth_nonce = oauthNonce(32);
//     var oauth_timestamp = Math.floor((new Date).getTime()/1000);
//     var oauth_token = userObj[0]['services']['twitter']['accessToken'];
//     // var filter = "mongodb";
//     console.log("i am the access token    " + oauth_token);

//     var oauth_sign_base = ('oauth_consumer_key=FpJhBU4rgGywYpbV2ADzg&oauth_nonce=' + oauth_nonce + '&oauth_signature_method=HMAC-SHA1&oauth_timestamp=' + oauth_timestamp + '&oauth_token=' + oauth_token + '&oauth_version=1.0');
//     console.log('i am signbase' + '  ' + oauth_sign_base);

//     var percentEncode = function (s) {
//       if (s == null) {
//         return "";
//       }
//       if (s instanceof Array) {
//           var e = "";
//           for (var i = 0; i < s.length; ++s) {
//               if (e != "") e += '&';
//               e += OAuth.percentEncode(s[i]);
//           }
//           return e;
//       }
//       s = encodeURIComponent(s);
    
//       s = s.replace(/\!/g, "%21");
//       s = s.replace(/\*/g, "%2A");
//       s = s.replace(/\'/g, "%27");
//       s = s.replace(/\(/g, "%28");
//       s = s.replace(/\)/g, "%29");
//       return s;
//     }

//     var encodeSign = ('GET' + '&' + percentEncode(url) + '&' + percentEncode(oauth_sign_base));
//     console.log('I am the basestring   ' + encodeSign);

//     var consume_broadcast = 'CTvS7WCeglImaoaHCb8FK9FAeSadlqCgEzHE88oY'; //specific to yummyshow app
//     var oauth_token_broadcast = userObj[0]['services']['twitter']['accessTokenSecret'];
//     var signkey = (percentEncode(consume_broadcast) + '&' + percentEncode(oauth_token_broadcast));
//     console.log('I am the signkey  ' + signkey);

//     var rawCalcSign = (encodeSign + signkey);
//     console.log('I am 64 bit secure hash   ' + rawCalcSign);

//     var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
//     var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
//     var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

//     function safe_add(x, y) {
//       var lsw = (x & 0xFFFF) + (y & 0xFFFF);
//       var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
//       return (msw << 16) | (lsw & 0xFFFF);
//     }

//     function rol(num, cnt) {
//       return (num << cnt) | (num >>> (32 - cnt));
//     }

//     function sha1_ft(t, b, c, d) {
//       if(t < 20) return (b & c) | ((~b) & d);
//       if(t < 40) return b ^ c ^ d;
//       if(t < 60) return (b & c) | (b & d) | (c & d);
//       return b ^ c ^ d;
//     }

//     function sha1_kt(t) {
//       return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
//              (t < 60) ? -1894007588 : -899497514;
//     }

//     function str2binb(str) {
//       var bin = Array();
//       var mask = (1 << chrsz) - 1;
//       for(var i = 0; i < str.length * chrsz; i += chrsz)
//         bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
//       return bin;
//     }

//     function binb2str(bin){
//       var str = "";
//       var mask = (1 << chrsz) - 1;
//       for(var i = 0; i < bin.length * 32; i += chrsz)
//         str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
//       return str;
//     }

//     function binb2hex(binarray) {
//       var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
//       var str = "";
//       for(var i = 0; i < binarray.length * 4; i++)
//       {
//         str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
//                hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
//       }
//       return str;
//     }

//     function core_sha1(x, len) {
//       x[len >> 5] |= 0x80 << (24 - len % 32);
//       x[((len + 64 >> 9) << 4) + 15] = len;

//       var w = Array(80);
//       var a =  1732584193;
//       var b = -271733879;
//       var c = -1732584194;
//       var d =  271733878;
//       var e = -1009589776;

//       for(var i = 0; i < x.length; i += 16) {
//         var olda = a;
//         var oldb = b;
//         var oldc = c;
//         var oldd = d;
//         var olde = e;

//         for(var j = 0; j < 80; j++) {
//           if(j < 16) w[j] = x[i + j];
//           else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
//           var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
//                            safe_add(safe_add(e, w[j]), sha1_kt(j)));
//           e = d;
//           d = c;
//           c = rol(b, 30);
//           b = a;
//           a = t;
//         }

//         a = safe_add(a, olda);
//         b = safe_add(b, oldb);
//         c = safe_add(c, oldc);
//         d = safe_add(d, oldd);
//         e = safe_add(e, olde);
//       }
//       return Array(a, b, c, d, e);
//     }

//     function core_hmac_sha1(key, data) {
//       var bkey = str2binb(key);
//       if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

//       var ipad = Array(16), opad = Array(16);
//       for(var i = 0; i < 16; i++) {
//         ipad[i] = bkey[i] ^ 0x36363636;
//         opad[i] = bkey[i] ^ 0x5C5C5C5C;
//       }

//       var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
//       return core_sha1(opad.concat(hash), 512 + 160);
//     }

//     function binb2b64(binarray) {
//       var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//       var str = "";
//       for(var i = 0; i < binarray.length * 4; i += 3) {
//         var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
//                     | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
//                     |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
//         for(var j = 0; j < 4; j++) {
//           if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
//           else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
//         }
//       }
//       return str;
//     }

//     function hex_sha1(s){
//       return binb2hex(core_sha1(str2binb(s),s.length * chrsz));
//     }

//     function str_sha1(s){
//       return binb2str(core_sha1(str2binb(s),s.length * chrsz));
//     }

//     function hex_hmac_sha1(key, data){ 
//       return binb2hex(core_hmac_sha1(key, data));
//     }

//     function str_hmac_sha1(key, data){ 
//       return binb2str(core_hmac_sha1(key, data));
//     }

//     function b64_sha1(s) {
//       return binb2b64(core_sha1(str2binb(s),s.length * chrsz));
//     }

//     function b64_hmac_sha1(key, data) { 
//       return binb2b64(core_hmac_sha1(key, data));
//     }

//     function getOauthSignature(key, data) {
//       return b64_hmac_sha1(key, data); 
//     }

//     var percent_encode_signature = getOauthSignature(signkey, encodeSign);
//     console.log('i am the percent encoded signature    ' + percent_encode_signature);

//     var percent_plus = percent_encode_signature + '=';

//     var oauth_signature = percentEncode(percent_plus);
//     console.log('i am the oauth signature    ' + oauth_signature);

//     var result = Meteor.http.call("GET", 
//       'https://api.twitter.com/1.1/statuses/home_timeline.json',
//       {
//         headers: {
//           Authorization : 'OAuth oauth_consumer_key="FpJhBU4rgGywYpbV2ADzg"' + ', ' + 'oauth_nonce=' + '"' + oauth_nonce + '"' + ', ' + 'oauth_signature=' + '"' + oauth_signature + '"' + ', ' + 'oauth_signature_method="HMAC-SHA1"' + ', ' + 'oauth_timestamp=' + '"' + oauth_timestamp + '"' + ', ' + 'oauth_token=' + '"' + oauth_token + '"' + ', ' + 'oauth_version="1.0"'
//         }
//       }
//     );
//     console.log(result);
//     var tweets = result.data;
//     // var meteorId = Meteor.userId();
//     for (var i = 0; i < tweets.length; i++) {
//       tweet = tweets[i];
//       // var newTweetId = tweet['id'];
//       // console.log(newTweetId);
//       // var testTweetId = Tweets.find({}, {twitId : {$gt: oldTweetId}}).fetch()[0]['twitId'];
//       // var oldTweetId = newTweetId;
//       // console.log(testTweetId);
//       // console.log('hi just checking in');
//       // if (newTweetId > testTweetId || testTweetId == null) {
//       console.log('new tweet entering the database');
//         Tweets.insert({
//           meteorUser: Meteor.userId(),
//           message: tweet['text'],
//           twitId: tweet['id'],
//           name: tweet['user']['name'],
//           screenName: tweet['user']['screen_name'],
//           time: tweet['created_at'],
//           profileImg: tweet['user']['profile_image_url'],
//           backImg: tweet['user']['profile_background_image_url'],
//           followers: tweet['user']['followers_count'],
//           listed: tweet['user']['listed_count'],
//           statuses: tweet['user']['statuses_count'],
//           yummy_score: Math.round(((tweet['user']['listed_count']/tweet['user']['statuses_count']) * ((tweet['user']['followers_count']/tweet['user']['statuses_count'])))*100),
//           tasty_score: Math.round((tweet['user']['followers_count']/tweet['user']['statuses_count'])*100),
//           yumyum_score: Math.round(Math.round((tweet['user']['followers_count']/tweet['user']['statuses_count'])*100)/(Math.round(((tweet['user']['listed_count']/tweet['user']['statuses_count']) * ((tweet['user']['followers_count']/tweet['user']['statuses_count'])))*100))),
//           hash: tweet['entities']['hashtags'],
//           userMentions: tweet['entities']['user_mentions'],
//           twitterURL: "https://twitter.com/" + tweet['user']['screen_name'],
//           urls: tweet['entities']['urls']
//         });
//       // }
//     }
//     return result;
//   }
// })


//>>>>>>>>>>>>>>>> STREAMING FILTER <<<<<<<<<<<<<<<<<<

Meteor.methods({
  checkTwitter: function() {
    var oauthNonce = function (m) {
      var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i=0; i < m; i++) { 
        s += r.charAt(Math.floor(Math.random()*r.length)); 
      }
      console.log(s);
      return s;
    };

    var userObj = Meteor.users.find(Meteor.user()).fetch();
    console.log(userObj);

    // var current_user_img = userObj[0]['services']['twitter']['profile_image_url'];

    var url = 'https://stream.twitter.com/1.1/statuses/filter.json';
    console.log('i am the url' + url);
    // var params = 'since_id=' + lastweetid;

    // this.unblock();
    var oauth_consumer_key = 'FpJhBU4rgGywYpbV2ADzg'; //specific to yummyshow app
    var oauth_nonce = oauthNonce(32);
    var oauth_timestamp = Math.floor((new Date).getTime()/1000);
    var oauth_token = userObj[0]['services']['twitter']['accessToken'];
    // var filter = "mongodb";
    console.log("i am the access token    " + oauth_token);

    var oauth_sign_base = ('oauth_consumer_key=FpJhBU4rgGywYpbV2ADzg&oauth_nonce=' + oauth_nonce + '&oauth_signature_method=HMAC-SHA1&oauth_timestamp=' + oauth_timestamp + '&oauth_token=' + oauth_token + '&oauth_version=1.0');
    console.log('i am signbase' + '  ' + oauth_sign_base);

    var percentEncode = function (s) {
      if (s == null) {
        return "";
      }
      if (s instanceof Array) {
          var e = "";
          for (var i = 0; i < s.length; ++s) {
              if (e != "") e += '&';
              e += OAuth.percentEncode(s[i]);
          }
          return e;
      }
      s = encodeURIComponent(s);
    
      s = s.replace(/\!/g, "%21");
      s = s.replace(/\*/g, "%2A");
      s = s.replace(/\'/g, "%27");
      s = s.replace(/\(/g, "%28");
      s = s.replace(/\)/g, "%29");
      return s;
    }

    var encodeSign = ('POST' + '&' + percentEncode(url) + '&' + percentEncode(oauth_sign_base));
    console.log('I am the basestring   ' + encodeSign);

    var consume_broadcast = 'CTvS7WCeglImaoaHCb8FK9FAeSadlqCgEzHE88oY'; //specific to yummyshow app
    var oauth_token_broadcast = userObj[0]['services']['twitter']['accessTokenSecret'];
    var signkey = (percentEncode(consume_broadcast) + '&' + percentEncode(oauth_token_broadcast));
    console.log('I am the signkey  ' + signkey);

    var rawCalcSign = (encodeSign + signkey);
    console.log('I am 64 bit secure hash   ' + rawCalcSign);

    var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
    var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

    function safe_add(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    }

    function rol(num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt));
    }

    function sha1_ft(t, b, c, d) {
      if(t < 20) return (b & c) | ((~b) & d);
      if(t < 40) return b ^ c ^ d;
      if(t < 60) return (b & c) | (b & d) | (c & d);
      return b ^ c ^ d;
    }

    function sha1_kt(t) {
      return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
             (t < 60) ? -1894007588 : -899497514;
    }

    function str2binb(str) {
      var bin = Array();
      var mask = (1 << chrsz) - 1;
      for(var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
      return bin;
    }

    function binb2str(bin){
      var str = "";
      var mask = (1 << chrsz) - 1;
      for(var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
      return str;
    }

    function binb2hex(binarray) {
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var str = "";
      for(var i = 0; i < binarray.length * 4; i++)
      {
        str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
               hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
      }
      return str;
    }

    function core_sha1(x, len) {
      x[len >> 5] |= 0x80 << (24 - len % 32);
      x[((len + 64 >> 9) << 4) + 15] = len;

      var w = Array(80);
      var a =  1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d =  271733878;
      var e = -1009589776;

      for(var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;

        for(var j = 0; j < 80; j++) {
          if(j < 16) w[j] = x[i + j];
          else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
          var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                           safe_add(safe_add(e, w[j]), sha1_kt(j)));
          e = d;
          d = c;
          c = rol(b, 30);
          b = a;
          a = t;
        }

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
      }
      return Array(a, b, c, d, e);
    }

    function core_hmac_sha1(key, data) {
      var bkey = str2binb(key);
      if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

      var ipad = Array(16), opad = Array(16);
      for(var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
      }

      var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
      return core_sha1(opad.concat(hash), 512 + 160);
    }

    function binb2b64(binarray) {
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var str = "";
      for(var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                    | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                    |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
        for(var j = 0; j < 4; j++) {
          if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
          else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
        }
      }
      return str;
    }

    function hex_sha1(s){
      return binb2hex(core_sha1(str2binb(s),s.length * chrsz));
    }

    function str_sha1(s){
      return binb2str(core_sha1(str2binb(s),s.length * chrsz));
    }

    function hex_hmac_sha1(key, data){ 
      return binb2hex(core_hmac_sha1(key, data));
    }

    function str_hmac_sha1(key, data){ 
      return binb2str(core_hmac_sha1(key, data));
    }

    function b64_sha1(s) {
      return binb2b64(core_sha1(str2binb(s),s.length * chrsz));
    }

    function b64_hmac_sha1(key, data) { 
      return binb2b64(core_hmac_sha1(key, data));
    }

    function getOauthSignature(key, data) {
      return b64_hmac_sha1(key, data); 
    }

    var percent_encode_signature = getOauthSignature(signkey, encodeSign);
    console.log('i am the percent encoded signature    ' + percent_encode_signature);

    var percent_plus = percent_encode_signature + '=';

    var oauth_signature = percentEncode(percent_plus);
    console.log('i am the oauth signature    ' + oauth_signature);

    var result = Meteor.http.call("POST", 
      'https://stream.twitter.com/1.1/statuses/filter.json',
      {
        data: {
          data: 'track=mongodb'
        }
      }, 
      {
        headers: {
          Authorization : 'OAuth oauth_consumer_key="FpJhBU4rgGywYpbV2ADzg"' + ', ' + 'oauth_nonce=' + '"' + oauth_nonce + '"' + ', ' + 'oauth_signature=' + '"' + oauth_signature + '"' + ', ' + 'oauth_signature_method="HMAC-SHA1"' + ', ' + 'oauth_timestamp=' + '"' + oauth_timestamp + '"' + ', ' + 'oauth_token=' + '"' + oauth_token + '"' + ', ' + 'oauth_version="1.0"'
        }
      },
      function(error, result) {
        if (result.statusCode === 401) {
          console.log("this shit is WACK");
        }
      }
    );
    console.log(result);
    var tweets = result.data;
    // var meteorId = Meteor.userId();
    for (var i = 0; i < tweets.length; i++) {
      tweet = tweets[i];
      // var newTweetId = tweet['id'];
      // console.log(newTweetId);
      // var testTweetId = Tweets.find({}, {twitId : {$gt: oldTweetId}}).fetch()[0]['twitId'];
      // var oldTweetId = newTweetId;
      // console.log(testTweetId);
      // console.log('hi just checking in');
      // if (newTweetId > testTweetId || testTweetId == null) {
      console.log('new tweet entering the database');
        Tweets.insert({
          meteorUser: Meteor.userId(),
          message: tweet['text'],
          twitId: tweet['id'],
          name: tweet['user']['name'],
          screenName: tweet['user']['screen_name'],
          time: tweet['created_at'],
          profileImg: tweet['user']['profile_image_url'],
          backImg: tweet['user']['profile_background_image_url'],
          followers: tweet['user']['followers_count'],
          listed: tweet['user']['listed_count'],
          statuses: tweet['user']['statuses_count'],
          yummy_score: Math.round(((tweet['user']['listed_count']/tweet['user']['statuses_count']) * ((tweet['user']['followers_count']/tweet['user']['statuses_count'])))*100),
          tasty_score: Math.round((tweet['user']['followers_count']/tweet['user']['statuses_count'])*100),
          yumyum_score: Math.round(Math.round((tweet['user']['followers_count']/tweet['user']['statuses_count'])*100)/(Math.round(((tweet['user']['listed_count']/tweet['user']['statuses_count']) * ((tweet['user']['followers_count']/tweet['user']['statuses_count'])))*100))),
          hash: tweet['entities']['hashtags'],
          userMentions: tweet['entities']['user_mentions'],
          twitterURL: "https://twitter.com/" + tweet['user']['screen_name'],
          urls: tweet['entities']['urls']
        });
      // }
    }
    return result;
  }
})
