// custom js file

(function(){

    var app = new Vue({
        el: '#app',
        data: {
            // start the app with weather defined as false
            weather: false,
            // eventually has the date creation result
            dates: '*** here!',
            daysOf: ['Monday', 'Tuesday'],
            newTitle: 'This is a sunny icon/day',
            isActive: true
        },
        // Special function that vue.js provides, allows users to make a function call when vue instance created
        created: function () {
            this.createDates();
        },
        methods: {
            doAnAlert: function () {
                // refers to vue instance
            console.log(this)
        },
        // function returns each days of the week.
        // References number 1 as today, and 7 for the final day of the week
        getDayOfTheWeek: function (indexAddition) {
            // refers to the date object
            var date = new Date();
            // array of dayys
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            // current day reference
            var currentDay = date.getDay();

            // algorithm for infinite loop through the seven days in array
            function loop(n) {
                var foundDay;
                for (var i=0; i<n; i++) {
                    var pointer = (i + currentDay) % days.length;
                    foundDay = days[pointer]
                }
                // returns last day found result
                return foundDay
            }
            // returns the day result
            return loop(indexAddition)
        }, // Function ENDS

        // a vue method that uses the moment.js library to create dates
        createDates: function () {
            // datesCreated 'catch' array
            var datesCreated = [];
            var daysRequired = 7
            // loop to seven and push all days to the array in a string format
            for (var i = 0; i <= daysRequired; i++) {
                datesCreated.push( moment().add(i, 'days').format('Do MMMM') )
            }
            // assigning array data to the vue data object
            this.dates = datesCreated;
        }// createDates ENDS

    }, // methods END

});

    var temp = document.getElementById('temp').textContent;
    // var condition document.getElementById('condition');
    // var city document.getElementById('city');
    // var country document.getElementById('country');

    var today = new Date();
    // var date = document.getElementById('dayOneDate').textContent;


	function makeApiCallWeatherData () {

        function getTemp(response) {
            document.getElementById('temp').innerHTML = response.data.daily[0].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[0].temp.day);

            document.getElementById('dayOneTemp').innerHTML = response.data.daily[1].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[1].temp.day);

            document.getElementById('dayTwoTemp').innerHTML = response.data.daily[2].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[2].temp.day);

            document.getElementById('dayThreeTemp').innerHTML = response.data.daily[3].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[3].temp.day);

            document.getElementById('dayFourTemp').innerHTML = response.data.daily[4].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[4].temp.day);

            document.getElementById('dayFiveTemp').innerHTML = response.data.daily[5].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[5].temp.day);

            document.getElementById('daySixTemp').innerHTML = response.data.daily[6].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[6].temp.day);

            document.getElementById('daySevenTemp').innerHTML = response.data.daily[7].temp.day.toFixed(0) + '°C';
                console.log(response.data.daily[7].temp.day);
        }

        function getCondition(response) {
            console.log('working')
            document.getElementById('condition').innerHTML = response.data.daily[0].weather[0].description;
            console.log(response.data.daily[0].weather[0].description);

            document.getElementById('dayOneCon').innerHTML = response.data.daily[1].weather[0].description;
            console.log(response.data.daily[1].weather[0].description);

            document.getElementById('dayTwoCon').innerHTML = response.data.daily[2].weather[0].description;
            console.log(response.data.daily[2].weather[0].description);

            document.getElementById('dayThreeCon').innerHTML = response.data.daily[3].weather[0].description;
            console.log(response.data.daily[3].weather[0].description);

            document.getElementById('dayFourCon').innerHTML = response.data.daily[4].weather[0].description;
            console.log(response.data.daily[4].weather[0].description);

            document.getElementById('dayFiveCon').innerHTML = response.data.daily[5].weather[0].description;
            console.log(response.data.daily[5].weather[0].description);

            document.getElementById('daySixCon').innerHTML = response.data.daily[6].weather[0].description;
            console.log(response.data.daily[6].weather[0].description);

            document.getElementById('daySevenCon').innerHTML = response.data.daily[7].weather[0].description;
            console.log(response.data.daily[7].weather[0].description);
        }

        // function getDate(response){
        //     var tomorrow = new Date(today)
        //     var nextDate = new Date(today)
        //     var nextDate2 = new Date(today)
        //     var nextDate3 = new Date(today)
        //     var nextDate4 = new Date(today)
        //     var nextDate5 = new Date(today)
        //     var nextDate6 = new Date(today)
        //
        //     var options = { month: 'long', day: 'numeric' };
        //     tomorrow.setDate(tomorrow.getDate() + 1);
        //     nextDate.setDate(nextDate.getDate() + 2);
        //     nextDate2.setDate(nextDate2.getDate() + 3);
        //     nextDate3.setDate(nextDate3.getDate() + 4);
        //     nextDate4.setDate(nextDate4.getDate() + 5);
        //     nextDate5.setDate(nextDate5.getDate() + 6);
        //     nextDate6.setDate(nextDate6.getDate() + 7);
        //
        //     document.getElementById('dayOneDate').innerHTML = tomorrow.toLocaleDateString('en-US', options);
        //     console.log(tomorrow);
        //
        //     document.getElementById('dayTwoDate').innerHTML = nextDate.toLocaleDateString('en-US', options);
        //     console.log(nextDate);
        //
        //     document.getElementById('dayThreeDate').innerHTML = nextDate2.toLocaleDateString('en-US', options);
        //     console.log(nextDate2);
        //
        //     document.getElementById('dayFourDate').innerHTML = nextDate3.toLocaleDateString('en-US', options);
        //     console.log(nextDate3);
        //
        //     document.getElementById('dayFiveDate').innerHTML = nextDate4.toLocaleDateString('en-US', options);
        //     console.log(nextDate4);
        //
        //     document.getElementById('daySixDate').innerHTML = nextDate5.toLocaleDateString('en-US', options);
        //     console.log(nextDate5);
        //
        //     document.getElementById('daySevenDate').innerHTML = nextDate6.toLocaleDateString('en-US', options);
        //     console.log(nextDate6);
        // }

        // function getDay(response){
        //     var tomorrow = new Date(today)
        //     var nextDay = new Date(today)
        //     var nextDay2 = new Date(today)
        //     var nextDay3 = new Date(today)
        //     var nextDay4 = new Date(today)
        //     var nextDay5 = new Date(today)
        //     var nextDay6 = new Date(today)
        //
        //     var options = { weekday: 'long' };
        //     tomorrow.setDate(tomorrow.getDate() + 1);
        //     nextDay.setDate(nextDay.getDate() + 2);
        //     nextDay2.setDate(nextDay2.getDate() + 3);
        //     nextDay3.setDate(nextDay3.getDate() + 4);
        //     nextDay4.setDate(nextDay4.getDate() + 5);
        //     nextDay5.setDate(nextDay5.getDate() + 6);
        //     nextDay6.setDate(nextDay6.getDate() + 7);
        //
        //     document.getElementById('dayOneDay').innerHTML = tomorrow.toLocaleDateString('en-US', options);
        //     console.log(tomorrow);
        //
        //     document.getElementById('dayTwoDay').innerHTML = nextDay.toLocaleDateString('en-US', options);
        //     console.log(nextDay);
        //
        //     document.getElementById('dayThreeDay').innerHTML = nextDay2.toLocaleDateString('en-US', options);
        //     console.log(nextDay2);
        //
        //     document.getElementById('dayFourDay').innerHTML = nextDay3.toLocaleDateString('en-US', options);
        //     console.log(nextDay3);
        //
        //     document.getElementById('dayFiveDay').innerHTML = nextDay4.toLocaleDateString('en-US', options);
        //     console.log(nextDay4);
        //
        //     document.getElementById('daySixDay').innerHTML = nextDay5.toLocaleDateString('en-US', options);
        //     console.log(nextDay5);
        //
        //     document.getElementById('daySevenDay').innerHTML = nextDay6.toLocaleDateString('en-US', options);
        //     console.log(nextDay6);
        // }

        function getIcons(response) {
          for (var i = 0; i < 8; i++) {
            console.log(i);
            var iconCode = response.data.daily[i].weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            $(".icon" + i).html("<img src='" + iconUrl  + "'>");
            console.log(iconUrl);
          }
        }


        // GET request for remote image in node.js
		axios({
		  method: 'get',
			url: 'https://api.openweathermap.org/data/2.5/onecall?lat=-41.28666552&lon=174.772996908&exclude=hourly,minutely&appid=2d432bf9c5408e886ec81de39c82e329&units=metric'
		})
		.then(function (response) {
		  app.weather = response;

          getTemp(response);
          console.log('is this working')
          getCondition(response);
          // getDate(response);
          // getDay(response);
          getIcons(response);
		});
	} // function ENDS

		makeApiCallWeatherData();

})(); // iffe ENDS
