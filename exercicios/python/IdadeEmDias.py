"""
====================================
EXERCÍCIO 2 - IDADE EM DIAS
====================================

Peça ao usuário sua idade e calcule
aproximadamente quantos dias ele viveu.
"""

# int => idade informada pelo usuário
idade = int(input("Digite sua idade: "))

# int => cálculo dos dias vividos
diasVividos = idade * 365

print("Você já viveu aproximadamente " + str(diasVividos) + " dias.")