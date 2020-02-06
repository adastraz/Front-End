import React, {useState, useEffect} from 'react' 
import {connect} from 'react-redux'
import {fetchUserArray} from '../../actions'
import EmployeeCard from '../Employee/EmployeeCard'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
import Header from '../Header'

const EmployerList = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.array.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.array.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.array.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <EmployeeCard item={item} />
          </CarouselItem>
        );
      });

    useEffect(() => {
        props.fetchUserArray()
    },[])
    console.log(props.array)
    return(
        <div>
            <Header />
            <Carousel
                interval={false}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                >
                <CarouselIndicators items={props.array} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLocation: state.isLocation,
        user: state.user,
        error: state.error,
        array: state.array
    }
}

export default connect(mapStateToProps, {fetchUserArray})(EmployerList)
