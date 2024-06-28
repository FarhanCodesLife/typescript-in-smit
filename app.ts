// // / Type Annotations
// // Type Inference
// // Type Aliases
// // Union Types
// // Interfaces
// // Type Aliases vs Interface
// // Generics
// // Enums




// // type anotation 
// let myname:string = 'farhan'
// // jis code ko type likhi ho usse type anotation khetyhe 






// // type infrence 
// let myname2 = "farhan"
// // jis me type batani nhi hoti typescript defolt per laga deti he usse type inference khety he 





// // Type Aliases

// type Arr =[string,number,string,boolean]

// let arr:Arr = ['apple',78,"anar", true]


// type Frr= {
//     name1:string;
//     phone:number;
//     email:(string|number);
//     adress?:string

// }

// let fruit :Frr={
//     name1:"farhan",
//     phone:3182127256,
//     email:"farhan@gmail.com",

// }

// fruit.adress="karachi"


// function mango(type:string,state:string):string {
//     return type + state
    
// }

// mango('langra','lagristan')





// // Union Types

// let username:(string|boolean) = false
//  username = "farhan"




// // Interfaces
// interface anar {
//     name8:string;
//     color:string;
//     price:number;
// }
// let fruitd:anar={
//     name8:"anar",
//     color:"red",
//     price:9898,

// }







// // // type vs inference //

// // type fruit ={
// //     fruitName: string;
// //     type:string;
// //     state:string;
// // }


// // type Mango = fruit & {
// //     price :number;
// // }


// // let kango : Mango={
// //     fruitName:"mango",
// //     type:"sindhri",
// //     state:"sindh",
// //     price:200
// // }



// // console.log(kango);



// // // interface fruit {
// // //     fruitName: string;
// // //     type:string;
// // //     state:string;
// // // }


// // interface orange extends fruit {
// //     price :number;
// // }


// // let orange :orange={
// //     fruitName:"orange",
// //     type:"mettha",
// //     state:"karachi",
// //     price:232,

// // }


// // enum 


// enum farh {
//     age=19,
//     kam="developer",
//     salery=78687,

// }

// console.log(farh["age"]);








// // genric 

// function items<t>(params:t):t {
//     return params

// }

// items("khjhj")