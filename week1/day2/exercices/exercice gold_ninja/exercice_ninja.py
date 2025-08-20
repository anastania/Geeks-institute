# Exercise 1
manufacturers = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers_list = manufacturers.split(", ")

print(f"There are {len(manufacturers_list)} manufacturers in the list")
print(sorted(manufacturers_list, reverse=True))

o_count = sum(1 for name in manufacturers_list if 'o' in name.lower())
i_count = sum(1 for name in manufacturers_list if 'i' not in name.lower())

print(f"Number of manufacturers with 'o': {o_count}")
print(f"Number of manufacturers without 'i': {i_count}")

# Bonus 1
duplicate_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_manufacturers = list(set(duplicate_list))
print(f"Companies without duplicates: {', '.join(unique_manufacturers)}")
print(f"There are now {len(unique_manufacturers)} companies in the list")

# Bonus 2
reversed_names = [name[::-1] for name in sorted(manufacturers_list)]
print(f"Manufacturers with reversed letters: {reversed_names}")

# Exercise 2
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        return f"{first_name.title()} {middle_name.title()} {last_name.title()}"
    return f"{first_name.title()} {last_name.title()}"

# Exercise 3:
MORSE_CODE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', ' ': '/'
}

def english_to_morse(text):
    return ' '.join(MORSE_CODE.get(char.upper(), '') for char in text)

def morse_to_english(morse):
    morse_to_char = {value: key for key, value in MORSE_CODE.items()}
    return ''.join(morse_to_char.get(code, '') for code in morse.split())

print("\n--- Testing Exercise 1 ---")
print("Original manufacturers:", manufacturers_list)
print("Sorted manufacturers:", sorted(manufacturers_list))
print("Manufacturers with 'o':", [name for name in manufacturers_list if 'o' in name.lower()])
print("Manufacturers without 'i':", [name for name in manufacturers_list if 'i' not in name.lower()])

print("\n--- Testing Exercise 2 ---")
print(get_full_name("john", "doe")) 
print(get_full_name("jane", "smith", "marie"))  
print(get_full_name("PETER", "PARKER")) 
print(get_full_name("tony", "stark", "howard"))  

print("\n--- Testing Exercise 3 ---")
test_text = "Hello World"
morse = english_to_morse(test_text)
print(f"Original text: {test_text}")
print(f"Morse code: {morse}")
print(f"Back to English: {morse_to_english(morse)}")

test_text_2 = "Python Programming"
morse_2 = english_to_morse(test_text_2)
print(f"\nOriginal text: {test_text_2}")
print(f"Morse code: {morse_2}")
print(f"Back to English: {morse_to_english(morse_2)}")
