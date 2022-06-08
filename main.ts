import { Aluno } from "./aluno";
import prompt from 'prompt-sync';

let control: Aluno = new Aluno(0, 0, 0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log('==============Menu===============');
    console.log('1. Preencher Notas Bimestrais    ');
    console.log();
    console.log('9. Sair                          ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
            let b1: number = +teclado('Digite a Nota do Primeiro Bimestre: ');
            let b2: number = +teclado('Digite a Nota do Segundo Bimestre: ');
            control.permitida(0, b1, b2);
            control.prova();
            break;
        default:
            break;
    }
}