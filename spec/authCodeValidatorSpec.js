describe('spec runner', () => {
    it('runs successfully', () => {
        expect(myVar).toBe(true);
    });

    describe('throw', () => {
        it('debe esperar un throw', () => {
            expect(planA).toThrow(); // pass 
        })
        it('debe esperar y fallar un throw', () => {
            expect(planB).not.toThrow();
        })
    })

    describe("Jasmine Matchers", () => {
        it("toBeCloseTo matcher should be applied for precision math comparison", () => {
             var pi = 3.1415926, e = 2.78; 
             expect(pi).not.toBeCloseTo(e); 
             expect(pi).toBeCloseTo(e, 0); 
             expect(4.334).toBeCloseTo(4.334); 
             expect(4.334).toBeCloseTo(4.3345, 1); 
             expect(4.334).toBeCloseTo(4.3345, 2); 
             expect(4.334).not.toBeCloseTo(4.3, 2); 
             expect(4.223).not.toBeCloseTo(4.22, 3); 
             expect(4.223).not.toBeCloseTo(4.22, 4); });
    });
}); 