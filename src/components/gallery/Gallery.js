import { Container, Row, Col } from "reactstrap";

import galleryStyles from "./Gallery.module.css";

//import { GalleryData } from "./GalleryData";
import image1 from "../../content/1.jpg";
import image2 from "../../content/2.jpg";
import image3 from "../../content/3.jpg";
import image4 from "../../content/4.jpg";
import image5 from "../../content/5.jpg";
import image6 from "../../content/6.jpg";
import image7 from "../../content/7.jpg";
import image8 from "../../content/8.jpg";
import image9 from "../../content/9.jpg";
import image10 from "../../content/10.jpg";
import image11 from "../../content/11.jpg";
import image12 from "../../content/12.jpg";
import image13 from "../../content/13.jpg";
import image14 from "../../content/14.jpg";
import image15 from "../../content/15.jpg";
import image16 from "../../content/16.jpg";
import image17 from "../../content/17.jpg";
import image18 from "../../content/18.jpg";
import image19 from "../../content/19.jpg";
import image20 from "../../content/20.jpg";
import image21 from "../../content/21.jpg";

function Gallery() {
  return (
    <Container fluid>
      <Row>
        <Col className={"text-center"}>
          <img
            src={image1}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image2}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image3}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>

      <Row>
        <Col className={"text-center"}>
          <img
            src={image4}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image5}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image6}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
      
      <Row>
        <Col className={"text-center"}>
          <img
            src={image7}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image8}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image9}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
      
      <Row>
        <Col className={"text-center"}>
          <img
            src={image10}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image11}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image12}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
      
      <Row>
        <Col className={"text-center"}>
          <img
            src={image13}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image14}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image15}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
      
      <Row>
        <Col className={"text-center"}>
          <img
            src={image16}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image17}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image18}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
      
      <Row>
        <Col className={"text-center"}>
          <img
            src={image19}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image20}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
        <Col className={"text-center"}>
          <img
            src={image21}
            alt="gallery image"
            className={galleryStyles.image}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
