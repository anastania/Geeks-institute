# Star Wars quiz questions
questions = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def play_quiz():
    print("Welcome to the Star Wars Quiz!")
    score = 0
    incorrect = []
    
    for q in questions:
        print("\nQuestion:", q["question"])
        answer = input("Your answer: ").strip()
        
        if answer.lower() == q["answer"].lower():
            score += 1
        else:
            incorrect.append({
                "question": q["question"],
                "your_answer": answer,
                "correct": q["answer"]
            })
    
    print("\n=== Quiz Results ===")
    print(f"You got {score} questions correct!")
    print(f"You got {len(incorrect)} questions wrong")
    
    if incorrect:
        print("\nHere are the questions you missed:")
        for wrong in incorrect:
            print(f"\nQuestion: {wrong['question']}")
            print(f"Your answer: {wrong['your_answer']}")
            print(f"Correct answer: {wrong['correct']}")
    
    if len(incorrect) > 3:
        print("\nYou had more than 3 wrong answers!")
        if input("Want to try again? (yes/no): ").lower() == 'yes':
            play_quiz()

# Start the quiz
play_quiz()
