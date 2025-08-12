import random
def get_random_temp(season):
    season=season.lower()
    if season=="winter":
        temp=random.randint(-100,160)/10
        return temp
    if season=="spring":
        temp=random.randint(100,250)/10
        return temp
    if season=="summer":
        temp=random.randint(200,400)/10
        return temp
    if season=="fall" or season=="autumn":
        temp=random.randint(100,280)/10
        return temp
    temp=random.randint(-100,400)/10
    return temp
def get_season_from_month(month):
    if month==12 or month==1 or month==2:
        return"winter"
    if month==3 or month==4 or month==5:
        return"spring"
    if month==6 or month==7 or month==8:
        return"summer"
    return"fall"
def main():
    month=0
    while True:
        month_input=input("Please enter the month number (1-12): ")
        if month_input.isdigit():
            month=int(month_input)
            if month>=1 and month<=12:
                break
        print("Please enter a valid month number between 1 and 12")
    season=get_season_from_month(month)
    temperature=get_random_temp(season)
    temperature=round(temperature,1)
    print("The temperature right now is "+str(temperature)+" degrees Celsius.")
    if temperature<0:
        print("Brrr, that's freezing! Wear some extra layers today")
    if temperature>=0 and temperature<16:
        print("Quite chilly! Don't forget your coat")
    if temperature>=16 and temperature<23:
        print("Pleasant weather! Perfect for outdoor activities")
    if temperature>=23 and temperature<32:
        print("Warm weather! Don't forget to stay hydrated")
    if temperature>=32:
        print("It's very hot! Stay in the shade and drink plenty of water")
if __name__=="__main__":
    main()
