export interface AssignPermissionDto {
    idUser: Number;
    sectionAndPermission: Number[];
}

export function ASSIGN_PERMISSION_BLANK(): AssignPermissionDto {
    const aux = {
        idUser: null,
        sectionAndPermission: []
    };
    return Object.assign(aux);
}