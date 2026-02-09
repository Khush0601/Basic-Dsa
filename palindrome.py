def isPalindrome(s):
    s = s.lower()  # ignore case
    length = len(s)
    
    for i in range(length // 2):
        if s[i] != s[length - 1 - i]:
            return False
    return True

if __name__ == '__main__':
    s = input("Enter string or number: ").strip()
    if isPalindrome(s):
        print("Palindrome ✅")
    else:
        print("Not Palindrome ❌")
