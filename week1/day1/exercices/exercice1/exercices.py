#exercice 1 ----------------------------------------------------------------------------

for p in range (5):
    print("hello world")




#exercice 2-----------------------------------------------------------------------------
operation1 = (99**3)*8
print (operation1)
#exercice 3-----------------------------------------------------------------------------
ask=input("enter your name")
if ask =="anas":
    print("hello anas")
else:
    print("you are not anas hhhhehehehhehehehe ")
#exercice4--------------------------------------------------------------------------------------
roller_coaster= int(input("enter your height in cm :"))
if roller_coaster >145:
    print("you can ride the roller coaster")
else:
    print("you are too short to ride the roller coaster")

#exercice 5--------------------------------------------------------------------------------------

my_fav_numbers = {7, 13, 23, 42}

my_fav_numbers.add(99)
my_fav_numbers.add(101)

my_fav_numbers.remove(101)

friend_fav_numbers = {3, 8, 15, 24}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our combined favorite numbers:", our_fav_numbers)
#exercice 6--------------------------------------------------------------------------------------

my_tuple = (1, 2, 3, 4, 5)
print( my_tuple)

new_tuple = my_tuple + (6, 7)
print(new_tuple)

#exercice 7--------------------------------------------------------------------------------------

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)
basket.remove("Blueberries")
print(basket)
basket.append("Kiwi")
print(basket)

basket.insert(0,"Apples")
print(basket)
# Count apples in basket
apple_count = basket.count("Apples")
print(f"Number of apples {apple_count}")

# Empty the basket
basket.clear()
print(basket)
#exercice 8--------------------------------------------------------------------------------------
# Initialize the sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# Remove all pastrami sandwiches since we're out
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
# Create empty list for finished sandwiches
finished_sandwiches = []
# Process all orders
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich.lower())
    print(f"I made your {current_sandwich} sandwich.")

# Print finished sandwiches
print("\nFinished sandwiches:")
for sandwich in finished_sandwiches:
    print(sandwich)
