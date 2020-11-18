import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Starships } from 'src/app/model/starships';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
})
export class StarshipDetailsComponent implements OnInit {
  starship: Starships;

  @Input() num: number;
  constructor(
    public activeModal: NgbActiveModal,
    public swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.swapiService.getStarship(this.num).subscribe((data) => {
      this.starship = data;
    });
  }
}
