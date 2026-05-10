import { Route } from "@angular/router";
import { Login } from "./login/login";
import { ClientComponent } from "./client-component/client-component";
import { AdminComponent } from "./admin-component/admin-component";

export default[
    {path: 'login', component:Login },
    {path:'admin-component', component:AdminComponent},
    {path: 'client-component', component: ClientComponent}
    
] as Route[];