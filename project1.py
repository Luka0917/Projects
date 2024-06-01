print("")
print("Hello, welcome to GOA game!")
print("")

answer = input("are you ready to play (yes/no):") 
score = 0
total_q = 4
if answer.lower() == "yes":
    answer = input("1. Is GOA the best academy?:")
    if answer.lower() == "yes":
        score += 1
        print("Correct")
    else:
        print("Incorrect")

    answer = input("2. Which one: GOA or novator?:")
    if answer.lower() == "goa":
        score += 1
        print("Correct")
    else:
        print("Incorrect")

    answer = input("3. Is studying in GOA fun as well as interesting?: ")
    if answer.lower() == "yes":
        score += 1
        print("Correct")
    else:
        print("Incorrect")  

    answer = input("4. What is the enviorment like in GOA?:")
    if answer.lower() == "good" or "friendly":
        score +=1
        print("Correct")
    else:
       print("Incorrect")

print("Thank you for playing, you got " , score, "question correct.")
mark = (score/total_q) * 100

print("Mark: ", mark)
print("Goodbye")