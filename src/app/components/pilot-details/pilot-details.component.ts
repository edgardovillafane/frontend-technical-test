import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SwapiService } from 'src/app/services/swapi.service';
import { Pilots } from 'src/app/model/pilots';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.scss'],
})
export class PilotDetailsComponent implements OnInit {
  pilot: Pilots;
  @Input() num: number;
  constructor(
    public activeModal: NgbActiveModal,
    public swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.swapiService.getPilot(this.num).subscribe((data) => {
      this.pilot = data;
    });
  }
}
