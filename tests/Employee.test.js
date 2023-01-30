const Employee = require('../classes/Employee');

describe("Employee", () => {
    describe("Initialization", () =>{
        it("should create a new Manager object which contains a name, ID, and email", ()=>{
            const obj = new Employee('Sam', 23, 'sam@gmail.com');

            expect(obj.name).toEqual('Sam');
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual('sam@gmail.com');
        })
    })
    describe("Functions", ()=>{
        it("should return the value of the object's name, id, email, and role, respectively", ()=>{
            const obj = new Employee('Sam', 23, 'sam@gmail.com');

            expect(obj.getName()).toEqual('Sam');
            expect(obj.getId()).toEqual(23);
            expect(obj.getEmail()).toEqual('sam@gmail.com');
            expect(obj.getRole()).toEqual('Employee');
        })
    })
})