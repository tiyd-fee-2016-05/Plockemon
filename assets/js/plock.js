// $(function() {
//   'use strict';

$(document).ready(function() {

$('.my-reco').on('click', function() {
    $('.reco-content').css('display', 'block');
    $('.user-content').css('display', 'none');
    $('.my-list').css({ opacity: 0.5 });
    $('.my-reco').css({ opacity: 1 });
    console.log('Reco clickkkk');
  });

$('.my-list').on('click', function() {
    $('.user-content').css('display', 'block');
    $('.reco-content').css('display', 'none');
    $('.my-reco').css({ opacity: 0.5 });
    $('.my-list').css({ opacity: 1 });
    console.log('List clickkkk');
});
});

// ----

// https://plockemon.herokuapp.com
//   /links
//   /links/recommended
//
// GET /links
// POST /links
// GET /links/recommended
// POST /links/recommended
// DELETE /links (optional)
//----

// GET /links /ajax jQuery call

// $( function () {
//   "use strict";
//   $('.user-login').on('submit', function (e) {
//     e.preventDefault();
// //       $('.startingTab').css('display', 'none');
//     var plockUser = $("input.username").val();
// //      var plockPassword = $('.passwordInfo[name="password"]').val();
// //      var JSONurl = 'http://8cc094dc.ngrok.io/my_bookmarks';
//   console.log(plockUser);
//   $.ajax({
//     dataType: 'json',
//     method: 'get',
//     url: "https://plockemon.herokuapp.com/"+"plockUser" + "/links" , //link to the API they created
//       beforeSend: function(xhr) {
//       xhr.setRequestHeader('Authorization:', (plockUser ));
// //       console.log("success");
//
//     },
//       success: function(data) {
//       console.log(data);
//   }
//   }
//   );
//   });
//   });

$('#travis').click(function(){
//   e.preventDefault();
//   var userlinks = $('.user-links');
console.log('test of login button');
  $.ajax({
    method: 'get', //this is a GET git request
    dataType: 'json',
    url: "https://plockemon.herokuapp.com/links", //link to the API they created
    beforeSend: function (xhr) {
    xhr.setRequestHeader("Authorization", "travisjohnson");//takes the username and authorizes it
      console.log('this works');
  },
  success: function (link) {
    for (var i = 0; i < link.length; i++){
      var titleList = (link[i].title);
      var urlList = (link[i].URL);
      var descList = (link[i].description);
      var rbList = (link[i].recommended_by_id);
    };
    $('.listTitle').append("Title: " + titleList);
    $('.listUrl').append("URL: " + urlList);
    $('.listDesc').append("Description: " + descList);
    $('.listRb').append("Recommended By: " + rbList);

  console.log(link);
}
  });
});
// });



// POST /links /ajax jQuery call
//target "add bookmark" button
// $.ajax({
//   method: 'POST', // The HTTP method we are using
//   url: '/links/recommended', // The URL we are sending data to
//   contentType: 'application/json', // What we are sending as a request
//   dataType: 'json' // What we are expecting as a response
//   // data: JSON.stringify({ url: ('.url'), title: ('.title'), desc: ('.desc') })
//   beforeSend: function (xhr) {
//   xhr.setRequestHeader('Authorization', 'travisjohnson');
// } success: function( msg ) {
//   alert( "Data Saved: " + msg );
// });
// });




// $(document).ready(function () {
//   $('.login-button').click(function () {
//     var showData = $('#show-data');
//
//     $.getJSON('activity.json', function (data) {    //url, data, success
//       console.log(data);
//
//       var items = data.items.map(function (item) {
//         return item.key + ': ' + item.value;
//       });
//
//       showData.empty();
//
//       if (items.length) {
//         var content = '<li>' + items.join('</li><li>') + '</li>';
//         var list = $('<ul />').html(content);
//         showData.append(list);
//       }
//     });
//
//     showData.text('Loading the JSON file.');
//   });
// });
//
// // Success looks like this:
// // function success(data) {
// //   // do something with data, which is an object
// // }
//
// $.ajax({
//   dataType: 'json',
//   url: url,
//   data: data,
//   success: success
// });

//-------------------

// From Octocat JS:
// $(function () {
//
//   $('.username').on('submit', function (e) {
//     e.preventDefault();
//
//     var ghLogin = $('input[name="gh-login"]').val();
//     $.getJSON('https://api.github.com/users/' + ghLogin)
//       .done(showUser)
//       .fail(showError);
//   });
//
//
//   $.ajax({
//     dataType: 'json',
//     url: url,
//     data: data,
//     success: success
//   });
//
// .innerHTML
//
//
//
//
//
//   function showUser(user) {
//     show('gh-user-template', user);
//   }
//
//   function showError(req, status, err) {
//     err = err || {};
//     err.message = err.message || status;
//     console.log(err);
//     show('gh-error-template', { message: err });
//   }
//
//   function show(template, model) {
//     var fn = _.template($('#' + template).html(), { variable: 'm' });
//     $('.user-info').html(fn(model));
//   }
//
// });
//----------------------------------



//When user inputs their user name stored links will appear as well as their current saved links.


  //The information should show the title, url, and description of said links being saved.


  //A button should be mapped to add the links and populate the information.

//   $(document).ready(function(){
//
//     $("#username-submit").click(function(){
//         $.getJSON(octocat.json, {}, function(data) {
//             var $ul = $('.user-links')
//             $.each(data, function(idx, item){
//                 $ul.append('<li style="color: ' + m.company + '">' + m.name + '-' + item['class'] +'</li>')
//             })
//         });
//     });
// });





// var submit = $('ul.user-links');
//
// $('button.username-submit').click(function(){
//   $.ajax({
//     type:'GET',
//     dataType: 'json'
//     // success: function(data)
//       $.each(data, function(index, item) {
//         $.each(item, function(key, value){
//           submit.append(key + ':' + value + '</br>')
//         });
//         submit.append('<br></br>')
//       });
//     }
//   });
//
// })
