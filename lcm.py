def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)

if __name__ == '__main__':
    num1 = int(input("Enter first number: ").strip())
    num2 = int(input("Enter second number: ").strip())

    print(f"LCM of {num1} and {num2} is {lcm(num1, num2)} ✅")
