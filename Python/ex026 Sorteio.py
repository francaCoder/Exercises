#O professor quer sortear 1 de seus 4 alunos para ir resolver o exercício no quadro. Faça um programa
#que ajude ele, lendo o nome deles e escrevendo o nome do escolhido.

from random import choice
n1 = str(input("Primeiro nome"))
n2 = str(input("Segundo nome"))
n3 = str(input("terceiro nome"))
n4 = str(input("Quarto nome"))
lista = [n1,n2,n3,n4]
escolhido = choice(lista)
print("O(a) aluno(a) escolhido(a) foi {}".format(escolhido))

#Dessa vez usamos a biblioteca de random e puxamos apenas o choice-escolha, para escolher uma pessoa da lista.
#Uma lista deve ser feita entre colchetes [] e não entre parenteses() ou máscaras {}.


