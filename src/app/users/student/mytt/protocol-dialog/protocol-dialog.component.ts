import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';

interface Usuario {
  id: number;
  userType: string;
  isActive: boolean;
  nombres: string;
  apellidoP: string;
  apellidoM: string;
  matricula: string;
  correoInst: string;
  correoPersonal: string;
}

// const ejemploUsuario: Usuario = {
//   id: 1,
//   userType: 'Estudiante',
//   isActive: true,
//   nombres: 'Juan',
//   apellidoP: 'Gómez',
//   apellidoM: 'López',
//   matricula: '123456',
//   correoInst: 'juan.gomez@ejemplo.edu',
//   correoPersonal: 'juan@gmail.com',
// };

const usuarios: Usuario[] = [
  {
    id: 1,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Carlos',
    apellidoP: 'García',
    apellidoM: 'Martínez',
    matricula: '2021001',
    correoInst: 'carlos.garcia@ejemplo.edu',
    correoPersonal: 'carlos@gmail.com',
  },
  {
    id: 2,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Ana',
    apellidoP: 'López',
    apellidoM: 'González',
    matricula: '2021002',
    correoInst: 'ana.lopez@ejemplo.edu',
    correoPersonal: 'ana@yahoo.com',
  },
  {
    id: 3,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Pedro',
    apellidoP: 'Ramírez',
    apellidoM: 'Fernández',
    matricula: '2021003',
    correoInst: 'pedro.ramirez@ejemplo.edu',
    correoPersonal: 'pedro@hotmail.com',
  },
  {
    id: 4,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Laura',
    apellidoP: 'Gutiérrez',
    apellidoM: 'Pérez',
    matricula: '2021004',
    correoInst: 'laura.gutierrez@ejemplo.edu',
    correoPersonal: 'laura@gmail.com',
  },
  {
    id: 5,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Miguel',
    apellidoP: 'Martín',
    apellidoM: 'Díaz',
    matricula: '2021005',
    correoInst: 'miguel.martin@ejemplo.edu',
    correoPersonal: 'miguel@yahoo.com',
  },
  {
    id: 6,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Elena',
    apellidoP: 'Sánchez',
    apellidoM: 'Vargas',
    matricula: '2021006',
    correoInst: 'elena.sanchez@ejemplo.edu',
    correoPersonal: 'elena@hotmail.com',
  },
  {
    id: 7,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Sofía',
    apellidoP: 'Hernández',
    apellidoM: 'López',
    matricula: '2021007',
    correoInst: 'sofia.hernandez@ejemplo.edu',
    correoPersonal: 'sofia@gmail.com',
  },
  {
    id: 8,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Diego',
    apellidoP: 'Rodríguez',
    apellidoM: 'Gómez',
    matricula: '2021008',
    correoInst: 'diego.rodriguez@ejemplo.edu',
    correoPersonal: 'diego@yahoo.com',
  },
  {
    id: 9,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Isabella',
    apellidoP: 'González',
    apellidoM: 'Fernández',
    matricula: '2021009',
    correoInst: 'isabella.gonzalez@ejemplo.edu',
    correoPersonal: 'isabella@hotmail.com',
  },
  {
    id: 10,
    userType: 'Estudiante',
    isActive: true,
    nombres: 'Héctor',
    apellidoP: 'Fernández',
    apellidoM: 'Pérez',
    matricula: '2021010',
    correoInst: 'hector.fernandez@ejemplo.edu',
    correoPersonal: 'hector@gmail.com',
  },
];

@Component({
  selector: 'app-protocol-dialog',
  templateUrl: './protocol-dialog.component.html',
  styleUrls: ['./protocol-dialog.component.css'],
})
export class ProtocolDialogComponent implements OnInit {
  protocolRequest: FormGroup;
  // myControl = new FormControl('');
  // myControl2 = new FormControl('');
  studentsOptions: Usuario[] = [
    {
      id: 1,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Carlos',
      apellidoP: 'Garcia',
      apellidoM: 'Martinez',
      matricula: '2021001',
      correoInst: 'carlos.garcia@ejemplo.edu',
      correoPersonal: 'carlos@gmail.com',
    },
    {
      id: 2,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Ana',
      apellidoP: 'Lopez',
      apellidoM: 'Gonzalez',
      matricula: '2021002',
      correoInst: 'ana.lopez@ejemplo.edu',
      correoPersonal: 'ana@yahoo.com',
    },
    {
      id: 3,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Pedro',
      apellidoP: 'Ramirez',
      apellidoM: 'Fernandez',
      matricula: '2021003',
      correoInst: 'pedro.ramirez@ejemplo.edu',
      correoPersonal: 'pedro@hotmail.com',
    },
    {
      id: 4,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Laura',
      apellidoP: 'Gutierrez',
      apellidoM: 'Perez',
      matricula: '2021004',
      correoInst: 'laura.gutierrez@ejemplo.edu',
      correoPersonal: 'laura@gmail.com',
    },
    {
      id: 5,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Miguel',
      apellidoP: 'Martin',
      apellidoM: 'Diaz',
      matricula: '2021005',
      correoInst: 'miguel.martin@ejemplo.edu',
      correoPersonal: 'miguel@yahoo.com',
    },
    {
      id: 6,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Elena',
      apellidoP: 'Sanchez',
      apellidoM: 'Vargas',
      matricula: '2021006',
      correoInst: 'elena.sanchez@ejemplo.edu',
      correoPersonal: 'elena@hotmail.com',
    },
    {
      id: 7,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Sofia',
      apellidoP: 'Hernandez',
      apellidoM: 'Lopez',
      matricula: '2021007',
      correoInst: 'sofia.hernandez@ejemplo.edu',
      correoPersonal: 'sofia@gmail.com',
    },
    {
      id: 8,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Diego',
      apellidoP: 'Rodriguez',
      apellidoM: 'Gomez',
      matricula: '2021008',
      correoInst: 'diego.rodriguez@ejemplo.edu',
      correoPersonal: 'diego@yahoo.com',
    },
    {
      id: 9,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Isabella',
      apellidoP: 'Gonzalez',
      apellidoM: 'Fernandez',
      matricula: '2021009',
      correoInst: 'isabella.gonzalez@ejemplo.edu',
      correoPersonal: 'isabella@hotmail.com',
    },
    {
      id: 10,
      userType: 'Estudiante',
      isActive: true,
      nombres: 'Hector',
      apellidoP: 'Fernandez',
      apellidoM: 'Perez',
      matricula: '2021010',
      correoInst: 'hector.fernandez@ejemplo.edu',
      correoPersonal: 'hector@gmail.com',
    },
  ];

  directorOptions: Usuario[] = [
    {
      id: 11,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Enrique',
      apellidoP: 'Garcia',
      apellidoM: 'Martinez',
      matricula: '3021001',
      correoInst: 'carlos.garcia@ejemplo.edu',
      correoPersonal: 'carlos@gmail.com',
    },
    {
      id: 12,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Pablo',
      apellidoP: 'Lopez',
      apellidoM: 'Gonzalez',
      matricula: '3021002',
      correoInst: 'ana.lopez@ejemplo.edu',
      correoPersonal: 'ana@yahoo.com',
    },
    {
      id: 13,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Luffy',
      apellidoP: 'Ramirez',
      apellidoM: 'Fernandez',
      matricula: '3021003',
      correoInst: 'pedro.ramirez@ejemplo.edu',
      correoPersonal: 'pedro@hotmail.com',
    },
    {
      id: 14,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Frankie',
      apellidoP: 'Gutierrez',
      apellidoM: 'Perez',
      matricula: '3021004',
      correoInst: 'laura.gutierrez@ejemplo.edu',
      correoPersonal: 'laura@gmail.com',
    },
    {
      id: 15,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Ace',
      apellidoP: 'Martin',
      apellidoM: 'Diaz',
      matricula: '3021005',
      correoInst: 'miguel.martin@ejemplo.edu',
      correoPersonal: 'miguel@yahoo.com',
    },
    {
      id: 16,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Nami',
      apellidoP: 'Sanchez',
      apellidoM: 'Vargas',
      matricula: '3021006',
      correoInst: 'elena.sanchez@ejemplo.edu',
      correoPersonal: 'elena@hotmail.com',
    },
    {
      id: 17,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Leona',
      apellidoP: 'Hernandez',
      apellidoM: 'Lopez',
      matricula: '3021007',
      correoInst: 'sofia.hernandez@ejemplo.edu',
      correoPersonal: 'sofia@gmail.com',
    },
    {
      id: 18,
      userType: 'Teacher',
      isActive: true,
      nombres: 'VoliBear',
      apellidoP: 'Rodriguez',
      apellidoM: 'Gomez',
      matricula: '3021008',
      correoInst: 'diego.rodriguez@ejemplo.edu',
      correoPersonal: 'diego@yahoo.com',
    },
    {
      id: 19,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Irelia',
      apellidoP: 'Gonzalez',
      apellidoM: 'Fernandez',
      matricula: '3021009',
      correoInst: 'isabella.gonzalez@ejemplo.edu',
      correoPersonal: 'isabella@hotmail.com',
    },
    {
      id: 20,
      userType: 'Teacher',
      isActive: true,
      nombres: 'Yasuo',
      apellidoP: 'Fernandez',
      apellidoM: 'Perez',
      matricula: '3021010',
      correoInst: 'hector.fernandez@ejemplo.edu',
      correoPersonal: 'hector@gmail.com',
    },
  ];

  selectedOptions: Usuario[] = [];

  filteredOptions!: Observable<Usuario[]>;
  filteredOptions2!: Observable<Usuario[]>;
  filteredOptionsDirector1!: Observable<Usuario[]>;
  filteredOptionsDirector2!: Observable<Usuario[]>;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProtocolDialogComponent>
  ) {
    this.protocolRequest = this.formBuilder.group(
      {
        nombreProyecto: ['', Validators.required],
        integrante1: [usuarios[0].nombres, Validators.required],
        integrante2: [''],
        integrante3: [''],
        director1: ['', Validators.required],
        director2: [''],
        fileInput: ['', Validators.required],
      },
      { validator: this.validateFields }
    );
  }

  validateTeammates: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const integrante2 = control.get('integrante2');
    const integrante3 = control.get('integrante3');

    if (
      integrante2 &&
      integrante3 &&
      integrante2.value &&
      integrante3.value &&
      integrante2.value === integrante3.value
    ) {
      return { sameTeammate: true };
    }

    return null;
  };

  validateDirectors: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const director1 = control.get('director1');
    const director2 = control.get('director2');

    if (
      director1 &&
      director2 &&
      director1.value &&
      director2.value &&
      director1.value === director2.value
    ) {
      return { sameDirector: true };
    }

    return null;
  };

  validateFields: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const errors: ValidationErrors = {};

    const teammatesError = this.validateTeammates(control);
    if (teammatesError) {
      Object.assign(errors, teammatesError);
    }

    const directorsError = this.validateDirectors(control);
    if (directorsError) {
      Object.assign(errors, directorsError);
    }

    return Object.keys(errors).length ? errors : null;
  };

  ngOnInit(): void {
    this.filteredOptions = this.protocolRequest
      .get('integrante2')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    this.filteredOptions2 = this.protocolRequest
      .get('integrante3')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filter2(value || ''))
      );
    this.filteredOptionsDirector1 = this.protocolRequest
      .get('director1')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filter3(value || ''))
      );
    this.filteredOptionsDirector2 = this.protocolRequest
      .get('director2')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filter4(value || ''))
      );
  }

  private _filter(value: string): Usuario[] {
    const filterValue = value.toLowerCase();

    return this.studentsOptions.filter((option) => {
      const fullName = `${option.nombres} ${option.apellidoP} ${option.apellidoM}`;
      return fullName.toLowerCase().includes(filterValue);
    });
  }

  private _filter2(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.studentsOptions.filter((option) => {
      const fullName = `${option.nombres} ${option.apellidoP} ${option.apellidoM}`;
      return fullName.toLowerCase().includes(filterValue);
    });
  }

  private _filter3(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.directorOptions.filter((option) => {
      const fullName = `${option.nombres} ${option.apellidoP} ${option.apellidoM}`;
      return fullName.toLowerCase().includes(filterValue);
    });
  }

  private _filter4(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.directorOptions.filter((option) => {
      const fullName = `${option.nombres} ${option.apellidoP} ${option.apellidoM}`;
      return fullName.toLowerCase().includes(filterValue);
    });
  }

  concatenateNames(user: Usuario): string {
    return `${user.nombres} ${user.apellidoP} ${user.apellidoM}`;
  }

  fileSelected!: File;
  isFileSelected: boolean = false;
  fileUploader(event: any, form: any) {
    this.fileSelected = event.files[0];
    this.isFileSelected = true;
    this.protocolRequest.patchValue({
      fileInput: this.fileSelected.name,
    });
    // this.addForm.patchValue({
    //   image_url: this.imageSelected.name,
    // });

    form.clear();
  }

  onSubmit() {
    console.log(this.protocolRequest);
  }
}
