import random
birthdays = {
    "Alice": "1990/01/15",
    "Bob": "1985/06/20",
    "Charlie": "2000/12/05",
    "Diana": "1995/03/30",
    "Ethan": "1988/09/10"
}

print("Welcome! You can look up the birthdays of the people in the list!")
print("People:", ", ".join(birthdays.keys()))

name = input("Enter a name: ")

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")

# Exercise 3: 
def sum_sequence(x: int) -> int:
    return x + int(f"{x}{x}") + int(f"{x}{x}{x}") + int(f"{x}{x}{x}{x}")

x = 3
print(f"Sum sequence for {x}: {sum_sequence(x)}") 

# Exercise 4:
def throw_dice() -> int:
    return random.randint(1, 6)

def throw_until_doubles() -> int:
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        if die1 == die2:
            break
    return count

def main():
    results = []
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)

    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)

    print(f"\nTotal throws to get 100 doubles: {total_throws}")
    print(f"Average throws to get doubles: {average_throws}")

main()
