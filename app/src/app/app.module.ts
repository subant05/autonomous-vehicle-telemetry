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
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// 

import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { GraphQLModule } from './modules/graphql.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';

// Service
import { MenuService } from './services/navigation/menu.service'
import { GeolocationService } from './services/geolocation/geolocation.service';
import { ErrorComponent } from './pages/error/error.component';
import { DeviceTopicComponent } from './pages/devices/pages/device-topic/device-topic.component';
import { DeviceLiveComponent } from './pages/devices/pages/device-live/device-live.component';
import { StarfireComponent } from './components/topics/starfire/starfire.component';
import { ImagePairComponent } from './components/topics/image-pair/image-pair.component';
import { ImageComponent } from './components/image/image.component';
import { ImageSegmentationComponent } from './components/topics/image-segmentation/image-segmentation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    LayoutComponent,
    DevicesComponent,
    TopNavigationComponent,
    ErrorComponent,
    DeviceTopicComponent,
    DeviceLiveComponent,
    StarfireComponent,
    ImagePairComponent,
    ImageComponent,
    ImageSegmentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    // 
    GraphQLModule,
    SocialLoginModule,
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
        uri: `http://${location.host}${environment.serviceEndpoint}`,
      });

      
      // Create a WebSocket link:
      const ws = new WebSocketLink({
        uri: `ws://${location.host}${environment.serviceEndpoint}`,
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
