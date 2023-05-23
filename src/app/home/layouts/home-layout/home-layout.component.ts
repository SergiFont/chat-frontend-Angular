import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ["./home-layout.component.css"]
})
export class HomeLayoutComponent implements OnInit {
  isRootPath!: boolean;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.isRootPath = this.router.url === '/';

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.isRootPath = this.router.url === '/';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}