import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {      
        return true;      
        }      

        if (this.isAdminLoggedIn()) {      
          return true;      
          } 
        // navigate to login page as user is not authenticated      
     this.router.navigate(['/auth/sign-in']);      
  return false; 
  }
  public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('isLoggedIn') == "true") {      
       status = true;  
        
    }
      else {      
       status = false;      
       }      
    return status;      
    }   
    
    public isAdminLoggedIn(): boolean {      
      let status = false;      
      if (localStorage.getItem('isAdminLoggedIn') =="true") {      
         status = true;  
          
      }
        else {      
         status = false;      
         }      
      return status;      
      }    
  
}
