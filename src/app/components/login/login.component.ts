import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PlantillaService } from 'src/app/services/plantilla.service';
import { Login } from 'src/app/model/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild("cajauser") cajaUser!: ElementRef;
@ViewChild("cajapass") cajaPass!: ElementRef;

  constructor(private _service:PlantillaService,
    private _router: Router) { }

  ngOnInit(): void {
    
  }
  
  accessDatos():void{
    var user = this.cajaUser.nativeElement.value;
    var pass = this.cajaPass.nativeElement.value;
    var datos =  new Login(user, pass);
    this._service.accessLogin(datos).subscribe(res=>{
      localStorage.setItem('token', res.response);
      this._router.navigate(["/plantilla"]);
    })
  }
}
