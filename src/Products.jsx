import React from "react";
import Card from "./Components/Card";

import s2 from "./images/j1.png";
import s3 from "./images/j2.png";
import s4 from "./images/j3.png";
import s5 from "./images/j32.png";

import s6 from "./images/J4.png";
import s7 from "./images/J5.png";

import ts1 from "./images/ts1.png";
import ts2 from "./images/ts2.png";
import ts3 from "./images/ts3.png";
import ts4 from "./images/ts4.png";
import ts5 from "./images/ts5.png";
import ts7 from "./images/ts7.png";
import ts6 from "./images/ts6.png";

import tss1 from "./images/tss1.png";
import tss2 from "./images/tss2.png";

import ms1 from "./images/ms1.jpg";
import ms2 from "./images/ms2.jpg";
import ms3 from "./images/ms3.jpg";
import ms4 from "./images/ms4.jpg";
import ms5 from "./images/ms5.jpg";
import ms7 from "./images/ms7.jpg";
import ms8 from "./images/ms8.jpg";
import ms9 from "./images/ms9.jpg";
import ms10 from "./images/ms10.jpg";

const Products = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Trending Now</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <Card
              imgbg={ts1}
              ctitle="T shirt (BMHA)"
              ctext="Todoroki Shoto"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts3}
              ctitle="T shirt (Tokyo Ghoul)"
              ctext="Kaneki Ken"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts2}
              ctitle="Full Sleves (BMHA)"
              ctext="Bakugo "
              btntext="Add to Cart"
            />
            <Card
              imgbg={tss1}
              ctitle="T shirt (Naruto)"
              ctext="Ichiraku Ramen"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts5}
              ctitle="T shirt (Tokyo Ghoul)"
              ctext="One Eyed Ghoul"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts7}
              ctitle="T shirt (Naruto)"
              ctext="Itachi Uchiha"
              btntext="Add to Cart"
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center">Our Collections</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <Card
              imgbg={s2}
              ctitle="Hoodies (Bersek) "
              ctext="Guts"
              btntext="Add to Cart"
            />
            <Card
              imgbg={s6}
              ctitle="Hoodies (Gundam)"
              ctext="Gundam"
              btntext="Add to Cart"
            />
            <Card
              imgbg={s3}
              ctitle="Hoodies (Naruto)"
              ctext="Naruto"
              btntext="Add to Cart"
            />

            <Card
              imgbg={s5}
              ctitle="Full Sleves (AOT)"
              ctext="Scouts "
              btntext="Add to Cart"
            />
            <Card
              imgbg={s4}
              ctitle="Full Sleves (AOT) "
              ctext="Mikasa"
              btntext="Add to Cart"
            />
            <Card
              imgbg={s7}
              ctitle="Full Sleves (Haikyuu)"
              ctext="Ushijima & Hinata"
              btntext="Add to Cart"
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center">Anime Masks</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <Card
              imgbg={ms1}
              ctitle="Mask (AOT) "
              ctext="Colossal Titan"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms2}
              ctitle="Mask (Naruto)"
              ctext=" Kurama"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms3}
              ctitle="Mask (Pokemon)"
              ctext="Pikachu"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms4}
              ctitle="Mask (Naruto)"
              ctext="Uzumaki Naruto"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms5}
              ctitle="Mask (One Punch Man)"
              ctext="Saitama"
              btntext="Add to Cart"
            />

            <Card
              imgbg={ms7}
              ctitle="Mask (Naruto)"
              ctext="Black Anbu "
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms8}
              ctitle="Mask (BMHA)"
              ctext="All Might"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms9}
              ctitle="Mask (Tokyo Ghoul)"
              ctext="Kaneki Ken"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ms10}
              ctitle="Mask (Naruto)"
              ctext="Akatsuki"
              btntext="Add to Cart"
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center">DARK COLLECTION</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <Card
              imgbg={ts3}
              ctitle="T shirt (Tokyo Ghoul)"
              ctext="Kaneki Ken"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts4}
              ctitle="T shirt (Tokyo Ghoul)"
              ctext="Kaneki Ken"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts5}
              ctitle="T shirt (Tokyo Ghoul)"
              ctext="Kaneki Ken"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts6}
              ctitle="T shirt (Naruto)"
              ctext="Uchiha Sasuke"
              btntext="Add to Cart"
            />
            <Card
              imgbg={ts7}
              ctitle="T shirt (Naruto)"
              ctext="Uchiha Itachi"
              btntext="Add to Cart"
            />
            <Card
              imgbg={tss2}
              ctitle="T shirt (Demon Slayer)"
              ctext="Tanjiro Kamado"
              btntext="Add to Cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
