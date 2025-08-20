class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False
    
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        else:
            raise Exception(" Mauvais identifiant ou mot de passe")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception(" Vous devez vous connecter avant")
        if amount <= 0:
            raise Exception(" Le dépôt doit être positif")
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception(" Vous devez vous connecter avant")
        if amount <= 0:
            raise Exception(" Le retrait doit être positif")
        self.balance -= amount
        return self.balance


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception(" Vous devez vous connecter avant")
        if amount <= 0:
            raise Exception(" Le retrait doit être positif")
        if self.balance - amount < self.minimum_balance:
            raise Exception(" Solde insuffisant (minimum requis)")
        self.balance -= amount
        return self.balance


class ATM:
    def __init__(self, account_list, try_limit=2):
        if not isinstance(account_list, list) or not all(isinstance(a, BankAccount) for a in account_list):
            raise Exception(" account_list doit contenir des objets BankAccount")
        if try_limit <= 0:
            try_limit = 2
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            choice = input("\n=== MENU PRINCIPAL ===\n1. Se connecter\n2. Quitter\nChoix: ")
            if choice == "1":
                username = input("Nom d'utilisateur: ")
                password = input("Mot de passe: ")
                self.log_in(username, password)
            elif choice == "2":
                print(" Au revoir!")
                break

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                if account.authenticate(username, password):
                    print("Connexion réussie!")
                    self.show_account_menu(account)
                    return
            except:
                continue
        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print(" Trop d'essais. Programme terminé.")
            exit()
        else:
            print(" Identifiants incorrects, réessayez.")

    def show_account_menu(self, account):
        while True:
            choice = input("\n=== MENU COMPTE ===\n1. Dépôt\n2. Retrait\n3. Déconnexion\nChoix: ")
            if choice == "1":
                amt = int(input("Montant à déposer: "))
                print(" Nouveau solde:", account.deposit(amt))
            elif choice == "2":
                amt = int(input("Montant à retirer: "))
                print(" Nouveau solde:", account.withdraw(amt))
            elif choice == "3":
                print(" Déconnecté.")
                break

if __name__ == "__main__":
    acc1 = BankAccount("anas", "1234", 500)
    acc2 = MinimumBalanceAccount("omar", "abcd", 1000, minimum_balance=200)
    
    atm = ATM([acc1, acc2], try_limit=3)
