import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/services/plantilla.service';
import { Empleado } from 'src/app/model/empleado';
@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {
public empleado!: Empleado;
  constructor(private _service: PlantillaService) { }

  ngOnInit(): void {
    this.loadPerfil();
  }

  loadPerfil(): void {
    this._service.getPerfilEmpleado().subscribe((res) => {
      console.log(res);
      this.empleado = res;
    });
  }
}
