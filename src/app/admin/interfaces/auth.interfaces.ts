export interface AuthResponse {
    ok: boolean;
    id?: number;
    nombre?: string;
    apellido?: string;
    estado?:boolean;
    token?: any;
    message?: string;
    email?: string;
    rol?: string;
}

export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email?: string;
    estado?: boolean;
    rol?: string;
}