import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/services/plantilla.service';
import { Empleado } from 'src/app/model/empleado';
@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
public empleados !: Array<Empleado>;
  constructor(private _service : PlantillaService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(res=>{
      console.log(res);
      this.empleados = res;
    })
  }

}
