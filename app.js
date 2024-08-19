// Class
// Lab-1
// class Calculator {
//         constructor(_value = 0){
//         this.value = _value
//         }
//         add(a){
//                 return this.value+=a
//         }
//         subtract(a){
//                 return this.value-=a
//         }
//         multiply(a){
//                 return this.value*=a
//         }
//         divide(a){
//                 return this.value/=a
//         }
//         show(){
//                 console.log(this.value);      
//         }
// }

// cal = new Calculator(10)
// cal.show()
// console.log(cal.add(5));
// console.log(cal.subtract(3));
// console.log(cal.multiply(10));
// console.log(cal.divide(2));


// Lab-2
// class Sale{
//         constructor(_name,_amount,_price){
//                 this.name = _name
//                 this.amount = _amount
//                 this.price = _price
//         }
//         calcPrice(){
//                 console.log(this.price);
//                 console.log(this.amount);
//                 return this.price*this.amount
//         }
// }

// class Beverage extends Sale{
//         constructor(_name,_amount,_price){
//                 super()
//                 this.amount = _amount
//                 this.price = _price
//         }
// }
// beverage = new Beverage('Pepsi',3,19)
// console.log(beverage.calcPrice());

// Static Meyhod
// Lab-1
// let isArr = (input) =>{ return Array.isArray(input)}
// arr=[]
// obj={}
// r1 = isArr(arr)
// r2 = isArr(obj)
// console.log(r1);
// console.log(r2);

// Lab-2
// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//       };
// re = 0
// for (let val of Object.values(salaries)){
//         re += val
// }
// console.log(`Total salaries is ${re}`);
// key = Object.keys(salaries)
// res = key.reduce((pre,keys)=>{
//         return pre +=salaries[keys]
// },0)
// console.log(`Total salaries is ${res}`);

// Lab-3
// let a = {}
// let b = {a:1}
// checkEmptyObj = (obj) =>{
//         if (Object.keys(obj).length == 0){
//                 return true
//         }else{
//                 return false
//         }
// }
// console.log(checkEmptyObj(a));
// console.log(checkEmptyObj(b));

// Rest
// Lab-1
// multi = (...args) =>{
//         res = 1
//         for (const arg of args)res *= arg
//         return res
// }
// console.log(multi(2));
// console.log(multi(2,10));
// console.log(multi(2,10,20,30));

// Lab-2
// filterOutOdds = (...args)=>{
//         res = []
//         for (const arg of args) {
//                 if (arg%2==0){
//                         res.push(arg)
//                 }
//         }
//         return res
// }
// console.log(filterOutOdds(2,5,4,9,8,10,5241,3,12,150,684));

// Lab-3
// mergeObjects = (...agrs)=>{
//        return  Object.assign(...agrs,...agrs) 
// }
// a = {a:1,c:10}
// b={b:5}
// console.log(mergeObjects(a,b));

// Lab-4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// num1 = [...nums1,...nums2]
// num3 = [5,...nums1,-6,-1,...nums2]
// res = num3.reduce((pre,cur)=>{
//        return pre +=cur
// },0)
// console.log(num1);
// console.log(num3);
// console.log(res);

// Lab-5
// const num = [8, 3, -8, 2];
// num2 = [...num]
// num2[3] = num2[3]**2
// console.log(num2);

// Lab-6
// people = (firsname,lastname,...item)=>{
//         console.log(`First name is : ${firsname}`);
//         console.log(`Last name is : ${lastname}`);
//         console.log(`Hobby is : ${item}`);
//         console.log(`Have Hobby : ${item.length} activity`);
// }
// people('John','doe','play game','football')

// Lab-7
// let doubleAndReturnArgs=(arr,...args)=>{
//         let double = args.map((i)=>i*2)
//         return arr.concat(...double)
// }
// let res1 =doubleAndReturnArgs([1, 2, 3], 4, 4); 
// let res2 =doubleAndReturnArgs([2], 10, 4); 
// console.log(res1);
// console.log(res2);

// Lab-9
// const num = [8, 3, -8, 2];
// cloneArray = (arr) => {
//         return res = [...arr]
// }
// console.log(cloneArray(num));

// Lab-10
// let obj = { a: 1, b: 2, c: 3 };
// cloneObject = (obj) =>{
//         return res = {...obj}
// }
// console.log(cloneObject(obj));

// Lab-11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya = first
// console.log(second); // ** Marisa = second
// console.log(third); // *** Chi = third

// Lab-12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//         'Raindrops on roses',
//         'whiskers on kittens',
//         'Bright copper kettles',
//         'warm woolen mittens',
//       ];
//       console.log(raindrops); // * Raindrops on roses = raindrops
//       console.log(whiskers); // ** whiskers on kittens = whiskers
//       console.log(aFewOfMyFavoriteThings); // *** ['Bright copper kettles', 'warm woolen mittens'] =...aFewOfMyFavoriteThings

// Lab-13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [10, 30, 20] สลับตำแหน่ง index 1 2 
 
// Lab-14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 = numPlanets
// console.log(yearNeptuneDiscovered); // ** 1846 = yearNeptuneDiscovered

// Lab-15
// let planetFacts = {
//         numPlanets: 8,
//         yearNeptuneDiscovered: 1846,
//         yearMarsDiscovered: 1659
//       };
//       let { numPlanets, ...discoveryYears } = planetFacts;
//       console.log(discoveryYears); // * {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} =  ...discoveryYears
   
// Lab-16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//         return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); //* Your name is Alejandro{firstName=Alejandro} and you like purple {favoriteColor=purple}
// console.log(getUserData({ firstName: 'Melissa' }));//**  Your name is Melissa{firstName=Melissa} and you like green{favoriteColor=default}
// console.log(getUserData({}));//***  Your name is undefined{firstName= default=null} and you like green{favoriteColor=default}

// Lab-17
// let guest = 'Jane';
// let admin = 'Pete';
// [admin, guest]= [guest,admin]
// console.log(guest);
// console.log(admin);

// Lab-18
// let user1={firstName:'John',
//         lastName:'Doe',
//         age:20
// }
// let over18=({firstName,lastName,age})=>{
//         if(age>18){
//                 console.log(`Hello ${firstName + lastName}`);
//         }else{
//                 console.log('Your age not over 18');
//         }
// }
// over18(user1)

// Lab-19
// let user = {
//         name: 'John',
//         years: 27
// };
// let {name, years: age, isAdmin = false}= user
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// Lab-21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let[a,[b,[[[c,d],e],f]]] = arr
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// Lab-22
// const obj = { prop: 5, prop2: 10 };
// let {prop:a, prop2:b} = obj
// console.log(a);
// console.log(b);

// Lab-23
// let { a, b } = {a: 1, b: 2};
// console.log(a); //1
// console.log(b); //2

// Lab-24
// const [, , , a, b] = [1, 2, 3];
// console.log(a); // undefinded
// console.log(b); // undefinded

// Lab-25
// const q = { prop: 5, prop2: [10, 100] };
// let {prop:x, prop2:[,y]}=q
// console.log(x);
// console.log(y);

// Lab-26
// const q = {
//         prop: 'Hello',
//         prop2: {
//           prop2: {
//             nested: ['a', 'b', 'c']
//           }
//         }
//       };
// let{
//         prop:x,
//         prop2:{
//                 prop2:{
//                         nested:[,y,]
//                 }
//         }
// }   =q
// console.log(x);
// console.log(y);

// Lab-27
// const names = [
//         { firstName: 'John', lastName: 'Doe' },
//         { firstName: 'Jack', lastName: 'Dann' },
//         { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (const i of names) {
//         let {firstName, lastName } = i
//         console.log(firstName + lastName);
// }

// Lab-28
// const users = [
//         { user: "Name1" },
//         { user: "Name2", age: 2 },
//         { user: "Name2" },
//         { user: "Name3", age: 4 }
// ];
// for (const i of users) {
//         let{user,age = 'unknow'}=i
//         console.log(`user : ${user} , age : ${age}`);
        
// }
      