import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { NgModule } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
    imports: [BreadcrumbModule, DialogModule, ButtonModule, TabViewModule, ChipModule, CardModule, DividerModule, OverlayPanelModule, SidebarModule, BadgeModule,
        SplitButtonModule, AvatarModule, AvatarGroupModule,
        TableModule, MenubarModule, MenuModule, ToggleButtonModule,
        CheckboxModule, DropdownModule, TieredMenuModule, PanelMenuModule,InputTextModule,InputNumberModule,CalendarModule,RadioButtonModule, ConfirmDialogModule,
    ],
    exports: [BreadcrumbModule, DialogModule, ButtonModule, TabViewModule, ChipModule, CardModule, DividerModule, OverlayPanelModule, SidebarModule, BadgeModule,
        SplitButtonModule, AvatarModule, AvatarGroupModule,
        TableModule, MenubarModule, MenuModule, ToggleButtonModule,
        CheckboxModule, DropdownModule, TieredMenuModule, PanelMenuModule,InputTextModule,InputNumberModule,CalendarModule,RadioButtonModule, ConfirmDialogModule]
})
export class PrimeNgModule { }