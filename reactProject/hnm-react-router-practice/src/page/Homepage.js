import React from "react";
import Menubar from "../component/Menubar";

//제품 정보
const products = {
  losefitShirt: {
    name: "루즈핏 프린트 티셔츠",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/72/47/72478a52ea5263f0f9c5eea5f5bcefa4708fab6c.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  },
  bagfitPants: {
    name: "배기핏 바지",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/4c/0f/4c0fa063517d6ee31e7d4238f3d312dfe468a7ff.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]",
  },
  slimfitTop: {
    name: "슬림핏 탑",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/93/d9/93d95125917d6ec9517eb8eb86d82f9b6fc64ff1.jpg],origin[dam],category[men_tshirtstanks_tanks],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  },
  legularfitShirt: {
    name: "레귤러핏 셔츠",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/42/0a/420a86e0601915b842f214f415bcc96d27dd4074.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  },
  legularfitOverShirt: {
    name: "레귤러핏 오버셔츠",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/c7/19/c719821acea0b748a3955ed266b8dfbcd3b2e09b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  },
  cottonCap: {
    name: "코튼 캡모자",
    img: "https://lp2.hm.com/hmgoepprod?set=source[/d1/ed/d1ed9d7a1655c019c8c8a844363b1b1cce508f61.jpg],origin[dam],category[men_accessories_hatscaps_caps],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
  },
};

const Homepage = () => {
  return (
    <div>
      <Menubar />
      {/*제품 정보 띄우기*/}
      <div className="products-container">
        {Object.entries(products).map(([key, value]) => (
          <div key={key} className="products-div">
            <img className="product-img" src={value.img} alt="products-img" />
            <h3>{value.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
