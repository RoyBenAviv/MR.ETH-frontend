import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverService },
      },
      { path: 'edit', component: ContactEditComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomePageComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
