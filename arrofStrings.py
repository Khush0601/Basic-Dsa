def reverseStrings(arr):
    result = []

    for s in arr:
        reversed_s = s[::-1]   # string reverse using slicing
        result.append(reversed_s)

    return result


if __name__ == '__main__':
    arr = input().strip().split()  # user types all strings in one line

    result = reverseStrings(arr)

    for value in result:
        print(value)
