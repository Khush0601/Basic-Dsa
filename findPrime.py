def findPrimeNumbers(arr):
    result = []
    total = 0

    for num in arr:
        if num > 1:
            is_prime = True

            for i in range(2, num):
                if num % i == 0:
                    is_prime = False
                    break

            if is_prime:
                total += num
                result.append(num)

    return result, total


if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))

    primes, total = findPrimeNumbers(arr)

    for value in primes:
        print(value)

    print("Sum:", total)
