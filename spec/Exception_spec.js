describe("JavaScript Exceptions: ", () => {
    describe("Validate Errors:", () => {
        it("Se debe lanzar el error sobre cualquier " +
            "comportamiento inesperado o malfuncionamiento", () => {
                /**Provocamos el error no pasandole argumentos
                 * a las funciones
                 */
                expect(addTwonumbers).not.toThrow();
                expect(generateMaxValue).toThrow();
                expect(generateMaxValue).toThrowError();
            });
        it("el error debe ser lansado al pasarle " +
            "cualquier argumento equivocado o inesperado", () => {
                /*Afirmaciones para probar parametros
                * de la funcion addTwonumbers()*/
                expect(addTwonumbers.bind(null, 1, 2)).not.toThrow(); //ejemplo usando bind
                expect(addTwonumbers.bind(null, 1, 2)).not.toThrowError();
                expect(() => { addTwonumbers(1, 4); }).not.toThrow(); //ejemplo usando una callback como parametro
                /*Afirmaciones para probar los parametros de
                * la funcion generateMaxValue()*/
                expect(generateMaxValue.bind(null, 5)).not.toThrow();
                expect(generateMaxValue.bind(this, 5)).not.toThrow();
                expect(function () { generateMaxValue(2000); }).toThrow();
                expect(function () { generateMaxValue(2000); }).toThrowError();
            });
        it('No debe mandar error al ejecutarse generateMaxValue de forma correcta', () => {
            expect(() => generateMaxValue(1)).not.toThrowError();
        })
    });

    describe("Validate Error Messages: ", ()=> {
        it("los mensajes de error deben ser coinsistentes " + "atraves de la aplicacion",()=> {
            /**
             * Los mensajes que se mandan atraves de new Errror deben ser los mismos que
             * que estan ya programados dentro de la funcion en el archivo Exception.jss
             * * */
            expect(generateMaxValue).toThrow(new Error("No value is assigned to variable intVar!"));
            expect(generateMaxValue).toThrowError("No value is assigned to variable intVar!");
            expect(generateMaxValue.bind(null, 5000)).toThrow(new Error("Maximum value should be between 0 and 1000"));
            expect(generateMaxValue.bind(null, 5000)).toThrowError("Maximum value should be between 0 and 1000");
            expect(()=> generateMaxValue(5000)).toThrowError("Maximum value should be between 0 and 1000");
            
        });
    });
});