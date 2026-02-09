def fibonacci(n):
    if n == 0:
        return []
    elif n == 1:
        return [0]

    series = [0, 1]

    for i in range(2, n):
       series.append(series[i-1] + series[i-2])

    return series


if __name__ == '__main__':
    n = int(input().strip())

    result = fibonacci(n)
    for value in result:
        print(value)
