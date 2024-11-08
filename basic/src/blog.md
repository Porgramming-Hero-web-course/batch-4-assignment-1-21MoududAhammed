The significance of union and intersection types in Typescript.
Answer: There are many case where we need union and many case where we should use intersection.
Union Types: It works like or . It uses when a value can take different forms of data. This is especially helpful for function parameters, where the function can accept multiple types of input.
Example:
type MyValue = string | number;
let value : MyValue;
value = "hello";--> valid
value = 42;--> valid
value = true; --> Error


Intersection Type: It works like and . 
example : 
tpe User = {name: string};
type Admin = {permissions: string[]};

type AdminUser = User & Admin;

const admin : AdminUser = {
    name: "Alice",
    permissions: ["read", "write"]
}

Intersection types are particularly useful when merging multiple object types or when an entity must satisfy multiple roles .
