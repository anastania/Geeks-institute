from exercice4 import Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        # Initialize with parent class constructor
        super().__init__(members, last_name)
        
    def use_power(self, name):
        """Print the power of a family member if they are over 18"""
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} can use power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old")
                
    def incredible_presentation(self):
        """Display the incredible family's presentation"""
        print(f"\n*Here is our powerful family {self.last_name}*")
        # Call parent class presentation method
        super().family_presentation()
        # Print each member's incredible name and power
        for member in self.members:
            print(f"{member['incredible_name']}'s power is: {member['power']}")

family2 = TheIncredibles([
    {'name': 'Bob', 'age': 12, 'gender': 'Male', 'incredible_name': 'Robert', 'power': 'fly'},
    {'name': 'Sarah', 'age': 10, 'gender': 'Female', 'incredible_name': 'Sarah', 'power': 'read minds'},
    {'name': 'John', 'age': 15, 'gender': 'Male', 'incredible_name': 'John', 'power': 'super strength'},
    {'name': 'Jane', 'age': 33, 'gender': 'Female', 'incredible_name': 'Jane', 'power': 'invulnerability'},
    {'name': 'Jack', 'age': 42, 'gender': 'Male', 'incredible_name': 'Jack', 'power': 'build towers'},
    {'name': 'Jill', 'age': 14, 'gender': 'Female', 'incredible_name': 'Jill', 'power': 'teleportation'},
    {'name': 'Jake', 'age': 21, 'gender': 'Male', 'incredible_name': 'Jake', 'power': 'super speed'}
], "Doe")
family2.incredible_presentation()
family2.new_born(name="mohamed", age=10, gender="male", incredible_name="mohamed", power="fly")
family2.incredible_presentation()
family2.use_power("jake")

