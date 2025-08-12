def describe_city(city, country="Morocco"):
    
    print(f"{city} is in {country}")

# Call the function with different cities
describe_city("Casablanca")  # Uses default country
describe_city("Reykjavik", "Iceland")
describe_city("Paris", "France")
