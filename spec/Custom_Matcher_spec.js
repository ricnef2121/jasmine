describe("modulo", () => {
    var personAgeValidationMatcher = {
        toBeOlderThan: function () {
            return {
                compare: function (actualAge, expectedAge) {
                    if (expectedAge === undefined) {
                        throw "Expected value is required";
                    }
                    if (actualAge >= expectedAge) {
                        return {
                            pass: true,
                            message: "Persona es elegible para colocar la orden"
                        };
                    } else {
                        return {
                            pass: false,
                            message: "La edad minima de la persona debe de ser 21 años para colocar la orden"
                        };
                    };
                }
            };
        }
    };

    var personNameValidationMatcher = {
        toContainFirstAndLastName: function () {
            return {
                compare: function (actual) {
                    if (actual.firstName != undefined && actual.lastName != undefined) {
                        return {
                            pass: true,
                            message: "Person is eligible to place the online order"
                        };
                    } else {
                        return {
                            pass: false,
                            message: "First name and last name are mandatory to process the online order"
                        };
                    };
                }
            };
        }
    };

    describe("Cuando se genera la orden: ", () => {
        beforeEach(() => {
            jasmine.addMatchers(personAgeValidationMatcher);
            jasmine.addMatchers(personNameValidationMatcher);
        })
        it("La edad debe ser mas grande que " + "o igual o mayor que 21 years", () => {
            var MyPerson = new Person(25, "james", "Smith");
            expect(MyPerson.age).toBeOlderThan(20);
        });
        it("validamos que una edad menor no pase", () => {
            var MyPerson = new Person(18, "james", "Smith");
            expect(MyPerson.age).not.toBeOlderThan(20);
        });
        it("Primer nombre y apellido son requeridos " + "para colocar la orden",()=> {
            var myPerson = new Person(23, "James", "Smith");
            expect(myPerson).toContainFirstAndLastName();
        });
    });
});
