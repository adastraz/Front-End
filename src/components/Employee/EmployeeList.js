import React, {useState, useEffect} from 'react'
import {fetchCompanyArray} from '../../actions'
import {connect} from 'react-redux'
import EmployerCard from '../Employer/EmployerCard'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap'
import EmployeeHeader from './EmployeeHeader'

const EmployeeList = props => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === props.array.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? props.array.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    const goToIndex = (newIndex) => {
        if (animating) return
        setActiveIndex(newIndex)
    }

    const slides = props.array.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <EmployerCard item={item} />
            </CarouselItem>
        );
    });
    
    useEffect(() => {
        props.fetchCompanyArray()
    }, [])

    console.log('PROPS.ARRAY IN EMPLOYEE PROFILE', props.array)
    
    return(
        <div>
            <EmployeeHeader />
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
        isLoading: state.isLoading,
        user: state.user,
        array: state.array,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCompanyArray })(EmployeeList)