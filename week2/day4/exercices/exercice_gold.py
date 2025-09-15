import sqlite3
import hashlib

conn = sqlite3.connect('auth.db')
c = conn.cursor()

c.execute('''
CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password TEXT NOT NULL
)
''')
conn.commit()

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def add_user(username, password):
    c.execute('INSERT INTO users(username, password) VALUES(?, ?)', (username, hash_password(password)))
    conn.commit()

def check_user(username, password):
    c.execute('SELECT password FROM users WHERE username = ?', (username,))
    result = c.fetchone()
    if result and result[0] == hash_password(password):
        return True
    return False

def user_exists(username):
    c.execute('SELECT 1 FROM users WHERE username = ?', (username,))
    return c.fetchone() is not None

# Initialize with 3 users if not exist
for u, p in [('alice','pass1'), ('bob','pass2'), ('charlie','pass3')]:
    if not user_exists(u):
        add_user(u,p)

logged_in = None

while True:
    action = input("Enter 'login', 'signup', or 'exit': ").strip().lower()
    if action == 'exit':
        break
    elif action == 'login':
        username = input("Username: ").strip()
        password = input("Password: ").strip()
        if check_user(username, password):
            print("You are now logged in")
            logged_in = username
        else:
            print("Invalid credentials")
            signup_choice = input("User not found. Do you want to signup? (yes/no): ").strip().lower()
            if signup_choice == 'yes':
                while True:
                    new_username = input("Enter new username: ").strip()
                    if not user_exists(new_username):
                        break
                    print("Username already exists, try another")
                new_password = input("Enter password: ").strip()
                add_user(new_username, new_password)
                print("Signup successful!")
    elif action == 'signup':
        while True:
            new_username = input("Enter new username: ").strip()
            if not user_exists(new_username):
                break
            print("Username already exists, try another")
        new_password = input("Enter password: ").strip()
        add_user(new_username, new_password)
        print("Signup successful!")
