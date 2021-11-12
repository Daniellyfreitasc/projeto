import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public form: FormGroup = new FormGroup({
    'Aberturasegunda': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'Fechamentosegunda': new FormControl('', [Validators.minLength(4)]),
    'Aberturaterca': new FormControl('', [Validators.minLength(4)]),
    'Fechamentoterca': new FormControl('', [Validators.minLength(4)]),
    'Aberturaquarta': new FormControl('', [Validators.minLength(4)]),
    'Fechamentoquarta': new FormControl('', [Validators.minLength(4)]),
    'Aberturaquinta': new FormControl('', [Validators.minLength(4)]),
    'Fechamentoquinta': new FormControl('', [Validators.minLength(4)]),
    'Aberturasexta': new FormControl('', [Validators.minLength(4)]),
    'Fechamentosexta': new FormControl('', [Validators.minLength(4)]),
    'Aberturasab': new FormControl('', [Validators.minLength(4)]),
    'Fechamentosab': new FormControl('', [Validators.minLength(4)]),
    'Aberturadom': new FormControl('', [Validators.minLength(4)]),
    'Fechamentodom': new FormControl('', [Validators.minLength(4)])
  })

  constructor(private formBuilder: FormBuilder ) {
    
  }

 
  
}
