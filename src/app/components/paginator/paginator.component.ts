import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() qtyPages: number;
  @Input() currentPage: number;
  @Input() list: string;
  numPages(n: number): number[] {
    return Array(n);
  }
  constructor(private router: Router) {}

  goToUrl(num: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([this.list + num]));
  }
}
