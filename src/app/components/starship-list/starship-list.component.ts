import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Pilots } from 'src/app/model/pilots';
import { Films } from 'src/app/model/films';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';
import { ActivatedRoute } from '@angular/router';
import { Starships } from 'src/app/model/starships';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss'],
})
export class StarshipListComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public swapiService: SwapiService,
    private actRoute: ActivatedRoute
  ) {}

  starships: Starships[];
  allFilms: Films[] = [];
  allPilots: any[] = [];
  relatedFilms: string[] = [];
  relatedPilots: string[] = [];
  qtyPagesPeople: number;
  qtyPagesStarships: number;
  numPage: number;

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.swapiService.getFilms().subscribe((data) => {
      this.allFilms = data.results;
      //callback method for merge in an new array all People pages from API
      this.joinPilotsPagination();
    });
  }

  joinPilotsPagination() {
    this.swapiService.getPilots().subscribe((data) => {
      //getting quantity of pages from API
      this.qtyPagesPeople = Math.ceil(data.count / 10);
      //fire to API to get each page Json
      for (let page = 1; page <= this.qtyPagesPeople; page++) {
        this.getAllPilots(page);
      }
    });
  }

  getAllPilots(page: number) {
    this.swapiService.getAllPilots(page).subscribe((data) => {
      data.results.forEach((element) => {
        //populating a new array with name and url of Pilots
        this.allPilots.push({ name: element.name, url: element.url });
      });
      if (data.next == null) {
        //after last page continue to Starship List
        this.getStarships();
      }
    });
  }

  getStarships() {
    this.numPage = this.actRoute.snapshot.params.id;
    this.swapiService.getStarships(this.numPage).subscribe((data) => {
      this.qtyPagesStarships = Math.ceil(data.count / 10);
      this.starships = data.results;
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
  getRelatedPilotsNames(urlRelatedPilots: []) {
    if (urlRelatedPilots) {
      this.relatedPilots = [];
      urlRelatedPilots.forEach((element) => {
        var pilot = this.allPilots.find((x) => x.url === element);
        this.relatedPilots.push(`-${pilot.name}<br>`);
      });
      return this.relatedPilots.join(' ');
    }
  }
  //get starship number from url
  getStarshipNumber(url: string) {
    var number = url.split('http://swapi.dev/api/starships/');
    return +number[1].replace('/', '');
  }

  //open modal showing a instanced Starship Details Component
  openModal(id: number) {
    const modalRef = this.modalService.open(StarshipDetailsComponent);
    modalRef.componentInstance.num = id;
  }
}
