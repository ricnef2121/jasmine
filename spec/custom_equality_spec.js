/** 
 * Una vez que se registra una función de probador de igualdad personalizada en la función beforeEach,
 *  primero se comprobará antes de la lógica de igualdad predeterminada
 */

describe("Custom Equality Function: ", function () {
    /**
     * función de probador de igualdad personalizada para determinar la igualdad de dos cadenas. 
     *
     * @param {*} strFirstString primer cadena que se va comparar
     * @param {*} strSecondString segundo cadena que es con lo que se va comparar
     * @returns devuelve true si coninciden los parametro acorde ala condicion
     */
    var MyCustomEquality = function (strFirstString, strSecondString) {
        
        if (typeof strFirstString == "string" && typeof strSecondString == "string") {
            console.log(strFirstString.substr(0, 5));
            console.log(strSecondString.substr(0, 5))
            /** 
             * compara si de la cadena dada como primer parametro
             * es igual a la cadena dada como segun parametro
             * pero solo en el rango de 0 a 5 de la primera cadena,
             * y de 0 a 5 en el rango de la segunda cadena
            */
            return strFirstString.substr(0, 5) == strSecondString.substr(0, 5);
            
        };
    }
    beforeEach(function () {
        //regitramos nuestro compartador de strings personalizado
        jasmine.addCustomEqualityTester(MyCustomEquality);
    });
    
    describe("Strings: ", function () {
        it("should be custom equal if first word of both the strings is Packt", function () {

            expect("Packt Jasmine Book").toEqual("Packt Java Cookbook");
        });
    });

    describe("Strings: ", function () {
        it("debe ser igual al comparar nueve y nueve escrito", function () {

            expect("nueve mas dos").toEqual("nueve mas dos");
        });

        it("compara dos strings que sean iguales en los primeros 5 items", function () {

            expect("abcdefghi").toEqual("abcdejkjk");
        });
    });
});
