const {Manager} = require('../classes/Manager');

describe('Manager', ()=>{
    describe('Initialization', () =>{
        it("should create a new Manager object containing a name, id, email, and office number", ()=>{
            const obj = new Manager('Sam', 23, 'sam@gmail.com', 42);

            expect(obj.name).toEqual('Sam');
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual('sam@gmail.com');
            expect(obj.officeNumber).toEqual(42);
        })
    })
    describe('Functions', ()=>{
        it("should return the value of the object's name, id, email, office number, and role, respectively", ()=>{
            const obj = new Manager('Sam', 23, 'sam@gmail.com', 42);

            expect(obj.getName()).toEqual('Sam');
            expect(obj.getId()).toEqual(23);
            expect(obj.getEmail()).toEqual('sam@gmail.com');
            expect(obj.getOfficeNumber()).toEqual(42);
            expect(obj.getRole()).toEqual('Manager');
        })
    })
})