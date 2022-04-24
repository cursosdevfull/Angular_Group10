export type MedicPropertiesOptional = Partial<{
  readonly id: number;
  readonly active: boolean;
}>;

export type MedicPropertiesRequired = Required<{
  readonly name: string;
  readonly lastname: string;
  readonly surname: string;
  readonly cmp: string;
  readonly email: string;
  readonly dni: string;
  readonly typeDNI: number;
}>;

export type MedicProperties = MedicPropertiesRequired &
  Required<MedicPropertiesOptional>;

export class MedicEntity {
  private readonly id: number | null = null;
  private name: string = '';
  private lastname: string = '';
  private surname: string = '';
  private cmp: string = '';
  private email: string = '';
  private dni: string = '';
  private typeDNI: number = 0;
  private active: boolean = false;

  constructor(properties: MedicPropertiesOptional & MedicPropertiesRequired) {
    Object.assign(this, properties);
  }

  get properties(): MedicProperties {
    return {
      id: this.id as number,
      name: this.name,
      lastname: this.lastname,
      surname: this.surname,
      cmp: this.cmp,
      email: this.email,
      dni: this.dni,
      typeDNI: this.typeDNI,
      active: this.active,
    };
  }
}
