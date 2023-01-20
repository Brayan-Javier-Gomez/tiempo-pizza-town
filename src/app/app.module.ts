import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LottieModule } from "ngx-lottie";
import { ComponentsModule } from "./components/components.module";

export function playerFactory(): any {
  return import("lottie-web");
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    ComponentsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
