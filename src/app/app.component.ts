import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  Injectable,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './pages/body/body.component';

@Injectable()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, BodyComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'study';

  isSideNavCollapsed = false;
  screenWidth = 0;
  currentRoute: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  onToggleSideNav(data: any): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
