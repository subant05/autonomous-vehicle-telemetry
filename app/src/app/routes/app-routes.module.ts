import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { AppComponent } from '../app.component'
import { LoginComponent } from "../pages/login/login.component"
import { DashboardComponent } from "../pages/dashboard/dashboard.component"
import { ProfileComponent } from "../pages/profile/profile.component"
import { LayoutComponent } from "../components/layout/layout.component"
import { VehiclesComponent } from "../pages/vehicles/vehicles.component"
import { AuthGuardService } from "../services/auth/auth-guard.service"
import { ErrorComponent } from "src/app/pages/error/error.component"
import { VehicleTopicComponent } from "src/app/pages/vehicles/pages/vehicle-topic/vehicle-topic.component"
import { VehicleLiveComponent } from "../pages/vehicles/pages/vehicle-live/vehicle-live.component"
import { VehicleListComponent } from "../pages/vehicles/pages/vehicle-list/vehicle-list.component"
import { VehicleComponent } from "../pages/vehicles/pages/vehicle/vehicle.component"

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: "",
                component: DashboardComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
            {
                path: "vehicles",
                component: VehiclesComponent,
                children: [
                    {
                        path: "",
                        component: VehicleListComponent
                    },
                    {
                        path: ":id",
                        component: VehicleComponent,
                        children:[
                            {
                                path:"",
                                component:VehicleLiveComponent
                            },
                            {
                                path: "**"
                                , component: VehicleTopicComponent
                            }]
                    }
                ]
            },
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutes { }