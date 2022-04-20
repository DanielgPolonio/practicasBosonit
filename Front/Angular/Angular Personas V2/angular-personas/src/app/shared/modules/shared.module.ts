import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxTableComponent } from '../components/tables/checkbox-table/checkbox-table.component';
import { DropdownsSearchComponent } from '../components/dropdowns/dropdowns-search/dropdowns-search.component';
import { MenubarComponent } from '../../core/components/menubar/menubar.component';
import { PrimeNgModule } from './primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputParentComponent } from '../components/inputs/input-parent/input-parent.component';
import { FirstComponent } from '../../features/first/first.component';
import { InputTextComponent } from '../components/inputs/input-text/input-text.component';
import { InputNumberComponent } from '../components/inputs/input-number/input-number.component';
import { InputSelectComponent } from '../components/inputs/input-select/input-select.component';
import { InputDateComponent } from '../components/inputs/input-date/input-date.component';
import { InputRadioComponent } from '../components/inputs/input-radio/input-radio.component';
import { InputCheckboxComponent } from '../components/inputs/input-checkbox/input-checkbox.component';
import { ButtonComponent } from '../components/button/button.component';
import { TableComponent } from '../components/table/table.component';



@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimeNgModule, TranslateModule],
    declarations: [CheckboxTableComponent, DropdownsSearchComponent, MenubarComponent, InputParentComponent, FirstComponent, InputTextComponent, InputNumberComponent, InputSelectComponent, InputDateComponent, InputRadioComponent, InputCheckboxComponent, ButtonComponent, TableComponent
        ],
    exports: [CheckboxTableComponent, DropdownsSearchComponent, MenubarComponent, PrimeNgModule, TranslateModule,InputParentComponent, FirstComponent,  InputTextComponent, InputNumberComponent, InputSelectComponent, InputDateComponent, InputRadioComponent, InputCheckboxComponent, ButtonComponent, TableComponent]

})
export class SharedModule { }
