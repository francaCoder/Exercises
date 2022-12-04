"""FATIAMENTO"""
#   frase =  "Curso-em-video-phyton" Essa frase é chamada de cadeia de texto.
# Vamos aprender sobre fatiamento de frases. Essa frase possui 21 caracteres, pois a primeira letra é o 0.
# E também os espaços entre elas também preenchem um quadrado
# Podemos ultilizar as fórmulas:
# "frase(9)" Mostrará o caractere 9
# "frase(9:13) mostrará do 9 até o 12, pois ele para uma casa antes do número final
# "frase(9:21) Seria usado caso que quisesse mostrar do v até o fim da frase, pois acaba no 20 e colocando 21 desconta 1
# "frase(9:21:2) Vai mostrar do 9 ao 21 pulando duas casas.ex: v*d*o*p*y*o
# "frase(:5) se eu colocar apenas o último número, nesse caso ele vai mostrar do 0 até o 4
# "frase(15:) ele mostrará do 15 até o final
# "frase(9::3) ele mostrará do 9 até o final pulando de 3 em 3 casas

"""ANÁLISE"""
# "len(frase) mostrará quantos caracteres sem a sua frase, do 0 aou ultimo caractere.
# "frase.count("o") contará quantos "o" tem na sua frase. count = conte.
# "frase.count("o,0,13" contará quantos "o" tem do caractere 0 até o 12, lembrando que desconta 1
# "frase.find(deo) encontrará o lugar da frase que está escrito "deo" e te mostrará o número do caractere "d" nesse caso
# "frase.find(palavra que nao existe) Caso digite uma palavra não existente, a resposta será -1
# "curso"in frase Caso a palavra exista dentro a frase a resposta será true, do contrário será false

"""TRANSFORMAÇÃO"""
# "frase.replace("python,android") Troca a palavra python por a próxima palavra que você escolher. Android no caso
# "frase.upper()" Todas as letras da frase ficam maiúsculas
# "frase.lower()" Todas as letras da frase ficam minúsculas
# "frase.capitalize()" Todas as letras ficam minúsculas e só a primeira fica maiúscula
# "frase.title()" Todas as letras iniciais de palavras ficam maiúsculas
# "frase.strip()" Remove todos os espaços inúteis do começo/fim
# "frase.rstrip()" Remove todos espaços inúteis no final da frase a direita
# "frase.lstrip()" Remove todos espaços inúteis no final da frase a esquerda

"""DIVISÃO"""

# "frase.split()" Todas as palavras são separadas da frase e cada palavra se torna uma frase reiniciando a coontagem
# " "-".join(frase) " Junta todas as palavras formando uma única só frase novamente usando o separador "-"