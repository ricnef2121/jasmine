describe("<ABC> Money Exchange Company: Currency Converter Module", () => {
    describe("When Convert Currency Across Region: ", () => {
        it("Verify that Indian Rupees (INR) " +
            "converted to Us Dollars (USD)", () => {
                var myCurrency = new CurrencyConverter(60, "INR", "USD");
                expect(myCurrency.convertedCurrency()).toEqual(1.002);
            });
        it("Verify that Indian Rupees (INR) " +
            "converted to Japanese Yen (JPY)", function () {
                var myCurrency = new CurrencyConverter(1, "INR", "JPY");
                expect(myCurrency.convertedCurrency()).toEqual(1.7756);
            });
        xit("Verify that Hong Kong Dollars (HKD) " +
            "converted to US Dollars (USD)", function () {
            });
        xit("Verify that Japanese Yen (JPY) " +
            "converted to US Dollars (USD)", function () {
            });
        xit("Verify that UAE Dirham (AED) " +
            "converted to US Dollars (USD)", function () {
            });
        xit("Verify that British Pound Sterling (GBP) " +
            "converted to US Dollars (USD)", function () {
            });
        xit("Verify that South African Rand (ZAR) converted to " +
            "Indian Rupees (INR)", function () {
            });
        xit("Verify that US Dollars (USD) " +
            "converted to Hong Kong Dollars (HKD)", function () {
            });
        xit("Verify that US Dollars (USD) " +
            "converted to Japanese Yen (JPY)", function () {
            });
    });
});