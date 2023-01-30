const {Intern} = require('../classes/intern');

describe('Intern', ()=>{
    describe('Initialization', () =>{
        it("should create a new Manager object containing a name, id, email, and office number", ()=>{
            const obj = new Intern('Sam', 23, 'sam@gmail.com', 'U of M');

            expect(obj.name).toEqual('Sam');
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual('sam@gmail.com');
            expect(obj.school).toEqual('U of M');
        })
    })
    describe('Functions', ()=>{
        it("should return the value of the object's name, id, email, office number, and role, respectively", ()=>{
            const obj = new Intern('Sam', 23, 'sam@gmail.com', 42);

            expect(obj.getName()).toEqual('Sam');
            expect(obj.getId()).toEqual(23);
            expect(obj.getEmail()).toEqual('sam@gmail.com')
            expect(obj.getSchool()).toEqual('U of M');
            expect(obj.getRole()).toEqual('Intern');
        })
    })
})