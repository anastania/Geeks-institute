def make_shirt(size="large", text="I love Python"):
    """
    Function to create a shirt with specified size and message
    """
    print(f"The size of the shirt is {size} and the text is '{text}'")

# Call function with no arguments (using defaults)
make_shirt()

# Make medium shirt with default message
make_shirt(size="medium")

# Make custom shirt with different size and message
make_shirt("small", "Python is awesome!")

# Bonus: Call function using keyword arguments
make_shirt(text="Hello World!", size="extra large")
