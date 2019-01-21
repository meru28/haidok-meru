import headerLinksStyle from "assets/jss/rs-kit/components/headerLinksStyle.jsx";
import { list } from "postcss";
import { mlAuto } from "assets/jss/rs-kit.jsx";

const headerTampilStyle = theme => ({
  ...headerLinksStyle(theme),
  ...list,
  mlAuto
});

export default headerTampilStyle;
