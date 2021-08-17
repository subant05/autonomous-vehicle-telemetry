import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './routes/app-routes.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { split, ApolloClientOptions } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { InMemoryCache } from '@apollo/client/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { ErrorComponent } from './pages/error/error.component';
import { VehicleTopicComponent } from './pages/vehicles/pages/vehicle-topic/vehicle-topic.component';
import { VehicleLiveComponent } from './pages/vehicles/pages/vehicle-live/vehicle-live.component';
import { StarfireComponent } from './components/topics/geolocation/starfire/starfire.component';
import { ImagePairComponent } from './components/topics/images/image-pair/image-pair.component';
import { ImageSegmentationComponent } from './components/topics/images/image-segmentation/image-segmentation.component';
import { VehicleListComponent } from './pages/vehicles/pages/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { PreviewComponent } from './components/topics/images/preview/preview.component';
import { RgbImageComponent } from './components/images/rgb-image/rgb-image.component';
import { SegmentationImageComponent } from './components/images/segmentation-image/segmentation-image.component';
import { VehiclesOnlineComponent } from './components/topics/vehicles/vehicles-online/vehicles-online.component';
import { VehiclesOfflineComponent } from './components/topics/vehicles/vehicles-offline/vehicles-offline.component';
import { VehicleOverviewComponent } from './pages/vehicle/pages/vehicle-overview/vehicle-overview.component';
import { VehicleGeolocationComponent } from './pages/vehicle/pages/vehicle-geolocation/vehicle-geolocation.component';
import { VehicleImagesComponent } from './pages/vehicle/pages/vehicle-images/vehicle-images.component';
import { VehicleLoggingComponent } from './pages/vehicle/pages/vehicle-logging/vehicle-logging.component';
import { VehicleSystemComponent } from './pages/vehicle/pages/vehicle-system/vehicle-system.component';
import { TableUtil } from './components/table/table-utils';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

// Enviornment Variables
import { environment } from '../environments/environment';


// Google OAuth
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthGuardService } from './services/auth/auth-guard.service'

// Material
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
// 

import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { GraphQLModule } from './modules/graphql.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';

// Service
import { MenuService } from './services/navigation/menu.service'
import { GeolocationService } from './services/geolocation/geolocation.service';
import { VehicleStatusComponent } from './components/topics/vehicles/vehicle-status/vehicle-status.component';
import { VehicleStatusDetailComponent } from './components/modals/vehicle-status-detail/vehicle-status-detail.component';
import { ImageComponent } from './components/images/image/image.component';
import { ImageExpansionComponent } from './components/modals/image-expansion/image-expansion.component';
import { MedallionComponent } from './components/core/medallion/medallion.component';
import { ObjectDetectionDetailComponent } from './components/modals/object-detection-detail/object-detection-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    LayoutComponent,
    VehiclesComponent,
    TopNavigationComponent,
    ErrorComponent,
    VehicleTopicComponent,
    VehicleLiveComponent,
    StarfireComponent,
    ImagePairComponent,
    ImageSegmentationComponent,
    VehicleListComponent,
    VehicleComponent,
    PreviewComponent,
    RgbImageComponent,
    SegmentationImageComponent,
    VehiclesOnlineComponent,
    VehiclesOfflineComponent,
    VehicleOverviewComponent,
    VehicleGeolocationComponent,
    VehicleImagesComponent,
    VehicleLoggingComponent,
    VehicleSystemComponent,
    VehicleStatusComponent,
    TableUtil,
    VehicleStatusDetailComponent,
    ImageComponent,
    ImageExpansionComponent,
    MedallionComponent,
    ObjectDetectionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    // Material
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    // 
    GraphQLModule,
    SocialLoginModule,
    NgDynamicBreadcrumbModule,
    InfiniteScrollModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.googleAuthClientId
          )
        }
      ]
    } as SocialAuthServiceConfig,
  },
  {
    provide: APOLLO_OPTIONS,
    // @ts-ignore
    useFactory(httpLink: HttpLink): ApolloClientOptions {
      // Create an http link:
      const http = httpLink.create({
        uri: `${location.protocol}//${location.host}${environment.serviceEndpoint}`,
      });


      // Create a WebSocket link:
      const ws = new WebSocketLink({
        uri: `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}${environment.serviceEndpoint}`,
        options: {
          reconnect: true,
        },
      });
      const link = split(
        ({ query }) => {
          let definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        ws,
        http,
      );

      const defaultOptions = {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        subscription: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
      }

      return {
        link,
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions,
        // ... options
      };
    },
    deps: [HttpLink],
  },
    MenuService,
    AuthGuardService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
