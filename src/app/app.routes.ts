import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RelatorioCursoComponent } from './pages/relatorio-curso/relatorio-curso.component';
import { PeriodoAtualComponent } from './pages/periodo-atual/periodo-atual.component';
import { ConfiguracaoUsuarioComponent } from './pages/configuracao-usuario/configuracao-usuario.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'relatorio-curso', component: RelatorioCursoComponent },
  { path: 'periodo-atual', component: PeriodoAtualComponent },
  { path: 'configuracao-usuario', component: ConfiguracaoUsuarioComponent },
];
