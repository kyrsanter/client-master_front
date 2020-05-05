import React, {useEffect, useState} from "react";
import {reduxForm, Field} from "redux-form";
import './profile-config.css';
import {connect} from 'react-redux';
import InputField from "../input-field/input-field";
import {
    getCitiesThunk,
    getServicesThunk,
    startFetchingAllServices,
    startFetchingCities
} from "../../actions/different.actions";
import ProfileServicesList from "../profile-services-list/profile-services-list";
import Preloader from "../preloader/preloader";
import VariantsDropList from "../variants-drop-list/variants-drop-list";


const ProfileConfig = (props) => {
    let [regionOk, setRegionOk] = useState(false);
    let [cityOk, setCityOk] = useState(false);
    let [posibleRegions, setPosibleRegions] = useState([]);
    let [posibleCities, setPosibleCities] = useState([]);
    let [selectedRegion, setSelectedRegion] = useState('');
    let [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        props.startFetching();
        props.startFetchingCities();

        props.getServices();
        props.getCities();
    }, []);

    let handleRegionsChange = (e) => {
        setSelectedRegion(e.target.value);
        let {cities: {areas}} = props;
        if (e.target.value.trim() !== '') {
            let regions = areas.filter( area => area.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
            setPosibleRegions(regions);
        }
        else {
            setPosibleRegions([]);
            setRegionOk(false);
            setCityOk(false)
            setPosibleCities([]);
            setSelectedCity('')
        }
    };

    let handleCitiesChange = (e) => {
        setSelectedCity(e.target.value);
        let {cities: {areas}} = props;
        let reg = areas.filter( area => area.name === selectedRegion);
        if (e.target.value.trim() !== '') {
            let cities = reg[0].areas.filter(a => a.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
            setPosibleCities(cities);
        }
        else {
            setPosibleCities([]);
        }
    };

    let onSelectRegion = (value) => {
        setSelectedRegion(value);
        setPosibleRegions([]);
        setRegionOk(true)
    };

    let onSelectCitie = (value) => {
        setSelectedCity(value);
        setPosibleCities([]);
        setCityOk(true)
    };
    return (
        <div className="profile-config">
            <form onSubmit={props.handleSubmit}>
                {
                    !props.fetchingCities ? <Preloader/> : (
                        <>
                            <Field
                                name="region"
                                id="region"
                                label='Область в которой вы проживаете'
                                type='text'
                                text={selectedRegion}
                                required={true}
                                autoComplete='off'
                                onChange={handleRegionsChange}
                                component={InputField}/>
                            {
                                posibleRegions.length !== 0 ? <VariantsDropList list={posibleRegions} selectNeeded={onSelectRegion} /> : null
                            }
                            {
                                regionOk ? (
                                    <Field
                                        name="city"
                                        id="city"
                                        label='Город в котором вы проживаете'
                                        type='text'
                                        text={selectedCity}
                                        required={true}
                                        autoComplete='off'
                                        onChange={handleCitiesChange}
                                        component={InputField}/>
                                ) : null
                            }
                            {
                                posibleCities.length !== 0 ? <VariantsDropList list={posibleCities} selectNeeded={onSelectCitie} /> : null
                            }
                            {
                                cityOk ? (
                                    <div className='profile-adress-wrapper'>
                                        <Field
                                            name="street"
                                            id="street"
                                            label='Улица'
                                            type='text'
                                            required={true}
                                            component={InputField}/>
                                        <Field
                                            name="building"
                                            id="building"
                                            label='Дом'
                                            type='text'
                                            required={true}
                                            component={InputField}/>
                                        <Field
                                            name="flat"
                                            id="flat"
                                            label='Квартира'
                                            type='text'
                                            required={true}
                                            component={InputField}/>
                                    </div>
                                ) : null
                            }

                        </>
                    )
                }

                <h3>Услуги которые вы предоставляете:</h3>
                {
                    !props.fetchingServices ? <Preloader/> : <ProfileServicesList services={props.services}/>
                }
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        fetchingCities: state.citiesReducer.fetchingCities,
        cities: state.citiesReducer.cities,
        fetchingServices: state.servicesReducer.fetchingServices,
        services: state.servicesReducer.services
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startFetchingCities: () => dispatch(startFetchingCities()),
        getCities: () => dispatch(getCitiesThunk()),
        startFetching: () => dispatch(startFetchingAllServices()),
        getServices: () => dispatch(getServicesThunk())
    }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(ProfileConfig);

export default reduxForm({form: 'profile-config-form'})(connected)