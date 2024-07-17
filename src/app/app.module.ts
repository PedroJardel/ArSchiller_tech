import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { LoginComponent } from "../login/login.component";
import { environment } from "../envitonments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SingupComponent } from "../singup/singup.component";
import { LoginModule } from "../login/login.module";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { HomeComponent } from "../home/home.component";
import { HomeClientComponent } from "../home-client/home-client.component";
import { LoginClientComponent } from "../login-client/login-client.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SingupComponent,
        HomeComponent,
        HomeClientComponent,
        LoginClientComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        LoginModule,
        ReactiveFormsModule,
        AppRoutingModule,
        
    ],
    providers:[   
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
    ],
    bootstrap:[AppComponent]
})

export class AppModule {}