import { ITableColumn } from "src/app/shared/components/table/ITableColumns";
import { IEmployee } from "./IEmployee";

export const employees: IEmployee[] = [
  {
    picture: 'https://www.familias.com/wp-content/uploads/2019/12/the-happier-you-are-the-less-critical-the-life-and-actions-of-others_credit-shutterstock-700x525.jpg',
    name: 'Sergio Sanchez Gilabert',
    speciality: 'Front'
  },
  {
    picture: 'https://assets.entrepreneur.com/content/3x2/2000/20160728155134-Depositphotos-8807359-l-2015.jpeg',
    name: 'Daniel García Polonio',
    speciality: 'Front'
  },
]

export const columns: ITableColumn[] = [
  { name: 'Foto', id: 'picture' },
  { name: 'Nombre', id: 'name' },
  { name: 'Puesto', id: 'speciality' },
  { name: 'Acciones', id: 'actions' }
]