export class Authorizations {
  public EDIT_MEDIC = ['AUDITOR', 'ADMIN'];

  getPropertyValue(property: string): string[] {
    return this.EDIT_MEDIC;
  }
}
