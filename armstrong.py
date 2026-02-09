def isArmstrong(number):
    # Convert number to string to easily count digits
    num_str = str(number)
    n = len(num_str)
    total = 0

    for digit in num_str:
        total += int(digit) ** n

    return total == number

if __name__ == '__main__':
    num = int(input("Enter a number: ").strip())
    if isArmstrong(num):
        print(f"{num} is an Armstrong number ✅")
    else:
        print(f"{num} is NOT an Armstrong number ❌")
