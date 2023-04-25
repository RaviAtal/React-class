import React from "react";
import Slider from "react-slick";

const UseOfSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className=" bg-success">
        <div className="container py-5">
          <Slider>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio repellendus velit ipsam minus dolore ratione est
              nostrum illum earum commodi quos voluptatum error architecto non,
              recusandae libero. Fugiat, repellendus!
            </div>
          </Slider>
        </div>
      </section>{" "}
    </>
  );
};

export default UseOfSlider;
