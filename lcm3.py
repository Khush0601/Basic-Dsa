def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)

def lcm_three(a, b, c):
    return lcm(lcm(a, b), c)

if __name__ == '__main__':
    num1 = int(input("Enter first number: ").strip())
    num2 = int(input("Enter second number: ").strip())
    num3 = int(input("Enter third number: ").strip())

    print(f"LCM of {num1}, {num2}, {num3} is {lcm_three(num1, num2, num3)} ✅")
