export class User{

  public $key: string;

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public rg: string,
    public cpf: string,
    public address: string,
    public complement: string,
    public neighborhood: string,
    public city: string,
    public cep: string,
    public state: string,
    public avaliacao: number,
    public userType: string,
  ){}

}
