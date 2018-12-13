from itertools import product
import random

signs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'D', 'K', 'A']
colours = ['tref', 'diamond', 'heart', 'pike']

deck_french = list(product(signs, colours))


class Deck:
    def __init__(self, cards):
        self.cards = cards

    def givecards(self, howmany):
        return random.sample(self.cards, howmany)

    def removecards(self, toberemoved):
        for item in toberemoved:
            self.cards.remove(item)


class Player:
    def __init__(self, name, budget=100):
        self.name = name
        self.budget = budget
        self.playercards = []

    def getcards(self, received):
        self.playercards.append(received)
        # print(f'CURRENT CARDS IN HAND: {self.playercards}')

    def cardinhands(self):
        return self.playercards

    def getvalue(self):
        currentvalue = 0
        for card in self.playercards:
            for value in card:
                if type(value[0]) == int:
                    currentvalue += value[0]
                else:
                    if value[0] != 'A':
                        currentvalue += 10
                    else:
                        if currentvalue <= 11:
                            currentvalue += 11
                        else:
                            currentvalue += 1
        print(currentvalue)
        return currentvalue


class Game:

    def __init__(self):
        self.player1 = Player(input('Player 1 name please'))
        self.dealer = Player('dealer', 1000)
        self.gamedeck = Deck(deck_french)
        self.start = input('Can we start?(yes)')

    def firstround(self):
        playerscards = self.gamedeck.givecards(2)
        dealercards = self.gamedeck.givecards(2)
        self.gamedeck.removecards(playerscards+dealercards)
        self.player1.getcards(playerscards)
        self.player1.getvalue()
        self.dealer.getcards(dealercards)
        self.dealer.getvalue()

    def playerhit(self):
        print('he said hit')
        playerscards = self.gamedeck.givecards(1)
        dealercards = self.gamedeck.givecards(1)
        self.gamedeck.removecards(playerscards+dealercards)
        self.player1.getcards(playerscards)
        self.player1.getvalue()
        self.dealer.getcards(dealercards)
        self.dealer.getvalue()

    def playerstay(self):
        print('he said pass')
        dealercards = self.gamedeck.givecards(1)
        self.gamedeck.removecards(dealercards)
        self.dealer.getcards(dealercards)
        self.dealer.getvalue()

    def isitover(self):
        if self.player1.getvalue() > 21 or self.dealer.getvalue() > 21:
            return True

    def whowon(self):
        if self.player1.getvalue() <= 21 and self.player1.getvalue() > self.dealer.getvalue():
            return f'the winner is {self.player1.name} with {self.player1.getvalue()} points'
        elif self.player1.getvalue() <= 21 and self.dealer.getvalue() > 21:
            return f'the winner is {self.player1.name} with {self.player1.getvalue()} points because the dealer overcharged'
        else:
            return f'the winner is {self.dealer.name} with {self.dealer.getvalue()} points'

    def printgamestatus(self):
        print(f'CURRENT STATUS\n:{self.player1.name} cards:{self.player1.cardinhands()}, with value of {self.player1.getvalue()}\n:{self.dealer.name} cards:{self.dealer.cardinhands()}, with value of {self.dealer.getvalue()}')


firstgame = Game()
if firstgame.start == 'yes':
    firstgame.firstround()
    firstgame.printgamestatus()
    tobecont = input('Do you want to hit or stay?')
    while tobecont == 'hit':
        firstgame.playerhit()
        firstgame.printgamestatus()
        if firstgame.isitover() is not True:
            tobecont = input('Do you want to hit or stay?')
        else:
            print('Game over')
            print(firstgame.whowon())
            break
    else:
        if tobecont == 'stay':
            while firstgame.isitover() is not True:
                firstgame.playerstay()
                firstgame.printgamestatus()
            else:
                print('game over')
                print(firstgame.whowon())
                firstgame.printgamestatus()
        else:
            tobecont = input('please provide hit or stay as an answer')
