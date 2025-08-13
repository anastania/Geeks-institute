class Dog:
    def __init__(self, name, height):
        self.height = height
        self.name = name
    def Bark(self):
        print(f"{self.name} goes woof ")
    def Jump(self):
        print (f"{self.name} jumps {self.height *2}  cm high")

davids_dog=Dog("rex",50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.Bark()
davids_dog.Jump()
sarahs_dog=Dog("Teacup",20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.Bark()
sarahs_dog.Jump()
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}")
else:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}")

