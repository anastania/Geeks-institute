#EXERCICE 1 ----------------------------------------------------------------------------------------
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

res_dict = dict(zip(keys, values))
print(res_dict)
#EXERCICE 2 question 1----------------------------------------------------------------------------------------
family1 = { 'rick': 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost={}
for name , age in family1.items():
    if age <3 :
        cost=0
    elif 3<= age <12 : 
        cost=10
    else :
        cost=15
    total_cost[name]=cost
print(total_cost)
 #EXERCICE 2 question 2----------------------------------------------------------------------------------------
print(sum(total_cost.values()))
#EXERCICE 2 question 3----------------------------------------------------------------------------------------
# Initialize empty dictionary for the new family
new_family = {}

try:
    n = int(input("How many family members do you have? "))
    
    # Get family member details
    for i in range(n):
        name = input("What is the name of family member {}? ".format(i+1))
        while True:
            try:
                age = int(input("What is {}'s age? ".format(name)))
                break
            except ValueError:
                print("Please enter a valid age (number)")
        new_family[name] = age

    # Calculate ticket costs
    total_cost = {}
    for name, age in new_family.items():
        if age < 3:
            cost = 0
        elif 3 <= age < 12:
            cost = 10
        else:
            cost = 15
        total_cost[name] = cost

    print("Ticket costs per person:", total_cost)
    print("Total cost for the family: $", sum(total_cost.values()))

except ValueError:
    print("Please enter a valid number of family members")

#exercice3--------------------------------------------------------------
