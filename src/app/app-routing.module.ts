import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedFormComponent } from './components/forms/nested-form/nested-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { DynamicFormComponent } from './components/forms/dynamic-form/dynamic-form.component';
import { AutocompleteComponent } from './components/material/autocomplete/autocomplete.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'forms/basic-form', component: BasicFormComponent},
  {path: 'forms/nested-form', component: NestedFormComponent},
  {path: 'forms/dynamic-form', component: DynamicFormComponent},
  {path: 'material/autcomplete', component: AutocompleteComponent},
  {path: 'material/dashboard', component: DashboardComponent},
  {path: 'material/navigation', component: NavigationComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
