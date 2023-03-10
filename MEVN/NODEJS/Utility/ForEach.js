const arr = ['giraffe','tiger','lion'];//homogeneous data
const arr2 = [1,2,3,4];//homogeneous data
arr.push('Cheetah');//adding element to an array arr
arr2.push(6);//adding element to an array arr2
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana','orange'];
fruits.unshift('apple');//added at the begining
console.log(fruits);
fruits.findIndex(findFruit('apple'));

fruits.findIndex();

function findFruit(fruit)
{
    return fruit=="banana";

}
const ages=[6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//decending after asc in the previous line

function checkAge(age)
{
    return age>3;
}

const cars = ["bmw","mercedes"];
const car = {type:"fiat",model:"400",color:"white"};//name:value
//use this value while matching the data to the document mongo
