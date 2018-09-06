import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{
		path: 'dashboard',
		loadChildren: './zoo-dashboard/zoo-dashboard.module#ZooDashboardModule'
	},
	{
		path: 'animals',
		loadChildren: './zoo-animal/zoo-animal.module#ZooAnimalModule'
	}
];

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule { }

