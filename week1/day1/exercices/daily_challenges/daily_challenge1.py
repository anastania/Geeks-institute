# Challenge 1: Generate list of multiples
def generate_multiples():
    try:
        number = int(input("Enter a number: "))
        length = int(input("Enter the desired length: "))
        
        if length <= 0:
            print("Length must be positive")
            return
            
        multiples = [number * i for i in range(1, length + 1)]
        print(multiples)
        
    except ValueError:
        print("Please enter valid numbers")

# Challenge 2: Remove consecutive duplicates
def remove_consecutive_duplicates():
    word = input("Enter a word: ")
    result = word[0]  # Keep first character
    
    for i in range(1, len(word)):
        if word[i] != word[i-1]:  # Add character only if different from previous
            result += word[i]
            
    print(f"Word without consecutive duplicates: {result}")

# Main program
print("Choose a challenge:")
print("1. Generate multiples")
print("2. Remove consecutive duplicates")

choice = input("Enter 1 or 2: ")

if choice == "1":
    generate_multiples()
elif choice == "2":
    remove_consecutive_duplicates()
else:
    print("Invalid choice")
