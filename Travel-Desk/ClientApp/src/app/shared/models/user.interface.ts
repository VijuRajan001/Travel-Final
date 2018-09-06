import { LookUp } from "./lookUp.Interface";

export class appuser {


  
  public fullName: string;
  public loginId: string;
  public roles: appuserrole[];
  public projects: LookUp[];

}



export class appuserrole {

  
  appId: number;
  read: number;
  write: number;
  modify: number;
  roleName: string;
  approve: number;

}

