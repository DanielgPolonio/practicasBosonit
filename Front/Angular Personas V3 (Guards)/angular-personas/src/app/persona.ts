export interface Persona {
  id: number;
  name: string;
  city: string;
  rol: Rol;
}
enum Rol {
  estudiante,
  profesor
}
