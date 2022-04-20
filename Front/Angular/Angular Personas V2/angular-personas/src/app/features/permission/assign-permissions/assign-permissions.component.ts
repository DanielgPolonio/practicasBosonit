import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageToastService } from 'src/app/shared/services/messages-toast.service';
import { UserService } from '../../user/services/user.service';
import { AssignPermissionDto, ASSIGN_PERMISSION_BLANK } from '../dtos/assign-permission.dto';
import { Permission, SectionPermission } from '../interfaces/permission';
import { PermissionService } from '../services/permission.service';

@Component({
  selector: 'app-assign-permissions',
  templateUrl: './assign-permissions.component.html',
  styleUrls: ['./assign-permissions.component.scss']
})
export class AssignPermissionsComponent implements OnInit {
  usuarios: any[];
  sectionPermissions: SectionPermission[];
  sectionPermission: SectionPermission;

  users: any[];

  allPermissions: any[];
  userPermission: any[];
  userPermissionId: any[];

  sub: Subscription;

  permissionsGrouped: any[];
  balanceFrozen: boolean = false;

  assignPermission: AssignPermissionDto = ASSIGN_PERMISSION_BLANK();

  constructor(
    private readonly userService: UserService,
    private readonly permissionService: PermissionService,
    private readonly messageToastService: MessageToastService
  ) { }

  ngOnChanges() { }

  ngOnInit(): void {
    this.initServices();
  }

  initServices() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.users = res;
    })
  }

  changeUserSelection(event: any) {
    let id: Number = event.id
    this.assignPermission.idUser = id;

    this.permissionService.getAllPermissions().subscribe((res: { id: number, section: string, permission: string }[]) => {
      this.allPermissions = res;

      this.permissionService.getPermissionsByIdUser(event.id).subscribe((res: { id: number, section: string, permission: string }[]) => {
        this.userPermission = res;

        this.userPermissionId = this.userPermission.map((a: any) => { return a.id; });
        this.allPermissions = this.findAndEdit(this.allPermissions, this.userPermission);

        this.permissionsGrouped = this.groupBy(this.allPermissions, 'section')
        this.permissionsGrouped = Object.entries(this.permissionsGrouped);

      });
    });
  }



  findAndEdit(items1: any[], items2: any[]) {
    for (let item of items2) {
      let foundIndex = items1.findIndex(
        element => element.id === item.id
      )

      Object.assign(item, { 'check': true });
      items1.splice(foundIndex, 1, item)
    }

    return items1;

  }


  groupBy(objectArray: any, property: any) {
    let arrayRes = [];

    return objectArray.reduce((acc: any, obj: any) => {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }


  savePermissions(event: any) {
    this.assignPermission.sectionAndPermission = event;

    this.permissionService.setPermissionByIdUser(this.assignPermission).subscribe((res: string) => {
      //console.log(res)
      this.messageToastService.showToastSuccess('Éxito', 'Permisos modificados correctamente')
    })
  }


}
