
class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []     

    def call(self, other_phone):
        """Faire un appel et l’ajouter à l’historique"""
        call_info = f"{self.phone_number} a appelé {other_phone.phone_number}"
        print(call_info)
        self.call_history.append(call_info)

    def show_call_history(self):
        """Afficher l’historique des appels"""
        print("Historique des appels :")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        """Envoyer un message à un autre téléphone"""
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message) 
        print(f"Message envoyé de {self.phone_number} à {other_phone.phone_number}: {content}")

    def show_outgoing_messages(self):
        """Afficher les messages envoyés"""
        print("Messages envoyés :")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        """Afficher les messages reçus"""
        print("Messages reçus :")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, other_number):
        """Afficher tous les messages venant d’un numéro précis"""
        print(f"Messages de {other_number} :")
        for msg in self.messages:
            if msg["from"] == other_number and msg["to"] == self.phone_number:
                print(msg)


phone1 = Phone("0600000001")
phone2 = Phone("0600000002")
phone3 = Phone("0600000003")

phone1.call(phone2)
phone2.call(phone1)
phone1.call(phone3)

phone1.show_call_history()

phone1.send_message(phone2, "Salut, ça va ?")
phone2.send_message(phone1, "Oui, et toi ?")
phone3.send_message(phone1, "Hello Anas !")

print("\n--- Historique Messages ---")
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("0600000002")
