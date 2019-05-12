import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlexService } from 'src/app/services/plex/plex.service';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  @ViewChild('resolucaoForm') public resolucaoForm: NgForm;

  constructor(private plexService: PlexService) { }

  ngOnInit(): void { }
}
