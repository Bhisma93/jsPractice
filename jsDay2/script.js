(function() {
    // Creating Hotel Obj
    var hotel = {
        name: 'King Bhishy\'s Pimpin Crib',
        roomRate: 500,
        discount: 15,
        offerPrice: function(){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };
    // Writing out name, rate, and special rate
        var hotelName, roomRate, specialRate; //declaring variables

        hotelName = document.getElementById('hotelName');   //creating elements
        roomRate = document.getElementById('roomRate');
        specialRate = document.getElementById('specialRate');

        hotelName.textContent = hotel.name;
        roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
        specialRate.textContent = '$' + hotel.offerPrice();

    // Write out expiry details for the offer
        var expiryMsg; //Expiry Message displayed to user
        var today; // Todays Date
        var elEnds; //The element that shows message about the offer ending

        function offerExpires(today){
            //Declare variables within the func for local scope
            var weekFromToday, day, date, month, year, dayNames, monthNames;
            //add 7 days time (added in milliseconds)
            weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            //create arrays to hold the names of days/month
            dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //collect the parts of the date to show on the page
            day = dayNames[weekFromToday.getDay()];
            date = weekFromToday.getDate();
            month = monthNames[weekFromToday.getMonth()];
            year = weekFromToday.getFullYear();
            //create the message
            expiryMsg = 'Offer expires next ';
            expiryMsg += day + '<br /> (' + date + ' ' + month + ' ' + year +')';
            return expiryMsg;
        }

        today = new Date(); // get todays date
        elEnds = document.getElementById('offerEnds');// get the offerEnds element
        elEnds.innerHTML = offerExpires(today);//Add the expiry message


//finish the immediately invoked func expression
}());
