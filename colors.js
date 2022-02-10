function colorPatternTime(arr){
    let count = 0;
    for( let i = 1 ; i < arr.length; i++){
        if (arr[i-1]!=arr[i]){
            count ++;
        }
    }
    console.log(count+arr.length*2);
}
colorPatternTime(["Red"]);
colorPatternTime(["Red", "Yellow", "Green", "Blue"])
colorPatternTime(["Red", "Blue", "Red", "Blue", "Red"]);
colorPatternTime(["Blue", "Blue", "Blue", "Red", "Red", "Red"]);






