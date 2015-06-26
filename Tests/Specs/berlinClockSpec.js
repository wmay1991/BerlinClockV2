

describe('Getting minutes Row', function () {
    it("Bottom minutes row should light up", function () {
        expect((GetMinutesRow(10))).toBe("YYOO");
    });
});

describe('Getting five minutes Row', function () {
    it("Five minutes row should light up", function () {
        expect(GetFiveMinutesRow(15)).toBe("YYROOOOOOOO")
    });
});

describe('Getting single hours Row', function () {
    it("Lower hours row should light up", function () {
        expect(GetSingleHoursRow(15)).toBe("RRRO");
    });
});

describe('Getting five hours Row', function () {
    it("Lower hours row should light up", function () {
        expect(GetFiveHoursRow(15)).toBe("RRRO");
    });
});

describe('Get seconds', function () {
    it("Seconds row should light up", function () {
        expect(GetSeconds(2)).toBe("Y")
    })
})

describe('Get entire clock', function () {
    it("Get entire clock pattern", function () {
        expect(GetEntireClock(10, 10, 5, 2)).toBe("YYOOYYOOOOOOOOORROORROOO")
    })
})