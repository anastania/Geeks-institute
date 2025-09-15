from datetime import datetime

birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
birthdate_dt = datetime.strptime(birthdate, "%d/%m/%Y")
today = datetime.today()

age = today.year - birthdate_dt.year - ((today.month, today.day) < (birthdate_dt.month, birthdate_dt.day))
candles = age % 10

cake = f"""
       {"i"*candles:^13}
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""

print(cake)
if (birthdate_dt.year % 4 == 0 and (birthdate_dt.year % 100 != 0 or birthdate_dt.year % 400 == 0)):
    print(cake)
