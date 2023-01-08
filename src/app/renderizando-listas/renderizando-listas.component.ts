import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id : 1, nome: "Celular G30", descricao: "bom custo beneficio", esgotado : false},
    {id : 2, nome: "Celular M3", descricao: "muitas pessoas perderam dinheiro", esgotado : true},
    {id : 3, nome: "Celular XL", descricao: "Celular Grande", esgotado : false},
    {id : 4, nome: "Celular A21S", esgotado : false},
  ];
}
