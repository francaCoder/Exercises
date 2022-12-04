m1 = float(input("Qual é o metro?"))
print("Sua metragem em cm é de {:.2f}".format(m1),end=" sem o .")
print(" e sua metragem em mm é de {:.3f}". format(m1),end=" sem o .")

#OU

m1 = float(input("Uma distância em metros"))
cm = m1 * 100
mm = m1 * 1000
print("A medida de {} metros corresponde a:\n {:.0f}cm \n {:.0f}mm".format(m1,cm,mm))



