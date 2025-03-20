const { addition, substraction, capitalize } = require("./functions")


// test('should retrun added value ', () => {
//    expect(addition(2,3)).toBe(5)
// })

// describe is a method to combine all test cases
// matcher functions ==toBe(),toMatch()                                                                                                                                             

describe("check all arithmatic operation",()=>{

    test("check addition",()=>{
        expect(addition(2,4)).toBe(6)
    });
    test("check substraction",()=>{
        expect(substraction(4,1)).toBe(3)
    });
    test('should check capital', () => {
    expect(capitalize('vishakha')).toBe('Vishakha');
  });
})
