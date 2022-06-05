import { CommonModule } from '@angular/common';

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TableComponent } from 'projects/backoffice/src/app/shared/components/table/table.component';
import { SharedModule } from 'projects/backoffice/src/app/shared/shared.module';

export default {
  title: 'CursosDev/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SharedModule],
    }),
  ],
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const Medics = Template.bind({});
Medics.args = {
  data: [
    {
      id: 1,
      name: 'Juan',
      lastname: 'Perez',
      age: 30,
      email: 'juan@correo.com',
      cmp: 20344,
    },
    {
      id: 2,
      name: 'Carlos',
      lastname: 'Rolando',
      age: 25,
      email: 'carlos@correo.com',
      cmp: 34456,
    },
  ],
  metaData: [
    {
      field: 'id',
      header: 'ID',
      sortable: true,
    },
    {
      field: 'name',
      header: 'Nombre',
      sortable: true,
    },
    {
      field: 'lastname',
      header: 'Apellido',
      sortable: true,
    },
    { field: 'age', header: 'Edad', sortable: true },
    { field: 'email', header: 'Correo', sortable: true },
    { field: 'cmp', header: 'CMP', sortable: true },
  ],
  subMetaData: [],
  selectedColor: '#ff0000',
};

export const Drivers = Template.bind({});
Drivers.args = {
  data: [
    {
      id: 1,
      name: 'Juan',
      lastname: 'Perez',
      age: 30,
      licenseDriver: 'abc-123',
      licenseType: 'A',
    },
    {
      id: 2,
      name: 'Carlos',
      lastname: 'Rolando',
      age: 25,
      licenseDriver: 'abc-123',
      licenseType: 'A',
    },
  ],
  metaData: [
    {
      field: 'id',
      header: 'ID',
      sortable: true,
    },
    {
      field: 'name',
      header: 'Nombre',
      sortable: true,
    },
    {
      field: 'lastname',
      header: 'Apellido',
      sortable: true,
    },
    { field: 'age', header: 'Edad', sortable: true },
    { field: 'licenseDriver', header: 'Licencia de conducir', sortable: true },
    { field: 'licenseType', header: 'Tipo de licencia', sortable: true },
  ],
  subMetaData: [],
  selectedColor: '#ff0000',
};
