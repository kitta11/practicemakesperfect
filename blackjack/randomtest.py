from itertools import product
import random

signs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'D', 'K', 'A']
colours = ['tref', 'diamond', 'heart', 'pike']

deck_french = list(product(signs, colours))
print(deck_french)
random.shuffle(deck_french)
print('**************')
print(deck_french)

print(deck_french.pop(0))
print(deck_french)
