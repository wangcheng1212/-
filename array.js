//遍历数组的方法
// let arr = ['刘备', '关羽', '张飞', '赵云', '黄忠']

// 1. for 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
    
// }

// 2. forEach() 数组的每一个元素执行一次提供的函数,没有返回值
// arr.forEach(function (item,index) {  
//     console.log(item);
    
// })
// arr.forEach(item => {
//     console.log(item);
    
// })

// 3. map 类似forEach 数组中的每一个都执行一次函数,但是会返回一个新数组,新数组接受了每一次执行函数的返回值;
// 比如要给数组的数都进行开方,foreach就不能处理,他没有返回值;
// let arr = [1,2,3,4,5]
// let newArr = arr.map(function (item) {  
//     return item * item
// })
// console.log(newArr);

// let arr1 = arr.map(item => item * item)

// 4. filter 返回一个新数组,数组的值是每一次函数中返回true的值,有筛选的作用
// let arr = [1000,122,733,542,636,233,634]
// let arr1 = arr.filter(function (item) {
//     if(item>500){
//         return item;
//     }
// })
// console.log(arr1);

// let arr1 = arr.filter(item => item > 500)
// console.log(arr1);

// 5. every 返回一个Boolean类型的值,只要有一个值是false,那么就返回false
// let arr = [1,2,3,4,5,6]
// let res2 = arr.every(item => item%2 == 0)
// console.log(res2);


// var flag = true
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 != 0){
//         flag = false
//     }
// }
// if(flag){
//     console.log('全是偶数');
    
// } else {
//     console.log('有奇数');
    
// }

// 6. some 只要有一个返回true 那么就返回true;
// let arr = [1,2,3,4,5,6]
// let res1 = arr.some(item => item%2 == 1)
// console.log(res1);





