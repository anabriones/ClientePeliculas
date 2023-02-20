export class Usuario {
  public name:  string;
  public email:  string;
  public password: string;
  public role:  string;
  public isActive: boolean;

  constructor() {
    this.name = '';
    this.email='';
    this.password = '';
    this.role='';
    this.isActive=false;
  }
}
