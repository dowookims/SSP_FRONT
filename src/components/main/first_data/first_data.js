import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const json_data = [{"title": "\\ub9c8\\ub728 \\uac00\\uc8fd \\uba85\\ud568\\uc9c0\\uac11 \\ub0a8\\uc131 \\uba85\\ud568\\ucf00\\uc774\\uc2a4 \\ucd94\\ucc9c", "price": "32,000", "detail": "\\ub2f9\\uc77c\\ubc1c\\uc1a1/\\ubb34\\ub8cc\\ubc30\\uc1a1", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ub9c8\\ub728 \\uac00\\uc8fd \\uce74\\ub4dc\\uc9c0\\uac11 \\ub0a8\\uc790 \\uc5ec\\uc131 \\uc18c\\uac00\\uc8fd \\uce74\\ub4dc\\uc9c0\\uac11", "price": "29,000", "detail": "\\ub2f9\\uc77c\\ubc1c\\uc1a1/\\ubb34\\ub8cc\\ubc30\\uc1a1", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ud5e4\\uc784\\ub2ec \\uc545\\uc5b4\\uac00\\uc8fd \\uc218\\uc81c \\ubc18\\uc9c0\\uac11 \\ucf54\\ubc1c\\ud2b8 \\ube14\\ub8e8 \\uc624\\ub80c\\uc9c0", "price": "700,000", "detail": "\\uc545\\uc5b4\\uac00\\uc8fd \\ud0a4\\ub9c1 \\uc99d\\uc815, \\ubb34\\ub8cc \\uc774\\ub2c8\\uc15c \\uac01\\uc778", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ud5e4\\uc784\\ub2ec \\uc218\\uc81c \\uc545\\uc5b4\\uac00\\uc8fd \\ub0a8\\uc790 \\ubc18\\uc9c0\\uac11 \\ucf54\\ubc1c\\ud2b8 \\ube14\\ub8e8", "price": "299,000", "detail": "\\uc545\\uc5b4\\ud0a4\\ub9c1 \\uc99d\\uc815, \\ubb34\\ub8cc \\uac01\\uc778 \\uc11c\\ube44\\uc2a4, \\ud560\\uc778 \\uc774\\ubca4\\ud2b8", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ubabd\\ube14\\ub791 \\uc0ac\\ud1a0\\ub9ac\\uc5bc \\ubc18\\uc9c0\\uac11 \\ud22c\\ud1a4 \\uc778\\ub514\\uace0 \\ud0a4\\ub9c1 \\uc9c0\\uac11 \\ubca8\\ud2b8 \\ubb34\\ub8cc\\uac01\\uc778 116326", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ubabd\\ube14\\ub791 \\uc0ac\\ud1a0\\ub9ac\\uc5bc \\ub0a8\\uc131 \\uce74\\ub4dc\\uc9c0\\uac11 114603", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ubabd\\ube14\\ub791 \\uc0ac\\ud1a0\\ub9ac\\uc5bc 6cc \\ubc18\\uc9c0\\uac11 113215", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\uce7c\\ub9b0 Poppy \\ud3ec\\ud53c \\uce74\\ub4dc\\uc9c0\\uac11 \\uba85\\ud568\\uc9c0\\uac11 W78192010", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\uc0b4\\ubc14\\ud1a0\\ub808\\ud398\\ub77c\\uac00\\ubaa8 \\ud398\\ub77c\\uac00\\ubaa8 \\ub354\\ube14\\uac04\\uce58\\ub2c8 \\uc9c0\\uac11 \\ubb34\\ub8cc\\uac01\\uc778", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}, {"title": "\\ud504\\ub77c\\ub2e4 \\uc704\\uc988\\ucef4\\ud37c\\ub2c8 2M0513 \\uc0ac\\ud53c\\uc544\\ub178\\ub124\\uc774\\ube44 \\ube14\\ub799\\ubc18\\uc9c0\\uac11\\ub0a8\\uc131\\uc6a9", "price": "\\ucd5c\\uc800", "detail": "\\n", "img": "https://ssl.pstatic.net/imgshopping/static/pc2014/img/search/p_120_v1.png"}]

class FirstData extends React.Component {
  render(){
    return (
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              paritialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              paritialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              paritialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {json_data.map((value, index) => {
            return <div key={index}>
              <img src={value.img} alt="great"/>
              <p>{value.price}</p>
            </div>
          })}
        </Carousel>
      </div>
    )
  }
}

export default FirstData;