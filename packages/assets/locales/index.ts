import enCommon from "./en/common.json";
import enHome from './en/home.json';
import svCommon from "./sv/common.json";
import svHome from './sv/home.json';
import isCommon from "./is/common.json";
import isHome from './is/home.json';

type Locale = typeof enCommon & typeof enHome & typeof svCommon & typeof svHome & typeof isCommon & typeof isHome;

const locale: Locale = {
    ...enCommon,
    ...enHome,
    ...svCommon,
    ...svHome,
    ...isCommon,
    ...isHome
};

export default locale;
