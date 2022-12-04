n1 = int(input("um valor"))
n2 = int(input("outro valor"))
s = n1 + n2
m = n1 * n2
d = n1 / n2
di = n1 // n2
e = n1 ** n2
print("a soma é {},\n o produto é {}\n e a divisão é {:.3f}".format(s,m,d),end=" ")
print("divisão inteira {} e potência {}".format(di,e))

#Na linha 8 entre os )) finais eu posso colocar ,end = " " end
#End recebe nada, assim a linha de código por mais que tenha 2 prints não será quebrada

#assim como eu também posso colocar no meio do código a fórmula \n
#contra barra n, por mais que o código tem uma linha ela irá quebra-la