class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name
    def new_born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on your new born child!")

    def is_18(self, name):
        for member in self.members:
            if member.get("name") == name:
                return member.get("age", 0) >= 18
        return False
    def family_presentation(self):
        print(f"\n--- The {self.last_name} Family ---")
        for member in self.members:
            # FIX: This check prevents a KeyError if a member dictionary is missing keys.
            if all(k in member for k in ("name", "age", "gender")):
                # FIX: Simplified the check for being a child and fixed grammar.
                is_child_str = "Yes" if member['age'] < 18 else "No"
                print(f"My name is {member['name']}, I am {member['age']} years old ({member['gender']}). Is child? {is_child_str}")

family1 = Family([
    {'name': 'Michael', 'age': 35, 'gender': 'Male'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female'},
    {"name": "ahmed", "age": 20, "gender": "male"},
    {"name": "sara", "age": 18, "gender": "female"}
], "Doe")
family1.family_presentation()
family1.new_born(name="mohamed", age=0, gender="male")
family1.family_presentation()
# FIX: The return values of these calls were not printed, so the result was not visible.
print(f"\nIs mohamed over 18? {family1.is_18('mohamed')}")
print(f"Is sara over 18? {family1.is_18('sara')}")
