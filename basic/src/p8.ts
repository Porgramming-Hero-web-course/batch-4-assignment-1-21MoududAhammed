// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
function validateKeys<T extends object>(
  obj: T,
  keys: (string | keyof T)[]
): boolean {
  return keys.every((key) => key in obj);
}

// Sample Input:
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "address"]));
console.log(validateKeys(person1, ["name", "age"]));
