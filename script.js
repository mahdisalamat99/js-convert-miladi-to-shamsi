

function  kabiseDetector (input) {
    if (
        (input % 100 === 0 && input % 400 === 0) ||
        (input % 100 !== 0 && input % 4 === 0)
    ){
        return true;
    } else {
        return false
    }
}

function jDate(year,month,day){
    const monthArr = [31,28,31,30,31,30,31,31,30,31,30,31];
    const monthArrK = [31,29,31,30,31,30,31,31,30,31,30,31];
     let totalDay = 0,
     jMonth,
     jDay,
     jYear,
     for (let i = 0 ; i < month -1 ; i++ ){
         totalDay += kabiseDetector(year) ? monthArrK[i] : monthArr[i];
     }

     totalDay += day;

     if (totalDay >79){
         totalDay -= 79;
         if(totalDay <= 186){
             if(totalDay % 31 ===0){
                 jMonth = totalDay / 31;
                 jDay = 31;
             } else {
                 jMonth = Math.floor(totalDay / 31) +1 ;
                 jDay = totalDay %31;
                 console.log("here");
             }
         }else {
             totalDay -= 186;
             if (totalDay %30 ===0){
                 jMonth = totalDay / 30+6;
                 jDay = 30;
             } else {
                 jMonth = Math.floor(totalDay / 30) +7;
                 jDay = totalDay %30 ;
             }
         }
         jYear = year - 621;
     } else {
         let differ = kabiseDetector(year -1) ? 11 :10;
         totalDay += differ;
         if ( totalDay %30 === 0){
             jMonth = totalDay / 30 + 9;
             jDay = 30 ;
         } else {
             jMonth = Math.floor(totalDay / 30) + 10;
             jDay = totalDay % 30 ;
         }
         jYear = year -622
     }
     return[jYear, jMonth,jDay]
}

function convert (e){
    let value = document.getElementById("date").value;
    let [year, month, day] = value.split("-");
    year *=1;
    month *=1;
    day *=1;
    let jDateArr = jDate (year, month,day);
    document.getElementById("res").innerHTML =
    jDateArr[2] +
    " " +
    monthNameConvertor(jDateArr[1]) +
    "  ماه سال" + 
    jDateArr[0];
}

function monthNameConvertor(jMonth) {
    switch (jMonth){
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