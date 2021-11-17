import { Component, Input, OnInit } from '@angular/core';
import { Dia } from '../dia.model';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  @Input()
  dia!: Dia;

  constructor() { }

  ngOnInit(): void {
  }

}
