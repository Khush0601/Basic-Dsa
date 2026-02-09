def findEvenNumbers(arr):
    result = []
    
    for num in arr:
        if num % 2 == 0:
            break
        else:
            result
    return result


if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))

    result = findEvenNumbers(arr)

    for value in result:
        print(value)