"""TRANSFORMAÇÃO"""
frase = "   Curso em Vídeo Python   "
print(frase.upper().count("O")) #Vai deixar tudo maiúsculo e contar quantos "O" tem.
print(frase.rstrip())
print(frase.lstrip())
print(frase.replace("Python","amanhã"))
print(frase.lower().find("vídeo"))
print(frase.capitalize())