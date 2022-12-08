// let user={
//    username:'giorgi',
//    lastname:"smith",
//    age:25,
//    studentstatus:"active"
// };
// console.log(user.studentstatus);






// let numbers=[10,5,20,15,19];
// for(let n of numbers){
//     if(n>5){
//         console.log(n);
//     }
// }






// let numbers=[5,6,10,25,3,7,4,100,28,36,89]
// for(let y of numbers)
// if (y>5){
//     console.log(y);
// }






// let user={
//     name:'giorgi',
//     age:20,
//     studentstatus:'active'


// }


    //  if((user.age<18) && (user.studentstatus==true))
    //  {
    //     console.log('hello');}

    // else {console.log('error');}


        // if (user.name=='levani'){
        //     console.log('hello levani');}

        //     else {console.log('error');}
        
        
        // if ((user.userstatus=='active') || (user.age<25)){
        //     console.log('hello world');
        // }
        // else {console.log('error');}






        // let array=['watermelon','pear',10,45,50,'apple','ananas']
        // for(let x of array ){
        //    if(typeof x==='string')
        //         console.log(x);
        //     }



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

