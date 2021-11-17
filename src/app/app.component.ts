import { DirectiveAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dia } from './dia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  

  panelOpenState = false;
  selectDisabled = false;

  dias: Dia[];

  form: FormGroup;
  constructor(private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      abertura: [""],
      fechamento: [""]
   });

   this.dias = [
     {id:1, name: "Domingo"},
     {id:2, name: "Segunda"},
     {id:3, name: "Terça"},
     {id:4, name: "Quarta"},
     {id:5, name: "Quinta"},
     {id:6, name: "Sexta"},
     {id:7, name: "Sábado"}
   ];
  } 

  ngOnInit(){


  
  
  
}

cbChange(event: any){
   console.log(event.checked);
   this.selectDisabled = event.checked;
     
   } 
     
}
