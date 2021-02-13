export class Customer2{




    constructor(private _firstName: string,
        private _lastName: string)  {}
    
    
    public set firstName(theName:string){
        this._firstName=theName;
    }

    public get lastName(): string{
       return this._lastName;
    }

    public set lastName(theName:string){
        this._lastName=theName;
    }

    public get firstName(): string{
       return this._firstName;
    }

}


