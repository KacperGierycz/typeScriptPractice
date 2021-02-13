class Customer2{

    private _firstName: string;
    private _lastName: string;


    constructor(theFirst:string, theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }
    
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

// lets create a instance of our class

let myCustomer = new Customer2("Martin", "Dixon");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName );
