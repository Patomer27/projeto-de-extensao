"""
====================================
EXERCÍCIO 3 - CONVERSÃO DE TEMPERATURA
====================================

Peça uma temperatura em Celsius e
converta para Fahrenheit.
"""

# double (float) -> temperatura em Celsius
celsius = float(input("Digite a temperatura em Celsius: "))

# double (float) -> temperatura convertida
fahrenheit = (celsius * 9 / 5) + 32

print("Temperatura em Fahrenheit: " + str(fahrenheit))