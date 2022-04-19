const sum = (...numbers) => numbers.reduce((acc, curr) => (acc + curr),0);

console.log(sum(13, 32, 42, 12));