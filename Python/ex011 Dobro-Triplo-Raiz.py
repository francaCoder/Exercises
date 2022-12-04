n1 = int(input("Digite um valor"))
print("O dobro de {}".format(n1),end=" é ")
print(n1*2)
print("O triplo de {}".format(n1),end=" é ")
print(n1*3)
print("a raiz quadrada de {}".format(n1),end=" é ")
print(n1**(1/2))

#OU

n1 = int(input("Digite um valor"))
d = n1 * 2
t = n1 * 3
r = n1 ** (1/2)
print("O dobro de {} vale {}.".format(n1,d))
print("O triplo de {} vale {}".format(n1,t))
print("A raiz quadrada de {} vale {:.2f}".format(n1,r))

#OU

n1 = int(input("Digite um valor"))
print("O dobro de {} vale {}.\n O triplo de {} vale {}.\n A raiz quadrada de {} é {:.2f}.".format(n1,n1*2,n1,n1*3,n1,n1**(1/2)))

#A Raiz quadrada pode ser calculada por "(n1**(1/2)" ou por "pow(n1, (1/2))"
