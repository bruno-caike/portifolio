import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contact:any = null;

  constructor(private contatoService:ContatoService) { }

  ngOnInit(): void {
    this.contatoService.getContato().subscribe(data => {
      this.contact = data;
    });
  }

}
