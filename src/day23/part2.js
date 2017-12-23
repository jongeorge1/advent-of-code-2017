class Day23Part2 {
  constructor() {
    this.primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359];
  }

  isPrime(num) {
    let top = Math.sqrt(num);

    for (let i = 0; i < this.primes.length; i++) {
      let p = this.primes[i];
      if (p > top) {
        return true;
      }

      if (num % p === 0) {
        return false;
      }
    }

    console.log('Add more primes to the list');
  }

  process(input) {
    let start = +input.split('\r\n')[0].split(' ')[2];
    start = (start * 100) + 100000;
    let nonPrimes = 0;

    for (let i = start; i <= 124900; i += 17) {
      if (!this.isPrime(i)) {
        nonPrimes++;
      }
    }

    return nonPrimes;
  }
}

module.exports = Day23Part2;