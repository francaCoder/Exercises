#Escreva um código que pergunte quantos dias o veículo está alugado e a quantidade de Km que o veículo
#rodou, em seguida, calcule o total a pagar. Considere que um dia custa R$60,00 e cada Km custa R$0,15.


dias = int(input("O veículo foi alugado por quantos dias? "))
km = float(input("Quantos km o veículo rodou?"))
pago = (dias * 60) + (km * 0.15)
print("O total a pagar é de R${:.2f}".format(pago))

#OU

d = int(input("Quantos dias o veículo está alugado?"))
km = float(input("quantos km o veículo rodou?"))
pd = d*60
pkm = km*0.15
s = pd + pkm
print("O total a pagar é de R${}".format(s))






