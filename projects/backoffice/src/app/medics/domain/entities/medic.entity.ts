export type MedicPropertiesOptional = Partial<{
  readonly id: number;
  readonly activo: boolean;
}>;

export type MedicPropertiesRequired = Required<{
  readonly nombre: string;
  readonly apellido: string;
  readonly segundo_nombre: string;
  readonly cmp: string;
  readonly correo: string;
  readonly dni: string;
  readonly foto: string;
}>;

export type MedicProperties = MedicPropertiesRequired &
  Required<MedicPropertiesOptional>;

export class MedicEntity {
  private readonly id: number | null = null;
  private nombre: string = '';
  private apellido: string = '';
  private segundo_nombre: string = '';
  private cmp: string = '';
  private correo: string = '';
  private dni: string = '';
  private foto: string = '';
  private activo: boolean = false;

  constructor(properties: MedicPropertiesOptional & MedicPropertiesRequired) {
    Object.assign(this, properties);
  }

  get properties(): MedicProperties {
    return {
      id: this.id as number,
      nombre: this.nombre,
      apellido: this.apellido,
      segundo_nombre: this.segundo_nombre,
      cmp: this.cmp,
      correo: this.correo,
      dni: this.dni,
      foto: this.foto,
      activo: this.activo,
    };
  }
}
