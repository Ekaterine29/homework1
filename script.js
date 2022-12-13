


// let users=[
//     {username:'giorgi',status:false},
//     {username:'levani',status:false},
//     {username:'anna',status:true}
// ]

// for(let x of users)
// if (x.status==true){
//     console.log(x);
// }



// let array=[2,3,5,10,25,24,11,100,6,7,10]

// for(let x of array)
// if (x % 2 ==0){
//     console.log(x);
// }


// for (let x of array)
// if (x%2==1){
//     console.log(x);
// }





//  let array =[ [2,-3,5,10], [25,+24,-11,100], [-6,-7,10] ]
// for (let x of array)


// if (typeof [x]>0)
// {
//     console.log(x);
// }








// homework2
'use strict;'

// let  obj = {
//     berlin: 'germany',
//    tbilisi : 'georgia',
//    Kiev: 'ukraine'
//    }
//    for (let key in obj){
//     if (key=='tbilisi'){
//         console.log(key + ''+'is' + '' +obj.tbilisi);
//     }
//    }


// let array=[1,2,4,-1,-3,8,7,0,-5,18,12]
// for (let x of array)
// if ((x>0) && (x<10)){
//     console.log(x);
// }
    


// let i=5
// while (i<100){
//     console.log(i);i++
// }


// let array2=[1,2,3,4,5,6,7,8,9]
// for (let x of array2)
// if (x==5){
//     console.log('aris')
//     break
// }


// let x=6
// if (x==5){
//     console.log (x);}
//     else if (x==10){
//         console.log(x);
//     }
// else {console.log('error');}

// switch (x){
//     case (5):console.log(5);
//     break
//     case(10):console.log(10);
//     break
//     default:
//         console.log('error');
// }

// let array5=[1,2,3,7,6,9]
// for (let x of array5){
// if (x==7){
//     continue;}
//     console.log(x);
// }


// let array3=[1,2,3,4,5]
// let result=0;
// for (let i=0;i<array3.length;i++){
// result+=array3[i];}
// {
//     console.log(result);
// }

// let array4=[1,2,3,7,6,9]
// let sum=0;
// for (let item of array4){
//     sum+=item;
// }
// let result=sum/array4.length 

// console.log(result);







// homework3



// function sum(...numbers){
//     let numbersum=0;
//     for (let item of numbers)
//         {
//         numbersum+=item;
//     }

// return(numbersum);}

// let resultFunction=sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(resultFunction);





// let sumPositive=(numbers)  =>{
//     let sum=0;
  
//     for (let i=0; i<numbers.length ;++i){
//         if (numbers[i] >0) {
//          sum+=numbers[i];
//         }
//     }

// return(sum);}

// let result=sumPositive([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]);
// console.log(result);







// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
//   function printName(user){
//     if (user.isloggedin){
//         return user.firstname + ' ' + user.lastname;

//     }
//     return faulse;
//   }

//   let resultFunction=printName(user);
//   console.log(resultFunction);




// function getMax(...array){
// console.log(Math.max(...array));
// }

// getMax(80,20,5,100,150,250,8,3);




// let array=['html','css','python','javascript','bootstrap'];
// for (let item of array){
//     if (item.length>4 && item.includes('av')){
//         console.log(item);
//     }
// }



// for (let i=0; i<array.length; i++){

// if  (array[i].length>4 && array[i].includes('av')){
//     console.log(array[i]);
// }}


// array.forEach(function(element)  {
//     if (element.length>4 && element.includes('av')){
//         console.log(element);
//     }
// })





// homework 4.

// 1.
// let array=[5, 25, 89, 120, 36];
// array.push('javascript','python');
// console.log(array);
// array.unshift('html','css');
// console.log(array);
// array.shift('html');
// array.pop('python');
// console.log(array);


// 2.
// let fruit= ['ფორთოხალი', 'ბანანი', 'მსხალი'];

// console.log(fruit.length);
// fruit.push('ვაშლი','ანანასი');
// console.log(fruit);
// fruit.unshift('საზამთრო');
// console.log(fruit);
// console.log(fruit.length);
// fruit.splice(3,0,'მანგო');
// console.log(fruit);
// fruit.shift();fruit.pop();
// console.log(fruit);
// console.log(fruit.length);


// 3.
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray=array.map(function(item){
//     return item/3;

// })
// console.log(newArray);


// 4.
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newArrayFilter=array.filter(function(item){
//    return(typeof item==='number');
// })
// console.log(newArrayFilter);

// 5.
// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newArrayFilter=languages.filter(function(item){
    
//     return item.length>3;
// })
// console.log(newArrayFilter);


// 6.
// let item = [12, 'google', 32, null, 'yahoo', 25];
// let newArray=item.map(item => {
//     if (typeof item==='number') {
// return item*item;
//     }else if (typeof item=='string'){
//         return item.toUpperCase();
//     }
// return item;
// })
// console.log(newArray);


// 7.
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let newArray=words.filter(function(item){
//     return item.includes('m') || ('M');

// })
// console.log(newArray);


// 8.
// let array = [1, 2, 3, 4, 5];
// let sum =0;
// array.forEach(function(item){
//     sum+=item;
// })
// console.log(sum);


// 9.
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newNumbers=numbers.filter(function(element){
//     return element>0;
// })

// console.log(newNumbers);




// 10.
// let array =[1, 2, 3, 4, 5];
// array.splice(2,0,'a','b','c');
// console.log(array);




// homework 5.
// 1.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let allarray=arr1.concat(arr2, arr3);



// 2.
// let arr = [-1, -2, -3, 4].some(item => item>0);
// console.log(arr);


// 3.
// let array =[23,45,32,5,87,7,3,98];
// array.sort(function(x,y){
//     return y-x;
// })
// console.log(Math.min(...array));


// 4.
// let newElement=document.createElement('p');
// document.getElementById('test').appendChild(newElement);
// newElement.setAtbribute('class','text');
// newElement.textContent='hello world';