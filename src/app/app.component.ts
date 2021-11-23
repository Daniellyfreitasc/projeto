import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  form: FormGroup | any;

  
  aberto: boolean = false;
  
  constructor(private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      aberto: [],
      abertura: [""],
      fechamento: [""]
    });
    
  } 

  ngOnInit(){
    
  }

  onSelected(event: MatCheckboxChange) { 
    // Se desmarcar o dia
    if (!event.checked) {
      this.form.reset();
      this.form.get("aberto").patchValue(false);
    };
  }
}
