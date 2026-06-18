/*
====================================
EXERCÍCIO 3 - CONVERSÃO DE TEMPERATURA
====================================

Peça uma temperatura em Celsius e
converta para Fahrenheit.
*/

import java.util.Scanner;

public class Temperatura {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        System.out.print("Digite a temperatura em Celsius: ");

        // double -> temperatura em Celsius
        double celsius = entrada.nextDouble();

        // double -> temperatura convertida
        double fahrenheit = (celsius * 9 / 5) + 32;

        System.out.println("Temperatura em Fahrenheit: " + fahrenheit);

        entrada.close();
    }
}