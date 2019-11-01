// в js используют в 90% случаев '' кавычки, "" почти никогда, `` если внутри есть js переменные
// describe Jasmine?
// плохое форматирование файла
describe("Jasmine", function() {
    // каждый it обычно начинается с should be... например should be true for yes
    it("Correct boolean", function () {
        expect(yesOrNo(true)).toEqual('yes');
    });

    it("Incorrect boolean", function () {
        // нет, должно вернуть null на некорректные данные
        expect(yesOrNo('str')).toEqual('no');
    });

	it("Null boolean", function () {
	    expect(yesOrNo(null)).toEqual('null'); // 'null' это строка, я просил вернуть тип данных null здесь
	    });
	it("Undefined boolean", function () {
	    expect(yesOrNo(undefined)).toEqual('undefined'); // 'undefined' это строка, я просил вернуть тип данных null здесь
	    });

    it('should be null for incorrect data', function () {
        expect(yesOrNo(9)).toBeNull();
    });
	
});
describe("Counter", function() {
	it("Counter < 9", function () {
        expect(counter(1)).toBe(1);
    });

    it("Counter > 9", function () {
        expect(counter(10)).toBe('+');
    });

    it('should be 9+ for 100', function () {
        expect(counter(100)).toBe('9+');
    });

    it('should be 0 for 0', function () {
        expect(counter(0)).toBe(0);
    });

    it("should be null for incorrect data", function() {
        expect(counter(undefined)).toBeNull();
    });
});

// лучше называть describe проще, например как название функции что я давал calculateAge
describe("The Date object", function(){
    it("should be null for incorrect data", function() {
        expect(DateAge(null)).toBeNull();
    });

    it("should be null for date in the future", function() {
        expect(DateAge(new Date('2039.10.18'))).toBeNull(); // -19?
    });

    it("Age", function() {

      var baseTime = new Date("1990-12-12");
      expect(DateAge(baseTime)).toBe(28);
    });


it("Age_Month", function(){

var a = new Date('September 19, 1998');
var b = a.getMonth()+1;
expect(DateAge(a)).toBe(21);
})

    it("Age", function() {

        var baseTime = new Date("1990-12-12");
        expect(DateAge(baseTime)).toBe(28);
    });

  });

describe("List", function(){
    // так себе тест. Лучше проверить [1,2,3] массив и убедится что было получено число <=3 и >=1
    it("Random_List", function() {
    	let list = [1,44,7,9,55];
    	expect(Random(list)).not.toBe(null);
});

    it("should be null for incorrect data", function() {
        expect(Random(undefined)).not.toBeNull();
    });
    });
