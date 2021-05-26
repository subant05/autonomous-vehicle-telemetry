import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { AppComponent } from '../app.component'
import { LoginComponent } from "../pages/login/login.component"
import { DashboardComponent } from "../pages/dashboard/dashboard.component"
import { ProfileComponent } from "../pages/profile/profile.component"
import { LayoutComponent } from "../components/layout/layout.component"
import { DevicesComponent } from "../pages/devices/devices.component"
import { AuthGuardService } from "../services/auth/auth-guard.service"
import { ErrorComponent } from "src/app/pages/error/error.component"
import { DeviceTopicComponent } from "src/app/pages/devices/pages/device-topic/device-topic.component"
import { DeviceLiveComponent } from "../pages/devices/pages/device-live/device-live.component"

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuardService],
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
                path: "devices",
                component: DevicesComponent,
                children: [
                    {
                        path: "",
                        component: DeviceLiveComponent
                    },
                    {
                        path: "**"
                        , component: DeviceTopicComponent
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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }