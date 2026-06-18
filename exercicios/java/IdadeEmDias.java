/*
====================================
EXERCÍCIO 2 - IDADE EM DIAS
====================================

Peça ao usuário sua idade e calcule
aproximadamente quantos dias ele viveu.
*/

import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        System.out.print("Digite sua idade: ");

        // int => idade informada pelo usuário
        int idade = entrada.nextInt();

        // int => cálculo dos dias vividos
        int diasVividos = idade * 365;

        System.out.println("Você já viveu aproximadamente " + diasVividos + " dias.");

        entrada.close();
    }
}
