import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { Categoria, Receita } from '../../../models/receita.model';
import { ReceitaService } from '../../../services/receita.service';
import { InputNumberModule } from "primeng/inputnumber";
import { Textarea, TextareaModule } from "primeng/textarea";


interface CategoriaOption {
  label: string;
  value: Categoria;
}

@Component({
  selector: 'app-receita-cadastro',
  imports: [
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    MessageModule,
    SelectModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    InputNumberModule,
    TextareaModule
],
  templateUrl: './receita-cadastro.html',
  styleUrl: './receita-cadastro.scss',
})
export class ReceitaCadastro {
  private fb = inject(FormBuilder);
  private receitaService = inject(ReceitaService);

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    categoria: [Categoria.DOCE, Validators.required],
    tempoPreparo: [0, [Validators.required, Validators.min(1)]],
    porcoes: [0, [Validators.required, Validators.min(1)]],
    ingredientes: [this.fb.array(['']), Validators.required],
    modoPreparo: ['', [Validators.required, Validators.minLength(10)]]
  });

  categoriasPossiveis: CategoriaOption[] = Object.values(Categoria).map((categoria) => ({
    label: categoria,
    value: categoria
  }))


  salvarReceita() {

  }
}
