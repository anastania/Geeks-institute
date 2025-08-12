import random
def compare_numbers(user_number):
    if not 1 <= user_number <= 100:
        return "Please enter a number between 1 and 100"
    random_number = random.randint(1, 100)
    if user_number == random_number:
        return f"Success! Both numbers are {user_number}"
    else:
        return f"ouuuuups try again, Your number was {user_number} and the random number was {random_number}"

user_input = int(input("Enter a number between 1 and 100: "))
print(compare_numbers(user_input))

