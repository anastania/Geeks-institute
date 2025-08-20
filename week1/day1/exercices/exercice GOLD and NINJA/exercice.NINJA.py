# Exercise 1:
print("Exercise 1 Results:")
print("3 <= 3 < 9:", 3 <= 3 < 9)
print("3 == 3 == 3:", 3 == 3 == 3)
print("bool(0):", bool(0))
print("bool(5 == '5'):", bool(5 == "5"))
print("bool(4 == 4) == bool('4' == '4'):", bool(4 == 4) == bool("4" == "4"))
print("bool(bool(None)):", bool(bool(None)))

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

# Exercise 2: 
print("\nExercise 2: Longest sentence without 'A'")
longest_sentence = ""

while True:
    sentence = input("\nEnter a sentence without the letter 'A' (or press Enter to quit): ")
    if not sentence:
        break
    
    if 'a' in sentence.lower():
        print("Sorry, your sentence contains the letter 'A'!")
        continue
        
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print(f"Congratulations! New longest sentence ({len(sentence)} characters)!")
    else:
        print(f"Try again! Current longest is {len(longest_sentence)} characters.")

# Exercise 3: 
print("\nExercise 3: Paragraph Analysis")

paragraph = """The Python programming language, created by Guido van Rossum, has become one of the most popular 
programming languages worldwide. It emphasizes code readability with its notable use of significant whitespace. 
Python's design philosophy embraces simplicity and versatility. Many developers choose Python for its extensive 
standard library and rich ecosystem of third-party packages."""

char_count = len(paragraph)
word_count = len(paragraph.split())
sentences = [s.strip() for s in paragraph.split('.') if s.strip()]
sentence_count = len(sentences)
unique_words = len(set(paragraph.lower().split()))
non_whitespace = len([c for c in paragraph if not c.isspace()])
avg_words_per_sentence = word_count / sentence_count
non_unique_words = word_count - unique_words

print("\nParagraph Analysis Results:")
print(f"Total characters: {char_count}")
print(f"Total sentences: {sentence_count}")
print(f"Total words: {word_count}")
print(f"Unique words: {unique_words}")
print(f"Non-whitespace characters: {non_whitespace}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Non-unique words: {non_unique_words}")
