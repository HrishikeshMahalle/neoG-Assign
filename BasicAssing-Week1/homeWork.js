console.log("hello world")

//a to power b

function powerr(a,b)
{
    console.log(Math.pow(a,b));
}
powerr(2,3)

//Area of hexagon
function areaOfHexagon(a){
    let area = (3*Math.sqrt(3))/2 * Math.pow(a,2)
    console.log(Math.round(area*100)/100)
}
areaOfHexagon(10)

//NO-OF_words
function noOfWords(a)
{
    console.log(a.split(' ').length)
}
noOfWords("we are neogrammers")

//find Min
function findMin(...agrs)
{
    console.log(agrs.length)
    let min = agrs[0];
    for(let i =0;i<agrs.length;i++){
         min = Math.min(min,agrs[i])
        //console.log(agrs[i])
    }
    console.log(min)
    console.log(Math.min(...agrs))
}
findMin(3,5,9,1)

//findMax
function findMax(...agrs)
{
    console.log(agrs.length)
    let max = agrs[0];
    for(let i =0;i<agrs.length;i++){
         max = Math.max(max,agrs[i])
        //console.log(agrs[i])
    }
    console.log(max)
    console.log(Math.max(...agrs))
}

findMax(3,5,9,1)
 
//Array length

function arrayLength(args)
{
    console.log(args.length)
}
arrayLength([1,5,3,7,8])

//Return index of number

function indexOf(args,dex){
    // for(let i=0;i<args.length;i++)
    // {
    //     if(args[i] == dex)
    //         return i;

    // }
    // return "not found"

    return args.indexOf(dex)
}
let ans = indexOf([1,6,3,5,8,9], 3)
console.log(ans)


//replace a Number in array

function replaceNum(array,a,b)
{
    while(array.indexOf(a) != -1){
    let pos = array.indexOf(a)
    array[pos] = b;
}
console.log(array)
    
}
replaceNum([1,5,3,5,6,8], 5, 10)

function mergeArray(...num /* num,num1 */ ){
// let ans = [...num,...num1]
// console.log(ans)

// let ans2 = num.concat(num1)
// console.log(ans2)

//mergeArray
let mergedArray = [];
num.forEach(array =>{
    mergedArray = mergedArray.concat(array)
})
console.log(mergedArray)
} 
mergeArray([1,3,5],[2,4,6])

// FindCharAT location

function findCharAt(char, a){
    console.log(...char[a])
}
findCharAt("neoGcamp", 4)

//To sort Array
function sortArray(arr)
{
    console.log(arr.sort((a,b)=>{return a-b}))
}

sortArray([100,83,32,9,45,61])


//capitalize first letter of each word in a sentence

function capWord(str){
//     let ans = str.split(' ');
//     ans.map((word) =>{
//         console.log( word[0].toUpperCase() + word.substr(1));
//     }).join(" ");
   console.log(str.charAt(0).toUpperCase() + str.slice(1))

return str.charAt(0).toUpperCase() + str.slice(1);
}
const str = "we are neoGrammers"

let caps = str.split(' ').map(capWord).join(' ')
console.log(caps)


 // Reverse char of each word of a sentence

 function reverseWord(sen){
   const words =  sen.split(' ')

   const ans = words.map(element => {
       return element.split('').reverse().join("")
   });
   return ans.join(" ")
 }
 let revAns = reverseWord('we are neoGrammers')
 console.log(revAns)


 // Shift char of a word

 function alfabeticShift(str,n){
    let arr = [];
    for(let i=0;i<str.length;i++)
    {
        arr.push(String.fromCharCode((str[i].charCodeAt() + n)));
    }
    let res = arr.join("").replace(/{/g,'a');;
    return res
 }

 const anslast = alfabeticShift("neogcamp",2)
 console.log(anslast)