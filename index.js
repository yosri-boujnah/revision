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
function weirdDivisionWithFor(n) {
    for (var i = 1;i<=n;i++){
        if (i %3===0){
            console.log('julia')
        }if (i %5===0){
            console.log('james')
        }if (i %3===0&&i%5===0){
            console.log('julia james')
        }
    }


}
//
function weirdDivisionWithWhile(n) {
var i=1 
    while (i<=n){
        i++
        
if (i %3===0){
            console.log('julia')
        }
        if (i %5===0){
            console.log('james')
        }
        if (i %3===0&&i%5===0){
            console.log('julia james')
        }
        
    }


}
//
function inverseWeirdDivisionRecursively(n) {
 if (n===0){
     return
 }
    if (n %3===0){
            console.log('julia')
        }
        if (n %5===0){
            console.log('james')
        }
        if (n %3===0&&n%5===0){
            console.log('julia james')
        }
        inverseWeirdDivisionRecursively(n-1) 

}
//4
function laughWithFor(number) {
var laugh=''
    for (var i=0;i<=number;i++){
        laugh=laugh+'ha'
    }
    return laugh

}
//
function laughWithWhile(number) {
var laugh=''
var i=0
    while(i<=number){
        i++
        laugh=laugh+'ha'
    }
 return laugh

}
//
function laughRecursively(number) {

    if (number===0){
        return ''
    } 
   return 'ha'+ laughRecursively(number-1)

}
//5