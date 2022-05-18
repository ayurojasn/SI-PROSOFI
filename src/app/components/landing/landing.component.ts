import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [DatePipe]
})
export class LandingComponent implements OnInit {

  now  = new Date();
  // public docente: Docenxte;
  constructor(private datePipe: DatePipe) {
    // this.now = this.datePipe.transform(this.now, 'yyyy-MM-dd')!;
    // this.docente = {idDocente: 3, facultad: "asdfasdf"};
  }

  ngOnInit(): void {

  }

}
