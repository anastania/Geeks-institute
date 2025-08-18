def display_board(board):
    print('\n')
    print(f' {board[0]} | {board[1]} | {board[2]} ')
    print('-----------')
    print(f' {board[3]} | {board[4]} | {board[5]} ')
    print('-----------')
    print(f' {board[6]} | {board[7]} | {board[8]} ')
    print('\n')

def player_input(player, board):
    while True:
        try:
            position = int(input(f'Player {player}, enter position (1-9): ')) - 1
            if 0 <= position <= 8 and board[position] == ' ':
                return position
            else:
                print("Invalid position. Try again.")
        except ValueError:
            print("Please enter a number between 1 and 9.")

def check_win(board):
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ]
    
    for combo in win_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != ' ':
            return True
    return False

def is_board_full(board):
    return ' ' not in board

def play():
    board = [' ' for _ in range(9)]
    current_player = 'X'
    
    print("Welcome to Tic Tac Toe!")
    print("Positions are numbered from 1-9, left to right, top to bottom.")
    
    while True:
        display_board(board)
        position = player_input(current_player, board)
        board[position] = current_player
        if check_win(board):
            display_board(board)
            print(f'Player {current_player} wins!')
            break
        if is_board_full(board):
            display_board(board)
            print("It's a tie!")
            break
        current_player = 'O' if current_player == 'X' else 'X'
if __name__ == "__main__":
    play()
