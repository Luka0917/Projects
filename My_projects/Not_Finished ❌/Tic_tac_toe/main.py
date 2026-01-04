def display_tic_tac_toe_arr(arr):
    print("=============")
    for i in range(len(arr)):
        row = "|"
        for x in range(len(arr[i])):
            row += f" {str(arr[i][x])} |"
        print(row)
    print("=============")


def check_arr(arr):
    for i in range(len(arr)):
        for x in range(len(arr[i])):
            if type(arr[i][x]) == int:
                return True
    return False


def create_rows_n_cols(player):
    row = 0
    column = 0
    if player >= 1 and player <= 3: row = 0
    elif player >= 4 and player <= 6: row = 1
    else: row = 2
        
    if player == 1 or player == 4 or player == 7: column = 0
    elif player == 2 or player == 5 or player == 8: column = 1
    else: column = 2

    return [row, column]


print("\nWelcome To the Tic Tac Toe game!\n")
print("Choose Game Mode:")
print("1. 2_player")
print("2. bot")
choice = input("Enter your choice(1 or 2): ")

while choice != "1" and choice != "2":
    print("Wrong Input!")
    choice = input("Enter your choice(1 or 2): ")

if choice == "1":
    print('\nYou Choosed "1. 2_player"\n')

    tic_tac_toe_arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    display_tic_tac_toe_arr(tic_tac_toe_arr)

    print("\nYou must enter cooridnates to put your turn(1-9)")

    while check_arr(tic_tac_toe_arr):
        player_1 = int(input("Enter Coordinate(X): "))
        while player_1 > 9 or player_1 < 0:
            print("Wrong Input!")
            player_1 = int(input("Enter Coordinate(X): "))

        rows_n_cols_player_1 = create_rows_n_cols(player_1)
        row_player_1 = rows_n_cols_player_1[0]
        column_player_1 = rows_n_cols_player_1[1]

        tic_tac_toe_arr[row_player_1][column_player_1] = "X"
        display_tic_tac_toe_arr(tic_tac_toe_arr)

        player_2 = int(input("Enter Coordinate(O): "))
        while player_2 > 9 or player_2 < 0:
            print("Wrong Input!")
            player_2 = int(input("Enter Coordinate(O): "))

        rows_n_cols_player_2 = create_rows_n_cols(player_2)
        row_player_2 = rows_n_cols_player_2[0]
        column_player_2 = rows_n_cols_player_2[1]

        tic_tac_toe_arr[row_player_2][column_player_2] = "O"
        display_tic_tac_toe_arr(tic_tac_toe_arr)

    print('end')


if choice == "2":
    print('\nYou Choosed "2. bot"')