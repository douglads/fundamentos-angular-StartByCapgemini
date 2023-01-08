import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenome = "Machado";
  mostrarNomeCompleto(nomeCompleto: string){
    alert(`O nome completo é: ${nomeCompleto}`)
  }
}
