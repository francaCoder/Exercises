#Crie um programa que leia um número real e mostre apenas a sua porção inteira.
#Ex: digite seu número-6.127: A parte inteira de 6.127 é 6

from math import trunc
n = float(input("Digite seu número"))
t = trunc(n)
print("A parte inteira de {} é {}".format(n,t))

#OU

from math import trunc
n = float(input("Digite seu número"))
print("A parte inteira de {} é {}".format(n,trunc(n)))

#ou

n = float(input("Digite seu número"))
print("A parte inteira de {} é {}.".format(n,int(n)))

#A terceira opção pede a parte inteira do número digitado, é uma forma de fazer sem importar a biblioteca.
