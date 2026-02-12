function findMissingNumber(numbers) {
    const count = 10
    const missing = new Array();

    for (i = 1; i <= count; i++) {
        if (numbers.indexOf(i) == -1) {
            missing.push(i);
        }
    }

    return missing;
}

const args = process.argv[2];

console.log(findMissingNumber(args));