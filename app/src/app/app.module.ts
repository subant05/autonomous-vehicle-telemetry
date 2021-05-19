import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './routes/app-routes.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {split, ApolloClientOptions} from '@apollo/client/core';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {InMemoryCache} from '@apollo/client/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatListModule} from '@angular/material/list';
// 

import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    LayoutComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Material
    MatListModule,

    GraphQLModule,
    // 
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    // @ts-ignore
    useFactory(httpLink: HttpLink): ApolloClientOptions {
      // Create an http link:
      const http = httpLink.create({
        uri: 'http://localhost:4000/graphql',
      });

      // Create a WebSocket link:
      const ws = new WebSocketLink({
        uri: `ws://localhost:4000/graphql`,
        options: {
          reconnect: true,
        },
      });

      // using the ability to split links, you can send data to each link
      // depending on what kind of operation is being sent
      const link = split(
        // split based on operation type
        // ({query}) => {
        //   const {kind, operation} = getMainDefinition(query);
        //   return (
        //     kind === 'OperationDefinition' && operation === 'subscription'
        //   );
        // },
        ({ query }) => {
          let definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        ws,
        http,
      );

      return {
        link,
        cache: new InMemoryCache({}),
        // ... options
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
