import { boot } from "quasar/wrappers";
import Slick from "src/components/common/Slick.vue";
import Container from "src/components/common/Container.vue";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import accounting from "accounting";
// docs: http://kenwheeler.github.io/slick/
//todo:
// 1_ persian font
// 2_ git
// 3_ carousel

export default boot(({ app }) => {
  app.component("Slick", Slick);
  app.component("Container", Container);

  String.prototype.toMoney = function () {
    return accounting.formatMoney(this);
  };
  Number.prototype.toMoney = function () {
    if (!this) return "0";
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان";
  };
  // "1525687468".toMoney()
});
