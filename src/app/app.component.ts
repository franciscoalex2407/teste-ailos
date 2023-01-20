import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Teste Ailos';

  constructor(private toastr: ToastrService) {}

  termo: string = '';

  cooperados: any[] = [
    {
      nome: 'Francisco Alex Pereira da Silva',
      cpf: '04502765112',
      situacao: 'regular',
      contas: [
        {
          title: 'Conta aplicação',
          conta: '557932-4',
        },
        {
          title: 'Conta corrent',
          conta: '7786461-8',
        },
      ],
    },
    {
      nome: 'Francisco Alex Pereira da Silva',
      cpf: '04502765113',
      situacao: 'irregular',
    },
  ];

  cooperado: any = {};

  submit(form: NgForm): any {
    console.log('submit', form);
    this.cooperado = {};

    let num: any = form.controls['cpf'].value;

    if (!cpf.isValid(num)) {
      return this.toastr.error('CPF inválido.');
    }

    this.cooperado = this.cooperados.find((fill) => fill.cpf.indexOf(num) > -1);
  }
}
