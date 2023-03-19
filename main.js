function findWords(s,a){
    for(let i = 0; i < a.length; i++){
        let q = s.search(a[i])
        if(q!=-1){
            return('Matched dog-name')
        }
    }
    return('No Matches')
}
console.log(findWords('the brave knight saved the princess from the dragon',['minnie','rex','fee','princess']))
console.log(findWords('the brave knight saved the dawg from the dragon',['minnie','rex','fee','princess']))


function replaceEvenIndexes(a){
    for(let i = 0; i < a.length; i+=2){
        a[i]="Even index"
    }
    return(a)
}
console.log(replaceEvenIndexes([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2]))