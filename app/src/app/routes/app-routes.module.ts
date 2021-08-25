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
import { VehicleLiveComponent } from "../pages/vehicles/pages/vehicle-live/vehicle-live.component"
import { VehicleListComponent } from "../pages/vehicles/pages/vehicle-list/vehicle-list.component"
import { VehicleComponent } from "../pages/vehicle/vehicle.component"
import { VehicleOverviewComponent } from '../pages/vehicle/pages/vehicle-overview/vehicle-overview.component';
import { VehicleGeolocationComponent } from '../pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component';
import { VehicleImagesComponent } from '../pages/vehicle/pages/vehicle-images/vehicle-images.component';
import { VehicleLoggingComponent } from '../pages/vehicle/pages/vehicle-logging/vehicle-logging.component';
import { VehicleSystemComponent } from '../pages/vehicle/pages/vehicle-system/vehicle-system.component';

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: "",
                redirectTo:"vehicles",
                pathMatch:"full"
            },
            {
                path: "profile",
                component: ProfileComponent
            },
            {
                // Main / Home Page
                path: "vehicles",
                component: VehiclesComponent
                , children: [
                    {
                        // Vehicle List is degailt page on Main / Home Page
                        path: "",
                        component: VehicleListComponent
                        , data: {
                            title: 'Vehicle List',
                            breadcrumb: [
                              {
                                label: 'Vehices',
                                url: ''
                              }
                            ]
                        },
                    },
                    {
                        path: ":id"
                        , component: VehicleComponent
                        , data: {
                            title: 'Vehicle',
                            breadcrumb: [
                              {
                                label: 'Vehicle',
                                url: ':id'
                              }
                            ]
                          }
                        , children:[
                            {
                                path:"",
                                redirectTo:"overview",
                                pathMatch: "full"
                            },
                            {
                                path:"overview",
                                component:VehicleOverviewComponent
                                , data: {
                                    title: 'Overview',
                                    breadcrumb: [
                                    {
                                        label: 'Vehices',
                                        url: '../'
                                    },
                                      {
                                        label: 'Overview',
                                        url: ''
                                      }
                                    ]
                                  },
                            },
                            {
                                path:"geolocation",
                                component:VehicleGeolocationComponent
                                , data: {
                                    title: 'Geolocation',
                                    breadcrumb: [
                                    {
                                        label: 'Vehices',
                                        url: '../'
                                    },
                                    {
                                        label: ' Geolocation',
                                        url: ''
                                      }
                                    ]
                                  },
                            },
                            {
                                path:"images",
                                component:VehicleImagesComponent
                                , data: {
                                    title: 'Images',
                                    breadcrumb: [
                                    {
                                        label: 'Vehices',
                                        url: '../'
                                    },
                                    {
                                        label: 'Images',
                                        url: ''
                                      }
                                    ]
                                  },
                            },
                            {
                                path:"logging",
                                component:VehicleLoggingComponent
                                , data: {
                                    title: 'Logging',
                                    breadcrumb: [
                                    {
                                        label: 'Vehices',
                                        url: '../'
                                    },                                      
                                    {
                                        label: 'Logging',
                                        url: ''
                                    }
                                    ]
                                  },
                            },
                            {
                                path:"system",
                                component:VehicleSystemComponent
                                , data: {
                                    title: 'Configuration',
                                    breadcrumb: [
                                    {
                                        label: 'Vehices',
                                        url: '../'
                                    },                                       
                                      {
                                        label: 'Configuration',
                                        url: ''
                                      }
                                    ]
                                  },
                            },
                            {
                                path: "**"
                                , redirectTo:"/"
                            }]
                    }
                ]
            },
            // {
            //     path: "vehicles",
            //     component: VehiclesComponent,
            //     children: [
            //         {
            //             path: "",
            //             component: VehicleListComponent
            //         },
            //         {
            //             path: ":id",
            //             component: VehicleComponent,
            //             children:[
            //                 {
            //                     path:"",
            //                     component:VehicleLiveComponent
            //                 },
            //                 {
            //                     path: "**"
            //                     , component: VehicleTopicComponent
            //                 }]
            //         }
            //     ]
            // },
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