class User
{
    userID: string;
    fname: string;
    lname: string;
    email: string;
    password: string;

    constructor(userID:string, fname:string, lname:string, email:string, password:string){
        this.userID = userID;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
    }

}

const userArray:User[]=[]

export {User};
export {userArray};