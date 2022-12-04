import math
n = int(input("digite um número"))
raiz = math.sqrt(n)
print("A raiz de {} é igual a {:.2f}".format(n,raiz))

#OU

from math import sqrt
n = int(input("digite um número"))
raiz = sqrt(n)
print("A raiz de {} é igual a {:.2f}".format(n,raiz))

#Quando eu importo só uma função, não tem necessidade de colocar "math." antes.

#Import significa importar, e "math" (que significa matemática) é uma das bibliotecas que já vem instalada.
#Quando se usa o comando import você importa toda essa biblioteca, caso queria importar apenas um comando deve
#Usado outro comando: "from (nome da biblioteca)math import(nome do comando)sqrt.from math import sqrt
#após sqrt pode ser colocado "," e escolher outro comando
#Dentro da pasta math os principais comandos são
#ceil - Arredonda o número pra cima
#floor - Arredonda o número pra baixo
#trunc - Truncar o número, tira os números flutuantes depois da vírgula
#pow - Semelhante a potência
#sqrt - Raiz quadrada(square root)
#factorial - Calcula o fatorial de um número
#Todos esses comandos são ultilizados após "math."

#Caso queira importar outras bibliotecas, vá para o site oficial do python depois em reference library, ou py-pi








