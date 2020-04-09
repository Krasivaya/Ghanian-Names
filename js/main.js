// Declarations
let yearFull, year, month, day, century;
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let maleNames =  ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame','Kwame'];
let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama','Ama'];

// Submit event
document.querySelector('#submit').addEventListener('click', submit);

// Submit function
function submit(){

    // Get input values
    yearFull = document.querySelector('#year').value;
    year = yearFull.slice(2,4);
    month = document.querySelector('#month').value;
    day = document.querySelector('#day').value;

    // Calculate the day of the week
    century = yearFull.slice(0,2)
    dayOfWeek = parseInt(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

    // Get the gender value and Ghanian Name
    let getGender = document.querySelector('#gender').value;
    if(getGender == 'Male'){
        document.querySelector('#wait').style = 'display:none';
        document.querySelector('#female').style = 'display:none';
        document.querySelector('#male').style = 'display:block';
        document.querySelector('#maleName').textContent = maleNames[dayOfWeek]
        document.querySelector('#maleDay').textContent = daysOfWeek[dayOfWeek]
    }
    else if(getGender == 'Female'){
        document.querySelector('#wait').style = 'display:none';
        document.querySelector('#male').style = 'display:none';
        document.querySelector('#female').style = 'display:block';
        document.querySelector('#femaleName').textContent = femaleNames[dayOfWeek]
        document.querySelector('#femaleDay').textContent = daysOfWeek[dayOfWeek]
    }

    // Validation for year
        // For year
        if(yearFull <= 0){
            return document.querySelector('#yearError').style = 'display:block';
        }
        else{
            document.querySelector('#yearError').style = 'display:none';
        }

        // For month
        if(month <= 0 || month > 12){
            return document.querySelector('#monthError').style = 'display:block';
        }
        else{
            document.querySelector('#monthError').style = 'display:none';
        }

        // For day
        if(day <= 0 || day > 31){
            return document.querySelector('#dayError').style = 'display:block';
        }
        else{
            document.querySelector('#dayError').style = 'display:none';
        }

        // For gender
        if(getGender == 'Choose a gender'){
            document.querySelector('#genderError').style = 'display:block';
        }
        else{
            document.querySelector('#genderError').style = 'display:none';
        }
}