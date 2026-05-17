import { ReceitaTransferencia } from './../../../models/receita.model';
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
import { ChipModule } from "primeng/chip";
import { Router } from '@angular/router';


interface CategoriaOption {
  label: string;
  value: Categoria;
}

interface IngredienteOption {
  id: number;
  value: string;
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
    TextareaModule,
    ChipModule
],
  templateUrl: './receita-cadastro.html',
  styleUrl: './receita-cadastro.scss',
})
export class ReceitaCadastro {
  private fb = inject(FormBuilder);
  private receitaService = inject(ReceitaService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    categoria: [Categoria.DOCE, Validators.required],
    tempoPreparo: [0, [Validators.required, Validators.min(1)]],
    porcoes: [0, [Validators.required, Validators.min(1)]],
    ingredienteAtual: ['', []],
    modoPreparo: ['', [Validators.required, Validators.minLength(10)]]
  });

  categoriasPossiveis: CategoriaOption[] = Object.values(Categoria).map((categoria) => ({
    label: categoria,
    value: categoria
  }))

  ocorreuErro: boolean = false;
  ingredienteLista: IngredienteOption[] = [];
  removerIngrediente(ingrediente: IngredienteOption) {
    this.ingredienteLista = this.ingredienteLista.filter((i) => i.id !== ingrediente.id);
  }

  onIngredienteAdicionado() {
    const novoIngrediente = this.form.get('ingredienteAtual')?.value.trim() || '';
    if (novoIngrediente === '') {
      return;
    }
    this.ingredienteLista.push({ id: this.ingredienteLista.length + 1, value: novoIngrediente });

    this.form.get('ingredienteAtual')?.setValue('');
  }

  salvarReceita() {
    if (this.form.valid && this.ingredienteLista.length > 0) {
      const novaReceita: ReceitaTransferencia = {
        nome: this.form.get('nome')?.value,
        categoria: this.form.get('categoria')?.value,
        tempoPreparo: this.form.get('tempoPreparo')?.value,
        porcoes: this.form.get('porcoes')?.value,
        ingredientes: this.ingredienteLista.map(i => i.value),
        modoPreparo: this.form.get('modoPreparo')?.value,
      }

      this.receitaService.criar(novaReceita).subscribe({
        next: (_receitaCriada) => {
          this.form.reset();
          this.router.navigate(['/receitas'], {queryParams: {cadastroSucesso: true}});
        },
        error: (error) => {
          this.ocorreuErro = true;
          console.error('Erro ao criar receita:', error);
        }
      });
    }
  }
}
