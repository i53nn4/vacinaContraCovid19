import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronsLeft} from 'react-icons/fi';
import {Container, Content, MoreDetails} from './styles';
import api from '../../services/api';
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

interface DetailsParams {
    details: string;
}

interface Country {
    All: {
        country: string;
        population: number;
        people_vaccinated: number;
        people_partially_vaccinated: number;
        life_expectancy: string;
        updated: string;
    };
}

const Details: React.FC = () => {
    const [country, setCountry] = useState<Country | null>(null);

    const [loading, setLoading]: [
        boolean,
        (loading: boolean) => void
    ] = useState<boolean>(false);

    const {params} = useRouteMatch<DetailsParams>();

    useEffect(() => {

        setLoading(true);

        api.get(`vaccines?country=${params.details}`).then(response => {
            setCountry(response.data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })

    }, [params.details]);

    return (
        <Container>
            <Logo/>
            <Content show={true}>
                <h3>Dados de vacinas da</h3>
                <h1>COVID-19</h1>

                <Loading show={loading}/>

                <MoreDetails show={!loading}>
                    {country && (
                        <Link to='/'>
                            <div>
                                <strong>{country.All.country}</strong>
                                <p>População: {country.All.population}</p>
                                <p>Pessoas Vacinadas: {country.All.people_vaccinated}</p>
                                <p>
                                    Pessoas Parcialmente Vacinadas:{' '}
                                    {country.All.people_partially_vaccinated}
                                </p>
                                <p>Expectativa de vida no País: {country.All.life_expectancy}</p>
                                <p>Última atualização: {country.All.updated}</p>
                            </div>
                            <FiChevronsLeft size={20}/>
                        </Link>
                    )}
                </MoreDetails>

            </Content>
        </Container>
    );
};

export default Details;
