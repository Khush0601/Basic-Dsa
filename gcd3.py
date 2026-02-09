def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def gcd_three(a, b, c):
    return gcd(gcd(a, b), c)

if __name__ == '__main__':
    num1 = int(input("Enter first number: ").strip())
    num2 = int(input("Enter second number: ").strip())
    num3 = int(input("Enter third number: ").strip())

    print(f"GCD of {num1}, {num2}, {num3} is {gcd_three(num1, num2, num3)} ✅")
