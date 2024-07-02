import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmithService } from '../services/b1smith.service';
import { LolaService } from '../services/b2lola.service';
import { MarcoService } from '../services/c1marco.service';
import { PaulaService } from '../services/c2paula.service';
import { WilliamsService } from '../services/d1williams.service';
import { ThompsonTompsom } from '../services/d2thompson.service';
import { MarioService } from '../services/f1mario.service';
import { InesService } from '../services/f2ines.service';
import { PabloService } from '../services/n1pablo.service';
import { AlbertoService } from '../services/n2alberto.service';
import { PepeService } from '../services/p1pepe.service';
import { StanService } from '../services/p2stan.service';
import { MariaService } from '../services/t1maria.service';
import { AndersonService } from '../services/t2anderson.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  imports: [
    NzTableModule, 
    NzPaginationModule, 
    NzCardModule, 
    NzGridModule, 
    CommonModule
  ]
})
export class HistoryComponent implements OnInit {
  characters: any[] = []; 
  currentPage: number = 1;
  charactersPerPage: number[] = [2, 4, 4, 3, 1]; 
  totalPages: number = this.charactersPerPage.length;

  constructor(
    private smithService: SmithService,
    private lolaService: LolaService,
    private marcoService: MarcoService,
    private paulaService: PaulaService,
    private williamsService: WilliamsService,
    private thompsonService: ThompsonTompsom,
    private marioService: MarioService,
    private inesService: InesService,
    private pabloService: PabloService,
    private albertoService: AlbertoService,
    private pepeService: PepeService,
    private stanService: StanService,
    private mariaService: MariaService,
    private andersonService: AndersonService
  ) {}

  ngOnInit(): void {
    
    this.characters.push({ name: 'Marco', info: this.marcoService.getCitizen().name });
    this.characters.push({ name: 'Paula', info: this.paulaService.getCitizen().name });
    this.characters.push({ name: 'Williams', info: this.williamsService.treatPatients() });
    this.characters.push({ name: 'Thompson', info: this.thompsonService.diagnosePatients() });
    this.characters.push({ name: 'Mario', info: this.marioService.farm() });
    this.characters.push({ name: 'Ines', info: this.inesService.farm() });
    this.characters.push({ name: 'Pablo', info: this.pabloService.sellDrugs() });
    this.characters.push({ name: 'Alberto', info: this.albertoService.sellDrugs() });
    this.characters.push({ name: 'Pepe', info: this.pepeService.patrolStreets() });
    this.characters.push({ name: 'Stan', info: this.stanService.patrolStreets() });
    this.characters.push({ name: 'Maria', info: this.mariaService.teachClass() });
    this.characters.push({ name: 'Anderson', info: this.andersonService.conductClass() });
    this.characters.push({ name: 'Smith', info: this.smithService.conductBusiness() });
    this.characters.push({ name: 'Lola', info: this.lolaService.manageCompany() });
  }

  
  getCharactersForPage(pageNumber: number): any[] {
    const startIndex = this.charactersPerPage.slice(0, pageNumber - 1).reduce((a, b) => a + b, 0);
    const count = this.charactersPerPage[pageNumber - 1];
    return this.characters.slice(startIndex, startIndex + count);
  }
}
