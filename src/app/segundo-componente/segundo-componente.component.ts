import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Douglas";
  dataNascimento = "1995-01-17";
  urlImagem = "./assets/douglas.jpeg";
  mostrarDataNascimento(){
    alert(`A data de nascimento do Douglas é: ${this.dataNascimento}`)
  }
}