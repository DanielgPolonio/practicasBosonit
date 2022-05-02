import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxTableComponent } from '../components/tables/checkbox-table/checkbox-table.component';
import { DropdownsSearchComponent } from '../components/dropdowns/dropdowns-search/dropdowns-search.component';
import { MenubarComponent } from '../../core/components/menubar/menubar.component';
import { PrimeNgModule } from './primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputParentComponent } from '../components/inputs/input-parent/input-parent.component';
import { InputTextComponent } from '../components/inputs/input-text/input-text.component';
import { InputNumberComponent } from '../components/inputs/input-number/input-number.component';
import { InputSelectComponent } from '../components/inputs/input-select/input-select.component';
import { InputDateComponent } from '../components/inputs/input-date/input-date.component';
import { InputRadioComponent } from '../components/inputs/input-radio/input-radio.component';
import { InputCheckboxComponent } from '../components/inputs/input-checkbox/input-checkbox.component';
import { ButtonComponent } from '../components/button/button.component';
import { TableComponent } from '../components/table/table.component';
import { NavSideMenuComponent } from 'src/app/core/components/nav-side-menu/nav-side-menu.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { InputTimeComponent } from '../components/inputs/input-time/input-time.component';
import { InputEmailComponent } from '../components/inputs/input-email/input-email.component';




@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimeNgModule, TranslateModule, BreadcrumbModule],
    declarations: [CheckboxTableComponent, DropdownsSearchComponent, MenubarComponent, NavSideMenuComponent, InputParentComponent, InputTextComponent, InputNumberComponent, InputSelectComponent, InputDateComponent, InputRadioComponent, InputCheckboxComponent, ButtonComponent, TableComponent, InputTimeComponent, InputEmailComponent
        ],
    exports: [BreadcrumbModule, CheckboxTableComponent, DropdownsSearchComponent, NavSideMenuComponent, MenubarComponent, PrimeNgModule, TranslateModule,InputParentComponent, InputTextComponent, InputNumberComponent, InputSelectComponent, InputDateComponent, InputRadioComponent, InputCheckboxComponent, ButtonComponent, TableComponent, InputTimeComponent, InputEmailComponent]

})
export class SharedModule { }
