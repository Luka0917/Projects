# Bank System:

# 1.create account
# 2.Deposit
# 3.Withdraw
# 4.Exit

print("")
print("Wellcome! to my bank")
print("")

running = True

while running:
    print("")
    print("1. Create account")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")
    print("")

    def acount():
        print("")
        print("Create an acount")
        name = input("Enter your name:")
        password = input("Enter your password:")
        print("")
        print("Account is set!")

    ans = int(input("Choose number to make an operation:"))

    if ans == 1:
        acount()
    elif ans == 2:
        balance = 0
        print("")
        dep = int(input("Enter your deposit $:"))
        while dep <= 0:
            print("")
            print("Wrong input!")
            dep = int(input("Enter your deposit $:"))
        balance += dep
        print("")
        print(f"Your balance: {balance}$")
    elif ans == 3:
        print("")
        wd = int(input("Enter your withdraw $:"))
        while wd <= 0:
            print("")
            print("Wrong input!")
            wd = int(input("Enter your withdraw $:"))
        else:
            balance -= wd
            print(f"Your balance: {balance}")
    elif ans == 4:
        print("")
        print("Goodbye!")
        print("")
        running = False
    else:
        print("Wrong input!")