import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add two circles together")
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare two circles")
        return self.radius > other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare two circles")
        return self.radius == other.radius

    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare two circles")
        return self.radius < other.radius
if __name__ == "__main__":
    c1 = Circle(radius=2)
    c2 = Circle(diameter=6)
    c3 = Circle(radius=3)
    print(f"Area of c1: {c1.area():.2f}")
    print(c1)
    print(repr(c1))
    c4 = c1 + c2
    print(f"New circle after addition: {c4}")
    print(f"c1 > c2: {c1 > c2}")
    print(f"c1 == c2: {c1 == c2}")
    print(f"c1 < c2: {c1 < c2}")
    
    # Test sorting
    circles = [c1, c2, c3]
    sorted_circles = sorted(circles)
    print("\nSorted circles by radius:")
    for circle in sorted_circles:
        print(circle)
