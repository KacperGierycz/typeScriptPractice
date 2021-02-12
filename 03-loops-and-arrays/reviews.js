var reviews = [5, 4, 3.5, 2];
var total = 0;
for (var i = 0; i < 4; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("average" + average);
