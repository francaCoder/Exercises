n1 = float(input("Digite a primeira nota"))
n2 = float(input("Digite a segunda nota"))
n3 = float(input("Digite a terceira nota"))
print("A média desse aluno é {}".format((n1+n2+n3)/3))

#Usando a ordem de precedência onde o que está entre () dentro do .format é resolvido primeiro e a / depois
#

#OU

n1 = float(input("digite a primeira nota"))
n2 = float(input("digite a segunda nota"))
n3 = float(input("digite a terceira nota"))
m = (n1 + n2 + n3)/3
print("A média entre {}, {} e {} é igual a {}".format(n1,n2,n3,m))

#Se a escola usar apenas uma casa depois do ponto flutuante, basta colocar ":.1f" dentro das mascaras de notas
#que ficará apenas com uma casa e já fará o arredondamento de nota automaticamente.







