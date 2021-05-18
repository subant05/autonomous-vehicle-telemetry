import {RouterModule, Routes} from "@angular/router"
import {NgModule} from "@angular/core"
import {AppComponent} from '../app.component'
import { LoginComponent } from "../pages/login/login.component"
import { DashboardComponent } from "../pages/dashboard/dashboard.component"
import { ProfileComponent } from "../pages/profile/profile.component"
import { LayoutComponent } from "../components/layout/layout.component"
import { DevicesComponent } from "../pages/devices/devices.component"

const routes: Routes = [
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"",
                component:DashboardComponent
            },
            {
                path:"profile",
                component:ProfileComponent
            },
            {
                path:"devices",
                component:DevicesComponent
            }
        ]
    },
    {
        path:"login",
        component: LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes{}