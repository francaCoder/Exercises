n1 = float(input("Quantos reais você tem?"))
print("Levando em consideração de que 1 dólar hoje equivale a R$5,17, você pode comprar:")
print("{:.2f}".format(n1/5.17),end=" Dólares")

#OU

real = float(input("Quantos reais você tem? R$"))
dolar = real / 5,17
print("Com R${:.2f} você pode comprar US${:.2f}".format(real,dolar))







