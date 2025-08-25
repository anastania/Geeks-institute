from flask import Flask, render_template, request, redirect, url_for, flash
from menu_item import MenuItem
from menu_manager import MenuManager

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-this'  # Change this to a random secret key

@app.route('/')
def index():
    """Home page with navigation links"""
    return render_template('index.html')

@app.route('/menu')
def menu():
    """Display all menu items"""
    items = MenuManager.all_items()
    return render_template('menu.html', items=items)

@app.route('/item/add', methods=['GET', 'POST'])
def add_item():
    """Add a new menu item"""
    if request.method == 'POST':
        item_name = request.form.get('item_name', '').strip()
        item_price = request.form.get('item_price', '').strip()
        
        # Validation
        if not item_name:
            flash('Item name is required.', 'error')
            return render_template('add_item.html')
        
        if not item_price:
            flash('Item price is required.', 'error')
            return render_template('add_item.html')
        
        try:
            item_price = int(item_price)
            if item_price < 0:
                flash('Price cannot be negative.', 'error')
                return render_template('add_item.html')
        except ValueError:
            flash('Price must be a valid number.', 'error')
            return render_template('add_item.html')
        
        # Check if item already exists
        existing_item = MenuManager.get_by_name(item_name)
        if existing_item:
            flash(f'An item with the name "{item_name}" already exists.', 'error')
            return render_template('add_item.html')
        
        # Create and save the item
        item = MenuItem(item_name, item_price)
        if item.save():
            flash(f'Item "{item_name}" was added successfully!', 'success')
            return redirect(url_for('menu'))
        else:
            flash('There was an error adding the item.', 'error')
    
    return render_template('add_item.html')

@app.route('/item/delete/<int:item_id>')
def delete_item(item_id):
    """Delete a menu item by ID"""
    # First, find the item to get its name for the flash message
    items = MenuManager.all_items()
    item_to_delete = None
    for item in items:
        if item.item_id == item_id:
            item_to_delete = item
            break
    
    if not item_to_delete:
        flash('Item not found.', 'error')
        return redirect(url_for('menu'))
    
    if item_to_delete.delete():
        flash(f'Item "{item_to_delete.item_name}" was deleted successfully!', 'success')
    else:
        flash('There was an error deleting the item.', 'error')
    
    return redirect(url_for('menu'))

@app.route('/item/update/<int:item_id>', methods=['GET', 'POST'])
def update_item(item_id):
    """Update a menu item"""
    # Find the item
    items = MenuManager.all_items()
    item = None
    for i in items:
        if i.item_id == item_id:
            item = i
            break
    
    if not item:
        flash('Item not found.', 'error')
        return redirect(url_for('menu'))
    
    if request.method == 'POST':
        new_name = request.form.get('item_name', '').strip()
        new_price = request.form.get('item_price', '').strip()
        
        # Validation
        if not new_name:
            flash('Item name is required.', 'error')
            return render_template('update_item.html', item=item)
        
        if not new_price:
            flash('Item price is required.', 'error')
            return render_template('update_item.html', item=item)
        
        try:
            new_price = int(new_price)
            if new_price < 0:
                flash('Price cannot be negative.', 'error')
                return render_template('update_item.html', item=item)
        except ValueError:
            flash('Price must be a valid number.', 'error')
            return render_template('update_item.html', item=item)
        
        # Check if new name already exists (and it's different from current name)
        if new_name != item.item_name:
            existing_item = MenuManager.get_by_name(new_name)
            if existing_item:
                flash(f'An item with the name "{new_name}" already exists.', 'error')
                return render_template('update_item.html', item=item)
        
        # Update the item
        if item.update(new_name, new_price):
            flash(f'Item was updated successfully!', 'success')
            return redirect(url_for('menu'))
        else:
            flash('There was an error updating the item.', 'error')
    
    return render_template('update_item.html', item=item)

@app.route('/item/view/<int:item_id>')
def view_item(item_id):
    """View details of a single menu item"""
    # Find the item
    items = MenuManager.all_items()
    item = None
    for i in items:
        if i.item_id == item_id:
            item = i
            break
    
    if not item:
        flash('Item not found.', 'error')
        return redirect(url_for('menu'))
    
    return render_template('view_item.html', item=item)

if __name__ == '__main__':
    app.run(debug=True)