import { Routes, RouterModule } from "@angular/router";
import { MonthlyCalendarComponent } from "./monthly-calendar/monthly-calendar.component";
import { HomeComponent } from "./home/home.component";
import { ListPostComponent } from "./list-post/list-post.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./services/auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthCallbackComponent } from "./auth-callback/auth-callback.component";

const routes: Routes =
  [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'article', component: ListPostComponent, canActivate: [AuthGuard] },
    { path: 'calendar', component: MonthlyCalendarComponent, canActivate: [AuthGuard] },
    { path: 'viewer/:id', component: ViewPostComponent },
    { path: 'editor/:id', component: EditPostComponent },
    { path: 'editor', component: EditPostComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'callback', component: AuthCallbackComponent }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
