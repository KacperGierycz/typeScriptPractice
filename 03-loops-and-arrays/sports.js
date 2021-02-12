var sports = ['golf', 'sprint', 'tenis', 'swimming'];
/*
for(let i=0;i<sports.length;i++){
    console.log(sports[i]);
}
*/
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var n = sports_1[_i];
    if (n == 'swimming') {
        console.log(n + 'is mine vaworite sport!');
    }
    else {
        console.log(n);
    }
}
