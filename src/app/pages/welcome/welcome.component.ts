import { RouterOutlet } from '@angular/router';
import { HistoryComponent } from '../../historyy/history.component'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [HistoryComponent, RouterOutlet],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
