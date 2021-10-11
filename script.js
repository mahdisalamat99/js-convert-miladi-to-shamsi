function shamsiDate(year,month,day){
    const normalMonthArr = [31,28,31,30,31,30,31,31,30,31,30,31];
    const kabiseMonthArr = [31,29,31,30,31,30,31,31,30,31,30,31];
     let totalDay = 0; 
     let sMonth = 0;
     let sDay = 0;
     let sYear = 0;
     for (let i = 0 ; i < month  ; i++ ){
         totalDay += kabiseDetector(year) ? kabiseMonthArr[i] : normalMonthArr[i];
     }

     

     totalDay += day;

     if (totalDay >79){
         totalDay -= 79;
         if(totalDay <= 186){
             if(totalDay % 31 ===0){
                 sMonth = totalDay / 31;
                 sDay = 31;
             } else {
                 sMonth = Math.floor(totalDay / 31) +1 ;
                 sDay = totalDay %31;
             }
         }else {
             totalDay -= 186;
             if (totalDay %30 ===0){
                 sMonth = totalDay / 30+6;
                 sDay = 30;
             } else {
                 sMonth = Math.floor(totalDay / 30) +7;
                 sDay = totalDay %30 ;
             }
         }
         sYear = year - 621;
     } else {
         let ekhtelaf = kabiseDetector(year -1) ? 11 :10;
         totalDay += ekhtelaf;
         if ( totalDay %30 === 0){
             sMonth = totalDay / 30 + 9;
             sDay = 30 ;
         } else {
             sMonth = Math.floor(totalDay / 30) + 10;
             sDay = totalDay % 30 ;
         }
         sYear = year -622
     }
     return[sYear, sMonth,sDay]
}


function  kabiseDetector (input) {
    if (
        (input % 100 === 0 && input % 400 === 0) ||
        (input % 100 !== 0 && input % 4 === 0)
    ){
        return true;
    } else {
        return false;
    }
}


function convert (e){
    let date = document.getElementById("date").value;
    let dateArr = date.split("-");
    console.log(dateArr);

    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    year =  parseInt(year)
    month =parseInt(month);
    day =parseInt(day);

    let shamsiDateArr = shamsiDate (year, month,day);
    document.getElementById("res").innerHTML =
    shamsiDateArr[2] +" " + persianMonthName(shamsiDateArr[1]) + "  ماه " + shamsiDateArr[0];
}

function persianMonthName(shamsiMonth) {
    switch (shamsiMonth){
        case 1 :
            return "فروردین";
        case 2 :
            return "اردیبهشت";
        case 3 :
            return "خرداد";
        case 4 :
            return "تیر";
        case 5 :
            return "مرداد";
        case 6 :
            return "شهریور";
        case 7 :
            return "مهر";
        case 8 :
            return "آبان";
        case 9 :
            return "آذر";
        case 10 :
            return "دی";
        case 11 :
            return "بهمن";
        case 12 :
            return "اسفند";
    }
}