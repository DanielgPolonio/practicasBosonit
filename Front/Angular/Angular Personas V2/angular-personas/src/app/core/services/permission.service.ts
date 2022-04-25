import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionService {

    constructor() {

    }
    public checkPermissions(permissionRequired: string): boolean {
        const permissionRequiredSuperadmin = "USER.SUPERADMIN"
        //sería aconsejable que los permisos vinieran en una petición
        const userPermissions: string[] = JSON.parse(localStorage.getItem("roles") || '');
        const hasPermission: boolean = userPermissions.includes(permissionRequired) || userPermissions.includes(permissionRequiredSuperadmin);
        return hasPermission;
    }
}
