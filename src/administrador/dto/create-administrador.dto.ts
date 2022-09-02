export class direccion{
    calle: string;
    municipio: string; 
}

export class CreateAdministradorDto {
  nombre: String;
  email: String;
  usuario: String;
  contraseña: String;
  direccion: direccion[];
}
