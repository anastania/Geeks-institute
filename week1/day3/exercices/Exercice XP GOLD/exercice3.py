class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
        print(f"Added {name} to the menu")

    def update_item(self, name, price, spice, gluten):
        # Update existing dish
        for dish in self.menu:
            if dish["name"] == name:
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"Updated {name} in the menu")
                return
        print(f"Error: {name} not found in menu")

    def remove_item(self, name):
        # Remove dish from menu
        for dish in self.menu:
            if dish["name"] == name:
                self.menu.remove(dish)
                print(f"Removed {name} from menu")
                print("Updated menu:", self.menu)
                return
        print(f"Error: {name} not found in menu")
# Create an instance of MenuManager
menu_manager = MenuManager()

# Test the methods
menu_manager.add_item("Pizza", 12, "A", True)
menu_manager.remove_item("Hamburger") 
menu_manager.update_item("Pizza", 15, "B", True)
