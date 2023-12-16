function iterateAndLogWithFor(n) {
    for (var i=0;i<=n;i++){
        if (i%2===0){
            console.log(i+ ' is even')}
        else 
                 console.log(i+ ' is odd')}
 
}
//
function iterateAndLogWithWhile(n) {
    var i=0
    while (i<n){
        i++
      if (i%2===0){
            console.log(i+ ' is even')}
        else 
                 console.log(i+ ' is odd')}}
//2
function reverseIterateAndLogWithFor(n) {
    for (var i=n;i>=0;i--){
        if (i%2===0){
            console.log(i+' is even')}
            else  
            console.log(i+' is odd')}} 
//
function reverseIterateAndLogWithWhile(n) {
    var i=n
    while (i>0){
        i--
        if (i%2===0){
            console.log(i+' is even')}
            else  
            console.log(i+' is odd')}}
//
function reverseIterateAndLogRecursively(n) {
    if ( n === 0){
        return
    }
    if( n % 2  === 0){
        console.log(n + " is even")}
    else {console.log(n +" is odd")
    }
    reverseIterateAndLogRecursively(n-1)
}
//3


