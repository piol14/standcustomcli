// ataque-stand.model.ts

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredTitle: string;
    strFilteredMessage: string;
    nRecords: number;
}

export interface IEntity {
    id: number,
}
export interface IAtaqueStand extends IEntity {
    
    velocidad: string;
    potencialDesarollo: string;
    alcance: string;
    poder: string;
    aguante: string;
    acierto: string;
  }
  export interface IAtaqueStandPage extends IPage<IAtaqueStand> {
}
  // opinion.model.ts
  export interface IOpinion  extends IEntity {
    
    usuario: IUser;
    descripcion: string;
    numero_estrellas: number;
    stand: IStand;
  }
  export interface IOpinionPage extends IPage<IOpinion> {
}
  // partida.model.ts
  export interface IPartida extends IEntity{
   
    fecha: string;
    ganador: IUser | null;
  }
  
  // stand.model.ts
  export interface IStand extends IEntity {
  
    nombre: string;
    descripcion: string;
    ataque: IAtaqueStand;
  }
  export interface IStandPage extends IPage<IStand> {
}
  // user.model.ts
  export interface IUser extends IEntity {
   
    nombre: string;
    telefono: string;
    email: string;
    username: string;
    password: string;
    role: boolean;
  }
  export interface IUserPage extends IPage<IUser> {
}
  // usuario-stand.model.ts
  export interface IUsuarioStand extends IEntity {
   
    usuario: IUser;
    stand: IStand;
  }
  export interface IUsuarioStandPage extends IPage<IUsuarioStand> {
}