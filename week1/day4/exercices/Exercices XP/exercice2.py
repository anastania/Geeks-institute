class Dog:
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
    
    def bark(self):
        print(f"{self.name} is barkingggggggggg!!!!!!!!")
    
    def run_speed(self):
        return self.weight/self.age*10
    def fight (self,other_dog):
        if self.run_speed()>other_dog.run_speed():
            return f"{self.name} is the winner of the fight"

        else:
            return f"{other_dog.name} is the winner of the fight"

dog1=Dog("rex",5,30)
dog2=Dog("zax",7,25)
dog3=Dog("kloe",4,15)
dog1.bark()
dog2.bark()
dog3.bark()
print(dog1.run_speed())
print(dog2.run_speed())
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))