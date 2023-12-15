//! problem 1
const getLengthOrSquareNumber = (param: string | number): number | undefined => {
	if (typeof param === 'string') {
		return param.length;
	} else if (typeof param === 'number') {
		return param * param;
	}
};

//! problem 2
interface Person {
	name: string;
	age: number;
	phone?: string;
	address?: {
		city: string;
		street: string;
	};
}

const getAddressCity = (param: Person): string | undefined => {
	return param?.address?.city;
};

//! problem 3
class Cat {
	name: string;
	species: string;
	constructor(name: string, species: string) {
		this.name = name;
		this.species = species;
	}
	confirmCat() {
		console.log("yes, it's a cat");
	}
}
const IsCat = (param: Cat) => {
	if (param instanceof Cat) {
		param.confirmCat();
	} else {
		console.log("no, it's not a cat.");
	}
};

//! problem 4
const getTotal = (arr: (string | number)[]): number => {
	let total: number = 0;
	arr.forEach((element) => {
		if (typeof element === 'number') {
			total = total + element;
		}
	});
	return total;
};

//! problem 5
interface Car {
	make: string;
	model: string;
	year: number;
}
interface Driver {
	name: string;
	licenseNumber: number;
}

const getCombinedData = (car: Car, driver: Driver): Car & Driver => {
	return {
		...driver,
		...car
	};
};

//! problem 6
const doSum = (arr: unknown): void => {
	if (Array.isArray(arr) && arr.every((num) => typeof num === 'number')) {
		let sum: number = 0;
		arr.forEach((num) => (sum += num));
		console.log(sum);
	} else {
		console.error({ message: 'The parameter is not a array of numbers!' });
	}
};

//! problem 7
const findFirstOccurrence = <T>(arr: T[], value: T): number => {
	return arr.indexOf(value);
};

//! problem 8
interface Product {
	name: string;
	price: number;
	quantity: number;
}

const getTotalCost = (cart: Product[]): number => {
	let totalCost: number = 0;
	cart.forEach((product) => {
		totalCost += product?.price * product?.quantity;
	});
	return totalCost;
};

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

