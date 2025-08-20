
# Exercise 1:
month = int(input("Enter a month (1-12): "))

if month in [3, 4, 5]:
    print("Spring")
elif month in [6, 7, 8]:
    print("Summer")
elif month in [9, 10, 11]:
    print("Autumn")
elif month in [12, 1, 2]:
    print("Winter")
else:
    print("Invalid month")


# Exercise 2:

print("Numbers 1 to 20:")
for i in range(1, 21):
    print(i)

print("Even numbers from 1 to 20:")
for i in range(1, 21):
    if i % 2 == 0:
        print(i)
# Exercise 3: 

my_name = "Anas" 
user_name = ""

while user_name != my_name:
    user_name = input("Enter your name: ")

print("Hello,", my_name)

# Exercise 4: 

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_input = input("Enter your name: ")

if user_input in names:
    print("Index:", names.index(user_input))
else:
    print("Name not found")
# Exercise 5: 

num1 = int(input("Enter the 1st number: "))
num2 = int(input("Enter the 2nd number: "))
num3 = int(input("Enter the 3rd number: "))

greatest = max(num1, num2, num3)

print("The greatest number is:", greatest)

# Exercise 6: 

import random

wins = 0
losses = 0

while True:
    user_input = input("Enter a number (1-9) or 'quit' to stop: ")

    if user_input == "quit":
        break

    user_number = int(user_input)
    random_number = random.randint(1, 9)

    if user_number == random_number:
        print("Winner")
        wins += 1
    else:
        print("Better luck next time")
        losses += 1

print("Games won:", wins)
print("Games lost:", losses)
