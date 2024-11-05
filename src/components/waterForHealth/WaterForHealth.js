import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import helth1 from "../../../src/assets/images/water-heath/helth-img-1.jpg";
import helth2 from "../../../src/assets/images/water-heath/helth-img-2.jpg";
import helth3 from "../../../src/assets/images/water-heath/helth-img-3.jpg";
import helth4 from "../../../src/assets/images/water-heath/helth-img-4.jpg";
import helth5 from "../../../src/assets/images/water-heath/helth-img-5.jpg";
import helth6 from "../../../src/assets/images/water-heath/helth-img-6.jpg";
import helth7 from "../../../src/assets/images/water-heath/helth-img-7.jpg";
import helth8 from "../../../src/assets/images/water-heath/helth-img-8.jpg";
import helth9 from "../../../src/assets/images/water-heath/helth-img-9.jpg";

const health = [
  {
    id: "1",
    img: helth1,
    heading:
      "Find out the impact of lead in your drinking water, and how to eliminate it.",
    paragraph:
      "Find out the impact of lead in your drinking water, and how to eliminate it.",
  },
  {
    id: "2",
    img: helth2,
    heading: "5 Reasons Why Your Skin Needs to Stay Hydrated",
    paragraph:
      "Drinking mineral water that is going to prove very beneficial for your skin in the long run.",
  },
  {
    id: "3",
    img: helth3,
    heading: "Understanding the Relation Between Hydration and Mental Health",
    paragraph:
      "Your mineral water intake has a huge impact on your mental health.",
  },
  {
    id: "4",
    img: helth4,
    heading: "Take a Rain Check: Do’s and Don’ts for a Healthy Monsoon",
    paragraph:
      "Monsoon season calls for extra care and attention being paid to our health.",
  },
  {
    id: "5",
    img: helth5,
    heading: "Benefits of Drinking More Water in Monsoon Season",
    paragraph:
      "It is imperative you keep drinking water and stay hydrated throughout the monsoon season.",
  },
  {
    id: "6",
    img: helth6,
    heading: "Why  Fine fortunate trading limited is the best I can give my daughter",
    paragraph:
      "We parents have an enormous responsibility when it comes to the well-being of our children.",
  },
  {
    id: "7",
    img: helth7,
    heading:
      "Har paani ki bottle  Fine fortunate trading limited nahi! (Not every bottle of water is  Fine fortunate trading limited)",
    paragraph:
      "THOUSANDS HAVE LIVED WITHOUT LOVE, NOT ONE WITHOUT WATER.” – W.H. AUDEN.",
  },
  {
    id: "8",
    img: helth8,
    heading:
      "Is drinking bottled water safe and beneficial for your child’s health? Find out!",
    paragraph:
      "Water is life, and clean water means health.’ The question that arises here is, are we drinking clean water?",
  },
  {
    id: "9",
    img: helth9,
    heading: "Visit to the  Fine fortunate trading limited plant in Mumbai and why  Fine fortunate trading limited is my favourite",
    paragraph:
      "I started my career as a Radio Jockey back in 2006, and have always been a working woman my life,",
  },
];

function WaterForHealth() {
  const [item, setItem] = useState(health);
  const [visivel, setVisivel] = useState(3);
  const showMoreItem = () => {
    setVisivel((previousValue) => previousValue + 3);
  };

  return (
    <>
      <section
        className="page-title page-title-2"
        style={{
          backgroundImage:
            'url("http://fastwpdemo.com/newwp/paanee/wp-content/uploads/2021/10/image-26.png")',
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Water For Health</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item">
                  <Link to="/home">Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Water For Health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="water-for-health pt_120-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sec-title mb_50 text-center">
                <h5 className="mb_20 fs_16 fw_medium text-uppercase theme_color ff_rubik">
                  Water for Health
                </h5>
                <h2 className="fs_45 fw_sbold">Water for Health</h2>
              </div>
            </div>

            {item?.slice(0, visivel).map((item, i) => {
              // console.log(item.img)
              return (
                <div className="col-lg-4 content" key={item.i}>
                  <div className="artical-section">
                    <div className="artical-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="artical-containt">
                      <h4>{item.heading}</h4>
                      <p>{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="link-box text-center">
              <button
                type="button"
                className="theme_btn_2 paanee_btn"
                onClick={showMoreItem}
              >
                <span>Load More</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container benefit_wrap ">
          <div className="row">
            <h1 className="benefit_heading_title">Fifteen benefits of drinking water</h1>
            <ul className="list_item">
              <li className="benefit_list">
                <p className="">
                  <small>
                    Possible benefits of drinking water range from keeping the
                    kidneys healthy to losing weight.
                  </small>
                </p>
              </li>
              <li className="benefit_list">
                <p>
                  <small>
                    To function properly, all the cells and organs of the body
                    need water.
                  </small>
                </p>
              </li>
              <li className="benefit_list">
                <p>
                  <small>Here are some reasons our body needs water:</small>
                </p>
              </li>
            </ul>

            <ul className="benefit-item col-lg-6">
              <li className="benefit_item_list">
                <h5>1. It lubricates the joints</h5>
                <p className="list_details">
                  <small>
                    Cartilage, found in joints and the disks of the spine,
                    contains around 80 percent water. Long-term dehydration can
                    reduce the joints’ shock-absorbing ability, leading to joint
                    pain.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>2. It forms saliva and mucus</h5>
                <p className="list_details">
                  <small>
                    Saliva helps us digest our food and keeps the mouth, nose,
                    and eyes moist. This prevents friction and damage. Drinking
                    water also keeps the mouth clean. Consumed instead of
                    sweetened beverages, it can also reduce tooth decay.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>3. It delivers oxygen throughout the body</h5>
                <p className="list_details">
                  <small>
                    Blood is more than 90 percent water, and blood carries
                    oxygen to different parts of the body.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>4. It boosts skin health and beauty</h5>
                <p className="list_details">
                  <small>
                    With dehydration, the skin can become more vulnerable to
                    skin disorders and premature wrinkling.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>
                  5. It cushions the brain, spinal cord, and other sensitive
                  tissues
                </h5>
                <p className="list_details">
                  <small>
                    Dehydration can affect brain structure and function. It is
                    also involved in the production of hormones and
                    neurotransmitters. Prolonged dehydration can lead to
                    problems with thinking and reasoning.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>6. It regulates body temperaturey</h5>
                <p className="list_details">
                  <small>
                    Water that is stored in the middle layers of the skin comes
                    to the skin’s surface as sweat when the body heats up. As it
                    evaporates, it cools the body. In sport.
                  </small>
                </p>
                <p className="list_details">
                  <small>
                    Some scientists have suggested thatTrusted Source when there
                    is too little water in the body, heat storage increases and
                    the individual is less able to tolerate heat strain.
                  </small>
                </p>
                <p className="list_details">
                  <small>
                    Having a lot of water in the body may reduce physical strain
                    if heat stress occurs during exercise. However, more
                    research is needed into these effects.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>7. The digestive system depends on it</h5>
                <p className="list_details">
                  <small>
                    The bowel needs water to work properly. Dehydration can lead
                    to digestive problems, constipation, and an overly acidic
                    stomach. This increases the risk of heartburn and stomach
                    ulcers.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>8. It flushes body waste</h5>
                <p className="list_details">
                  <small>
                    Water is needed in the processes of sweating and removal of
                    urine and feces.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>9. It helps maintain blood pressure</h5>
                <p className="list_details">
                  <small>
                    A lack of water can cause blood to become thicker,
                    increasing blood pressure.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>10. The airways need it</h5>
                <p className="list_details">
                  <small>
                    When dehydrated, airways are restricted by the body in an
                    effort to minimize water loss. This can make asthma and
                    allergies worse.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>11. It makes minerals and nutrients accessible</h5>
                <p className="list_details">
                  <small>
                    These dissolve in water, which makes it possible for them to
                    reach different parts of the body.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>12. It prevents kidney damage</h5>
                <p className="list_details">
                  <small>
                    The kidneys regulate fluid in the body. Insufficient water
                    can lead to kidney stones and other problems.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>13. It boosts performance during exercise</h5>
                <p className="list_details">
                  <small>
                    Dehydration during exercise may hinder performance.
                  </small>
                </p>
                <p className="list_details">
                  <small>
                    Some scientists have proposed that consuming more water
                    might enhance performance during strenuous activity.
                  </small>
                </p>
                <p className="list_details">
                  <small>
                    More research is needed to confirm this, but one review
                    found that dehydration reduces performance in activities
                    lasting longer than 30 minutes.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>14. Weight loss</h5>
                <p className="list_details">
                  <small>
                    Water may also help with weight loss, if it is consumed
                    instead of sweetened juices and sodas. “Preloading” with
                    water before meals can help prevent overeating by creating a
                    sense of fullness.
                  </small>
                </p>
              </li>

              <li className="benefit_item_list">
                <h5>15. It reduces the chance of a hangover</h5>
                <p className="list_details">
                  <small>
                    When partying, unsweetened soda water with ice and lemon
                    alternated with alcoholic drinks can help prevent
                    overconsumption of alcohol.
                  </small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default WaterForHealth;
