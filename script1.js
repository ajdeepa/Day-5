//A.Print odd numbers in an array
//Anonymous function
var temp=[];
var odd=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//IIFE Function
var temp=[];
 (function odd(arr)
 {
   for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            temp.push(arr[i]);
        }
    }
    console.log(temp);
})
([1,2,3,4,5,6,7,8,9,10]);

//C.Sum of All numbers in array
//Anonymous function
var res=function(arr){
    var temp=[];
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        temp.push(arr[i]);
    }
    return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9,10]));
//IIFE function
(function res(arr){
    var temp=[];
    var sum=0
      for(var i=0;i<arr.length;i++){
          sum=sum+arr[i];
             temp.push (arr[i]);
          }
      console.log(sum);
  })
  ([1,2,3,4,5,6,7,8,9,10]);

  //B.Convert all the strings to title caps in a string array
  //Anonymous function
  var titlecaps=function(str){
    var sentence=str.toLowerCase().split(" ");
    for(var i=0;i<sentence.length;i++){
        sentence[i]=sentence[i].charAt(0).toUpperCase()+sentence[i].slice(1);
    }
    return sentence.join(" ");
  }
console.log(titlecaps("WELCOME TO GUVI"));

//IIFE function
(function titlecaps(str){
    var sentence=str.toLowerCase().split(" ");
    for(var i=0;i<sentence.length;i++){
        sentence[i]=sentence[i].charAt(0).toUpperCase()+sentence[i].slice(1);
    }
    console.log(sentence.join(" "))
})
(titlecaps("WELCOME TO GUVI"));

//D.Return all the Prime Numbers in an array
//Anonymous function
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var prime=function(num){
    for(var i=2;num>i;i++){
        if(num%i==0){
            return false;
        }
    }
    return num>1;
}
console.log(arr.filter(prime));
// //IIFE function
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
(function prime(num){
for(var i=2;num>i;i++){
    if(num%i==0){
        return false;
    }
}
return num>1
console.log(arr.filter(prime));
})
(prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

//e.Return all the Palindroms in an array
//Anonymous function
var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))

//IIFE Function
(function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);


//Arrow Function:
//a.print odd numbers in an array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var odd = arr.filter((number) => number % 2 != 0)

console.log(odd) 

//b.convert all the strings to title caps in a string array

arr = ["WELCOME", "TO", "GUVI"]

var title = arr.map((string) => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase())

console.log(title)

//c.Sum of All numbers in an array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var sum = arr.reduce((total, number) => total += number , 0)

console.log(sum) 

//d.return All the prime numbers in an array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var prime = arr.filter((number) => {
    if (number == 1) {
        return false;
    }else if (number == 2) {
        return true;
    }else{
        for (var i = 2;i < number; i++){
            if (number % i == 0){
                return false;
            }
        }
    }
    return true;
});

console.log(prime)

//e.Return All the palindromes in an array
arr = ["Eye","guvi","madam","Geek"];

var palindrome = arr.filter((string) => {
    var s = string.toLowerCase();
    var count;
    if (s.length % 2 == 0) {
		count = (s.length) / 2;
	}
    if (s.length == 1){
        return true;
    }else{
        count = (s.length -1) / 2;
    }
    for (let i = 0; i < count; i++) {
        if (s[i] != s[s.length - i -1]){
            return false;
        }
    }
    return true;
})

console.log(palindrome) 





