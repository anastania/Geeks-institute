class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

    def informations(self):
        print(f"Le nom de la chatte est {self.name}.")

def find_oldest_cat(*cats):
    if not cats:
        return None
        
    oldest_cat = cats[0]
    for cat in cats[1:]:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
            
    return oldest_cat

cat1=Cat("mimi", 3)
cat1.informations()
cat2=Cat("yawni", 1)
cat2.informations()
cat3=Cat("Chloe", 2)
cat3.informations()

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
if oldest_cat:
    print(f"The oldest cat is {oldest_cat.name} with {oldest_cat.age} years old.")
else:
    print("No cats provided.")


