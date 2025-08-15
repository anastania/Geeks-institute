import random

class MyList:
    def __init__(self, letters_list):
        self.letters = letters_list
    
    def reverse_list(self):
        """Returns the reversed list"""
        return self.letters[::-1]
    
    def sort_list(self):
        """Returns the sorted list"""
        return sorted(self.letters)
    
    def generate_random_list(self):
        """Generates a new list of same length with random numbers"""
        return [random.randint(1, 100) for _ in range(len(self.letters))]

my_list = MyList(['h', 'e', 'l', 'l', 'o'])
    
    # Test the methods
print("Original list:", my_list.letters)
print("Reversed list:", my_list.reverse_list())
print("Sorted list:", my_list.sort_list())
print("Random number list:", my_list.generate_random_list())
