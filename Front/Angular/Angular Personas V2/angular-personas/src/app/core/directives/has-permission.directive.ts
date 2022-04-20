import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective {
  permissions: string;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly permissionService: PermissionService
  ) { }
  public ngOnInit(): void {
  }

  @Input()
  set hasPermission(val: string[]) {
    this.permissions = val.join('.');
    this.updateView();
  }

  private async updateView() {

    if (this.permissionService.checkPermissions(this.permissions)) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
