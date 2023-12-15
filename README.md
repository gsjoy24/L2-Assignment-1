1. There are many benefits of using TypeScript. Its reduce the bugs, because we can handle the errors of bugs while writing the program or code instead of getting that in the runtime. TypeScript make our mode readable and maintainable for large projects. It gives us some more features to build large applications.

2.

#### Optional Chaining (?.)

Optional chaining is a feature that allow us to handle error while we are accessing any property from an object. If we want to access a property of an object of another object, and if the property is not available, it can cause an error. But if we use optional chaining, the property will return undefined, but will not be an error.

```
// example of optional chaining
type Person2 = {
	name: string;
	age: number;
	address: {
		city: string;
	};
};
const person: Person2 = {
	name: 'Joy',
	age: 21,
	address: {
		city: 'Rajshahi'
	}
};

const city : string = person?.address?.city //Rajshahi
const country : string | undefined = person?.address?.country //undefined
```

#### Nullish Coalescing (??)

We use Nullish Coalescing (??) operators to set a default value for a variable conditionally. It works like the logical OR(||) operator. But in the case, it's only work when the the expected value is null or undefined. If it is null or undefined, the variable will accept the default value.

```
// example of Nullish Coalescing (??)
const country:string = person?.address?.country ?? 'Bangladesh'

// As the country property is undefined, we set a default value for the variable.

```

3. We can use callbacks promises to handle asynchronous operations. Using callbacks is the traditional way to handle this, but Promises gives us more clean and structured way to do it.
   Async/await makes our code more readable and structured. We can handle errors using try/catch blocks. It can improve our code.

4.

```
enum StudentRolls {
    Joy = 1,
    Asif = 2,
    Fahad = 3
}

const fahadsRoll : number = enum StudentRolls.Fahad; // 3
const whosRoll : string = enum StudentRolls.[3]; // Fahad
```

in the example, we can see that if we need to know a roll number of any student or The student name by his number, we can get that easily using the enum object. It is representing all the roll numbers. It makes the code more readable and maintainable. Also it is more safe, because enums are strongly typed.

5. type guards are a way to narrow down the type of a variable within a specific block of code. It is useful when we use union type variables. It help use to perform a operation based on the type of the variable. example below- 
```
// example of type guard
type ExpectingNumber = string | number;

const add = (a: ExpectingNumber, b: ExpectingNumber): number | string => {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	} else {
		return 'please provide numbers!';
	}
};

console.log(add(2, 2)); //4
console.log(add(2, '2')); //please provide numbers!
```

6. If we create a property with the modifier readonly, we can't chagne of reassign the value of the property after initialization. 
```
class User {
	readonly id: number;
	name: string;
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}

```
in this example, the property named name can be changed of modified. but the id will never changed, so we marked that as readonly, as a result, this property can be only read and can't be changed. 


7. The union type allows a variable to have multiple types. In the example, we can use the type NumberOrString for both number and string type variables.

```
type NumberOrString = number | string;
const number : NumberOrString = 3
const string : NumberOrString = 'Joy'
```
