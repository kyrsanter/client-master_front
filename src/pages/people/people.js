import React, {useCallback, useEffect, useRef} from 'react'
import {connect} from 'react-redux';
import {getPeople} from "../../actions/people.actions";
import PeopleLIstItem from "../../components/people-list-item/people-list-item";
import ScrollLoader from "../../components/scroll-loader/scroll-loader";

const People = (props) => {
    let {queryParams: {limit, skip}, people, fetchingPeople, gettedPeople, hasMore, hasScrollLoading} = props;
    let observe = useRef();

    useEffect(() => {
        if (people.length === 0) {
            props.getPeople({limit, skip}, gettedPeople)
        }
    }, []);

    let lastElement = useCallback((node) => {
        if (fetchingPeople) {
            return;
        }
        if (observe.current) {
            observe.current.disconnect()
        }
        observe.current = new IntersectionObserver( (enrties) => {
            if (enrties[0].isIntersecting && hasMore) {
                props.getPeople({limit, skip}, gettedPeople)
            }
        }, {root: null, threshold: 0.1});
        if (node) {
            observe.current.observe(node)
        }
        console.log(observe)
    });


    return (
        <div className="people-page">
            <div className="container">
                {
                    people.map( (person, i) => {
                        if (i === people.length - 1) {
                            return (
                                <div ref={lastElement} key={person._id} className="row">
                                    <div className="col-lg-12">
                                        <PeopleLIstItem {...person}/>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={person._id} className="row">
                                    <div className="col-lg-12">
                                        <PeopleLIstItem {...person}/>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        hasScrollLoading: state.peopleReducer.hasScrollLoading,
        hasMore: state.peopleReducer.hasMore,
        gettedPeople: state.peopleReducer.gettedPeople,
        people: state.peopleReducer.people,
        queryParams: state.peopleReducer.queryParams,
        fetchingPeople: state.peopleReducer.fetchingPeople
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPeople: (params, gettedPeople) => dispatch(getPeople(params, gettedPeople))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);