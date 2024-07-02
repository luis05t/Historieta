import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';  
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

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let smithServiceMock: jasmine.SpyObj<SmithService>;
  let lolaServiceMock: jasmine.SpyObj<LolaService>;
  let marcoServiceMock: jasmine.SpyObj<MarcoService>;
  let paulaServiceMock: jasmine.SpyObj<PaulaService>;
  let williamsServiceMock: jasmine.SpyObj<WilliamsService>;
  let thompsonServiceMock: jasmine.SpyObj<ThompsonTompsom>;
  let marioServiceMock: jasmine.SpyObj<MarioService>;
  let inesServiceMock: jasmine.SpyObj<InesService>;
  let pabloServiceMock: jasmine.SpyObj<PabloService>;
  let albertoServiceMock: jasmine.SpyObj<AlbertoService>;
  let pepeServiceMock: jasmine.SpyObj<PepeService>;
  let stanServiceMock: jasmine.SpyObj<StanService>;
  let mariaServiceMock: jasmine.SpyObj<MariaService>;
  let andersonServiceMock: jasmine.SpyObj<AndersonService>;

  beforeEach(async () => {
    smithServiceMock = jasmine.createSpyObj('SmithService', ['method1', 'method2']);
    lolaServiceMock = jasmine.createSpyObj('LolaService', ['method1', 'method2']);
    marcoServiceMock = jasmine.createSpyObj('MarcoService', ['method1', 'method2']);
    paulaServiceMock = jasmine.createSpyObj('PaulaService', ['method1', 'method2']);
    williamsServiceMock = jasmine.createSpyObj('WilliamsService', ['method1', 'method2']);
    thompsonServiceMock = jasmine.createSpyObj('ThompsonTompsom', ['method1', 'method2']);
    marioServiceMock = jasmine.createSpyObj('MarioService', ['method1', 'method2']);
    inesServiceMock = jasmine.createSpyObj('InesService', ['method1', 'method2']);
    pabloServiceMock = jasmine.createSpyObj('PabloService', ['method1', 'method2']);
    albertoServiceMock = jasmine.createSpyObj('AlbertoService', ['method1', 'method2']);
    pepeServiceMock = jasmine.createSpyObj('PepeService', ['method1', 'method2']);
    stanServiceMock = jasmine.createSpyObj('StanService', ['method1', 'method2']);
    mariaServiceMock = jasmine.createSpyObj('MariaService', ['method1', 'method2']);
    andersonServiceMock = jasmine.createSpyObj('AndersonService', ['method1', 'method2']);

    await TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      providers: [
        { provide: SmithService, useValue: smithServiceMock },
        { provide: LolaService, useValue: lolaServiceMock },
        { provide: MarcoService, useValue: marcoServiceMock },
        { provide: PaulaService, useValue: paulaServiceMock },
        { provide: WilliamsService, useValue: williamsServiceMock },
        { provide: ThompsonTompsom, useValue: thompsonServiceMock },
        { provide: MarioService, useValue: marioServiceMock },
        { provide: InesService, useValue: inesServiceMock },
        { provide: PabloService, useValue: pabloServiceMock },
        { provide: AlbertoService, useValue: albertoServiceMock },
        { provide: PepeService, useValue: pepeServiceMock },
        { provide: StanService, useValue: stanServiceMock },
        { provide: MariaService, useValue: mariaServiceMock },
        { provide: AndersonService, useValue: andersonServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
