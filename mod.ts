const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 
    29, 31, 37, 41, 43, 47, 53, 59, 
    61, 67, 71, 73, 79, 83, 89, 97,
]

const factors =
(n: number) => {
    if (n > primes.at(-1)!) {
        throw "input too large"
    }
    return primes.filter(x => n % x == 0)
}

export const jordan =
(k: number) =>
(n: number) =>
    factors(n).reduce((a, b) => a-a/b**k, n**k)

export const euler = jordan(1)
