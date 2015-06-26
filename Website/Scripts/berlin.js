
function GetMinutesRow(minutes) {
    switch ((minutes % 4)) {
        case 1:
            return "YOOO";
            break;
        case 2:
            return "YYOO";
            break;
        case 3:
            return "YYYO";
            break;
        case 0:
            return "YYYY";
            break;
        default:
            return "OOOO";
            break;

    }
}


function GetFiveMinutesRow(minutes) {
        switch(Math.floor(minutes / 5)) {
            case 1:
                return "YOOOOOOOOOO"
                break;
            case 2:
                return "YYOOOOOOOOO"
                break;
            case 3:
                return "YYROOOOOOOO"
            case 4:
                return "YYRYOOOOOOO"
                break;
            case 5:
                return "YYRYYOOOOOO"
                break;
            case 6:
                return "YYRYYROOOOO";
                break;
            case 7:
                return "YYRYYRYOOOO";
                break;
            case 8:
                return "YYRYYRYYOOO";
                break;
            case 9:
                return "YYRYYRYYROO";
                break;
            case 10:
                return "YYRYYRYYRYO";
                break;
            case 11:
                return "YYRYYRYYRYY";
                break;
            default:
                return "OOOOOOOOOOO";
                break;
                
        }
    }

    function GetSingleHoursRow(hours) {
        switch (hours % 4) {
            case 1:
                return "ROOO";
                break;
            case 2:
                return "RROO";
                break;
            case 3:
                return "RRRO";
                break;
            case 0:
                return "RRRR";
                break;
            default:
                return "OOOO";
                break;
        }
    }

    function GetFiveHoursRow(hours) {
        switch ((Math.floor(hours / 5))) {
            case 1:
                return "ROOO";
                break;
            case 2:
                return "RROO";
                break;
            case 3:
                return "RRRO";
                break;
            case 4:
                return "RRRR";
                break;
            default:
                return "OOOO";
                break;
        }
    }

    function GetSeconds(seconds) {
        switch (seconds % 2) {
            case 1:
                return "O";
                break;
            case 0:
                return 'Y';
                break;
            default:
                return "O";
                break;
        }
    }

