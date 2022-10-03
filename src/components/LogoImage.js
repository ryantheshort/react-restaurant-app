import Carousel from "react-bootstrap/Carousel";

 

function LogoFeatured() {
    
    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="./Images/vicspizza.png"
                    alt="First Slide"
                />   
            </Carousel.Item>

        </Carousel>
            


    );
};

export default LogoFeatured;