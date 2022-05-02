export type DriverPropertiesOptional = Partial<{
  readonly id: number;
}>;

export type DriverPropertiesRequired = Required<{
  readonly nombre: string;
}>;

export type DriverProperties = DriverPropertiesRequired &
  Required<DriverPropertiesOptional>;

export class DriverEntity {
  private readonly id: number | null = null;
  private nombre: string = '';

  constructor(properties: DriverPropertiesOptional & DriverPropertiesRequired) {
    Object.assign(this, properties);
  }

  get properties(): DriverProperties {
    return {
      id: this.id as number,
      nombre: this.nombre,
    };
  }
}
