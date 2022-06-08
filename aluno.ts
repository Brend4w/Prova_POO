export class Aluno {
    constructor(
        private _bimestre1: number,
        private _bimestre2: number,
        private _nota: number

    ) { }


    public get bimestre1(): number {
        return this._bimestre1;
    }


    public set bimestre1(bimestre1: number) {
        this._bimestre1 = bimestre1;
    }


    public get bimestre2(): number {
        return this._bimestre2;
    }


    public set bimestre2(bimestre2: number) {
        this._bimestre2 = bimestre2;
    }


    public get nota(): number {
        return this._nota;

    }

    public set nota(nota: number) {
        this._nota = nota;
    }

    permitida(valor: number, b1: number, b2: number): void {
        this.nota = valor;
        this._bimestre1 = b1;
        this._bimestre2 = b2;

    }

    prova(): void {
        this.nota = (this.bimestre1 + this.bimestre2) / 2;
        if (this.nota <= 59.9) {
            console.log('ALUNO REPROVADO!  ');
        } else {
            console.log('ALUNO APROVADO!  ');
        }
        console.log('NOTA FINAL DO ALUNO:  ' + this.nota);
        console.log('')
    }



}