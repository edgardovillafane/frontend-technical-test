import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Pilots } from 'src/app/model/pilots';
import { Starships } from 'src/app/model/starships';
import { Films } from 'src/app/model/films';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';
import { PilotDetailsComponent } from '../pilot-details/pilot-details.component';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.scss'],
})
export class PilotListComponent implements OnInit {
  pilots: Pilots[];
  starships: Starships[];
  allFilms: Films[] = [];
  allStarships: any[] = [];
  relatedFilms: string[] = [];
  relatedPilots: string[] = [];
  qtyPagesPilots: number;
  qtyPagesStarships: number;
  numPage: number;

  constructor(
    private modalService: NgbModal,
    public swapiService: SwapiService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.swapiService.getFilms().subscribe((data) => {
      this.allFilms = data.results;
      //callback method for merge in an new array all People pages from API
      this.joinStarshipsPagination();
    });
  }

  joinStarshipsPagination() {
    this.swapiService.getStarships(1).subscribe((data) => {
      //getting quantity of pages from API
      this.qtyPagesStarships = Math.ceil(data.count / 10);
      //fire to API to get each page Json
      for (let page = 1; page <= this.qtyPagesStarships; page++) {
        this.getAllStarships(page);
      }
    });
  }
  getAllStarships(page: number) {
    this.swapiService.getStarships(page).subscribe((data) => {
      data.results.forEach((element) => {
        //populating a new array with name and url of Pilots
        this.allStarships.push({ name: element.name, url: element.url });
      });
      if (data.next == null) {
        //after last page continue to Pilots List
        this.getPilots();
      }
    });
  }

  getPilots() {
    this.numPage = this.actRoute.snapshot.params.id;
    this.swapiService.getAllPilots(this.numPage).subscribe((data) => {
      this.qtyPagesPilots = Math.ceil(data.count / 10);
      this.pilots = data.results;
    });
  }

  //convert film url set into film name set
  getRelatedFilmsNames(urlRelatedFilms: []) {
    if (urlRelatedFilms) {
      this.relatedFilms = [];
      urlRelatedFilms.forEach((element) => {
        var film = this.allFilms.find((x) => x.url === element);
        this.relatedFilms.push(`-${film.title}<br>`);
      });
      return this.relatedFilms.join(' ');
    }
  }
   //convert pilot url set into pilot names set
   getRelatedStarshipsNames(urlRelatedStarship: []) {
    if (urlRelatedStarship) {
      this.relatedPilots = [];
      urlRelatedStarship.forEach((element) => {
        var starship = this.allStarships.find((x) => x.url === element);
        this.relatedPilots.push(`-${starship.name}<br>`);
      });
      return this.relatedPilots.join(' ');
    }
  }
  //get pilot number from url
  getPilotNumber(url: string) {
    var number = url.split('http://swapi.dev/api/people/');
    return +number[1].replace('/', '');
  }
  //open modal showing a instanced Pilot Details Component
  openModal(id: number) {
    const modalRef = this.modalService.open(PilotDetailsComponent);
    modalRef.componentInstance.num = id;
  }
}
