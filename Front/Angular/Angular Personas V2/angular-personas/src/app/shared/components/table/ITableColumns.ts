export interface ITableColumn {
    name: string;
    id: string;
    dataType: string;
}

interface ITableColumnMoreGeneric {
    name: string;
    prop: string;
    shown: boolean;
    type?: string;
    cellClass?: string;
    route?: string;
    routeId?: string;
}

export enum typeColumn{
    Picture = "picture",
    Actions = "actions"
}