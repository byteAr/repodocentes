export interface Novedad {
    id: number,
    titulo: string,
    direccionbanner: string,
    direccionminiatura: string,
    direccionpdf?: string,
    fecha: string,
    lugar: string,
    descripcion: any,
}

export interface Digesto {
  title: string;
  type: string;
  date: string;
  affair: string
  urlDocument: string;
  description: string
}

export interface City {
  name: string,
  code: string
}
