export interface ITableColumn {
    name: string;
    id: string;
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