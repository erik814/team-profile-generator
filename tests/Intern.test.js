const {Intern} = require('../classes/intern');

describe('Intern', ()=>{
    describe('Initialization', () =>{
        it("should create a new Intern object containing a name, id, email, and school", ()=>{
            const obj = new Intern('Sam', 23, 'sam@gmail.com', 'U of M');

            expect(obj.name).toEqual('Sam');
            expect(obj.id).toEqual(23);
            expect(obj.email).toEqual('sam@gmail.com');
            expect(obj.school).toEqual('U of M');
        })
    })
    describe('Functions', ()=>{
        it("should return the value of the object's name, id, email, school, and role, respectively", ()=>{
            const obj = new Intern('Sam', 23, 'sam@gmail.com', 'U of M');

            expect(obj.getName()).toEqual('Sam');
            expect(obj.getId()).toEqual(23);
            expect(obj.getEmail()).toEqual('sam@gmail.com');
            expect(obj.getSchool()).toEqual('U of M');
            expect(obj.getRole()).toEqual('Intern');
        })
    })
})