//properly initialize angular app we write thi code
var foodieApp = angular.module('Grocery Shopping List App',['ngRoute']);//in parametres frst is name of app

//in this foodieapp var is used to config function means setup krna h routing k liye
//$routerprovider is parameter object type n already defined in angular
foodieApp.config(function ($routeProvider) {
  //here $routeprovider hv function named as when which is passing as objct
  //here '/' means agr domain hai
  $routeProvider
   .when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
  //here '/home' means domain/home eg-: www.youtube.com/home
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
  //id part in url is route parameter
  .when('/restaurant/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
  })
  .when('/about',{
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })
})
//http request k liye hum $http use krte h
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
    noofvotes: '460 Votes',
    id: 1,
  	cuisines: 'Modern Indian',
    url: 'Farzi Cafe',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Burgrill',
  	address: 'DSS 310, Sector 9, Panchkula',
  	location: 'Sector 9, Panchkula',
  	category: 'Quick Bites, Bar',
  	vote: '4.0',
    noofvotes: '360 Votes',
    id: 2,
  	cuisines: 'Burger,Fast Food,Beverages',
    url: 'Burgrill',
    cost: '500',
  	hours: '12 Noon to 11 PM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL31oTqn07dDzIPDaE32-C8wKPenINJXMPEf82g1jQY0PF5PL'
  },
  {
  	name: 'Uncle"s Chinese',
  	address: '3 & 5, A/10, Meera Garden Society, Lane 7, Off North Mai....',
  	location: 'Koregaon  Park',
  	category: 'Casual Dining, Bar',
  	vote: '4.0',
    noofvotes: '400 Votes',
    id: 3,
  	cuisines: 'Chinese, Thai',
    url: 'Uncle"s Chinese',
    cost: '700',
  	hours: '11:30 AM to 11 PM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f-_yzrJq4F042m-9qIfSr_Ye69ncgDK9aZxtjwOph7ExEGZcdQ'
  },
  {
  	name: 'Idlicious',
  	address: 'Cosmos Garden, Plot 16 and 17, P K Shroff Marg, Pancard Clubs Road, Baner, Pune',
  	location: 'Baner',
  	category: 'Quick Bites, Bar',
  	vote: '4.2',
    noofvotes: '400 Votes',
    id: 4,
  	cuisines: 'South Indian',
    url: 'Idlicious',
    cost: '250',
  	hours: '8:30 AM to 2:30 PM (Mon-Sat)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dY-UiYvGUz5HSy3ATyR-2mBU5YD2L5QMj4dVu7lIAIHqAXSjAQ'
  },
  {
  	name: 'Cream California',
  	address: '917/22, Opposite Hotel Roopali, FC Road, Pune',
  	location: 'FC Road',
  	category: 'Dessert Parlor',
  	vote: '4.2',
    noofvotes: '260 Votes',
    id: 5,
  	cuisines: 'Ice Cream, Desserts',
    url: 'Cream California',
    cost: '1000',
  	hours: '9 AM to 11:30 PM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9vqv4_9lvEhauSuO-_MdBG3Xyyd1-NI9rRLBnSQEOuy_E2kJjQ'
  },
  {
  	name: 'Taareef',
  	address: '1, Shyamal Apartments, Next to Ozone, ITI Road, Aundh, New Delhi',
  	location: 'Aundh',
  	category: 'Casual Dining',
  	vote: '3.9',
    noofvotes: '410 Votes',
    id: 6,
  	cuisines: 'North Indian, Street Food',
    url: 'Taareef',
    cost: '1200',
  	hours: '11:30 AM to 11 PM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B-V8kaL4n-LtvPDmfby_h7IP9HRlt68-XSYRWee5TQR2ORPWoQ'
  },
  {
  	name: 'Punjab Grill',
  	address: 'Level 2, Phoenix Market City, Pune Nagar Road. Pune, Viman Nagar, Pune',
  	location: 'Viman Nagar',
  	category: 'Casual Dining, Bar',
  	vote: '3.9',
    noofvotes: '300 Votes',
    id: 7,
  	cuisines: 'North Indian, Mughlai',
    bestDish:{
      name: 'Tamatar Da Shorba',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Cy5llfWlpMSojMB2PdikfAM0R8Hj-6RaG4uNhhbNiWFitOMgXA'
    },
    url: 'Punjab Grill',
    cost: '2200',
  	hours: '12 Noon to 11:45 PM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbes7ANT_Xphz2Zag7dkn-SrsNiXDWic56u4_toyWw6xXS8EF'
  },
  {
  	name: 'Chessiano Pizza',
  	address: 'Opposite Pantaloons, Senapati Bapat Road, Pune',
  	location: 'Senapati Bapat Road',
  	category: 'Quick Bites',
  	vote: '3.3',
    noofvotes: '460 Votes',
    id: 8,
  	cuisines: 'Pizza',
    url: 'Chessiano Pizza',
    cost: '800',
  	hours: '11 AM to 1 AM (Mon-Sun)',
  	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_TLf0yvTv4vaYBT93zC0a-HX7O2c7DzybqlMvpDbSfQxPXrxtA'


  }]
  // for( var i=0; i < restaurants.length; i++ ){
  //   if(restaurants[i].url == $routeParams.id)
  //   {
  //     $scope.restaurant = restaurants[i];
  //   }
  // }
	$scope.restaurant = restaurants[$routeParams.id - 1];
  $scope.ingredients = [];  // empty array
  $scope.getIngredients = function(url) {
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}' // upr jo function m url mila usko humn yhn add krdya
    $http({
    	'method': 'POST',   // hum kch bhej rhe h esl post
    	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
    	'headers': { // header is used to send extra info
    		'Authorization': 'Key e2759fa8b252401ca1ef8fc620f8f325', // api key
    		'Content-Type': 'application/json' // json format m h
    	},
    	'data': data,   // img url upr likha h vo data m hoga
    }).then(function (response) {  // 1st function is for success one and second isfor failure or error
      var list = response.data.outputs[0].data.concepts; // ingredients k list save krte h var m
        // var list = '';
        for (var i =0; i < list.length; i++) {
          $scope.ingredients.push(list[i].name) // this value goes to empty array
          //  list += '<div class="ingredient">' + ingredients[i].name + '</div>'
        }
        // console.log(list)
      // $('.ingredients').html(list);
      }, function (xhr) {
        console.log(xhr);
      });
}
$scope.groceries = [];
$scope.getGrocery = function(url) {
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
      $http({
        'method': 'POST',
        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
        'headers': {
          'Authorization': 'Key be3d9237f59a47baaade167c8679c0dd' ,
          //api generated by clarifai
          'Content-Type': 'application/json'
        },
        'data': data

      }).then(function (response) {
          var groceries = response.data.outputs[0].data.concepts;
          for (var i =0;i < groceries.length;i++) {
          $scope.groceries.push(groceries[i].name);
          //gives array the groceries
          }

         }, function (xhr) {
        console.log(xhr);
        });
$scope.showDone = function (event) {
//this function will show selected groceries
    var myid=event.target.id;
    angular.element(document.getElementById(myid)).toggleClass("done");
  };
}

// 		//								var x = document.getElementsByClassName("example");
// var i;
// for (i = 0; i < $scope.groceries.length; i++) {
//   //  x[i].style.backgroundColor = "red";
// }
// $scope.checkboxSel = function()
// {
// // 						if($('.check').checked)
// // 						{
// // 							$('.check').addClass('done');
// // 						}
// // 						else{
// // 							$('.check').removeClass('done')
// // 						}
// var ang= document.querySelector('input[type=checkbox]')
// .addClass('done'), {checked: true}
// //
// 	}


})





foodieApp.controller('loginController',function($scope,$location) {
        $scope.goToHome = function() {
        $location.url('home')
      }
 })


//controller funcn is used to create a controller
foodieApp.controller('mainController',function($scope,$routeParams) { //in frst parameter we give name of controller
//isk under controller jo krega vo likhte h
//$scope hmara model h daata store krta or data handle krta
// $scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
  noofvotes: '460 Votes',
  id: 1,
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Burgrill',
	address: 'DSS 310, Sector 9, Panchkula',
	location: 'Sector 9, Panchkula',
	category: 'Quick Bites, Bar',
	vote: '4.0',
  noofvotes: '360 Votes',
  id: 2,
	cuisines: 'Burger,Fast Food,Beverages',
	cost: '500',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL31oTqn07dDzIPDaE32-C8wKPenINJXMPEf82g1jQY0PF5PL'
},
{
	name: 'Uncle"s Chinese',
	address: '3 & 5, A/10, Meera Garden Society, Lane 7, Off North Mai....',
	location: 'Koregaon  Park',
	category: 'Casual Dining, Bar',
	vote: '4.0',
  noofvotes: '400 Votes',
  id: 3,
	cuisines: 'Chinese, Thai',
	cost: '700',
	hours: '11:30 AM to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f-_yzrJq4F042m-9qIfSr_Ye69ncgDK9aZxtjwOph7ExEGZcdQ'
},
{
	name: 'Idlicious',
	address: 'Cosmos Garden, Plot 16 and 17, P K Shroff Marg, Pancard Clubs Road, Baner, Pune',
	location: 'Baner',
	category: 'Quick Bites, Bar',
	vote: '4.2',
  noofvotes: '400 Votes',
  id: 4 ,
	cuisines: 'South Indian',
	cost: '250',
	hours: '8:30 AM to 2:30 PM (Mon-Sat)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dY-UiYvGUz5HSy3ATyR-2mBU5YD2L5QMj4dVu7lIAIHqAXSjAQ'
},
{
	name: 'Cream California',
	address: '917/22, Opposite Hotel Roopali, FC Road, Pune',
	location: 'FC Road',
	category: 'Dessert Parlor',
	vote: '4.2',
  noofvotes: '260 Votes',
  id: 5,
	cuisines: 'Ice Cream, Desserts',
	cost: '1000',
	hours: '9 AM to 11:30 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9vqv4_9lvEhauSuO-_MdBG3Xyyd1-NI9rRLBnSQEOuy_E2kJjQ'
},
{
	name: 'Taareef',
	address: '1, Shyamal Apartments, Next to Ozone, ITI Road, Aundh, New Delhi',
	location: 'Aundh',
	category: 'Casual Dining',
	vote: '3.9',
  noofvotes: '410 Votes',
  id: 6,
	cuisines: 'North Indian, Street Food',
	cost: '1200',
	hours: '11:30 AM to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B-V8kaL4n-LtvPDmfby_h7IP9HRlt68-XSYRWee5TQR2ORPWoQ'
},
{
	name: 'Punjab Grill',
	address: 'Level 2, Phoenix Market City, Pune Nagar Road. Pune, Viman Nagar, Pune',
	location: 'Viman Nagar',
	category: 'Casual Dining, Bar',
	vote: '3.9',
  noofvotes: '300 Votes',
  id: 7,
	cuisines: 'North Indian, Mughlai',
	cost: '2200',
	hours: '12 Noon to 11:45 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbes7ANT_Xphz2Zag7dkn-SrsNiXDWic56u4_toyWw6xXS8EF'
},
{
	name: 'Chessiano Pizza',
	address: 'Opposite Pantaloons, Senapati Bapat Road, Pune',
	location: 'Senapati Bapat Road',
	category: 'Quick Bites',
	vote: '3.3',
  noofvotes: '460 Votes',
  id: 8,
	cuisines: 'Pizza',
	cost: '800',
	hours: '11 AM to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_TLf0yvTv4vaYBT93zC0a-HX7O2c7DzybqlMvpDbSfQxPXrxtA'


}]
})





foodieApp.controller('aboutController',function($scope) {
  $scope.aboutimage= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWt32PAC20XzftkaDy1YHNWeTnzvy-c2DN3t_y3WxPXREcbWz';

})
