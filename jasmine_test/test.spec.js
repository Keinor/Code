describe("Jasmine", function() {
    it("Correct boolean", function () {
        expect(yesOrNo(true)).toEqual('yes');
    });

    it("Incorrect boolean", function () {
        expect(yesOrNo('str')).toEqual('no');
    });

	it("Null boolean", function () {
	    expect(yesOrNo(null)).toEqual('null');
	    });
	it("Undefined boolean", function () {
	    expect(yesOrNo(undefined)).toEqual('undefined');
	    });
	
});
describe("Counter", function() {
	it("Counter < 9", function () {
        expect(counter(1)).toBe(1);
    });

    it("Counter > 9", function () {
        expect(counter(10)).toBe('+');
    });
    
});

describe("The Date object", function(){
    it("Age", function() {

      var baseTime = new Date("1990-12-12");
      expect(DateAge(baseTime)).toBe(28);
    });


it("Age_Month", function(){

var a = new Date('September 19, 1998');
var b = a.getMonth()+1;
expect(DateAge(a)).toBe(21);
})

  });

describe("List", function(){
    it("Random_List", function() {
    	let list = [1,44,7,9,55];
    	expect(Random(list)).not.toBe(null);
});
    });