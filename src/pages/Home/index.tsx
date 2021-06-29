import React, {FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronsRight} from 'react-icons/fi';

import api from '../../services/api';

import {Container, Content, Countries, Error} from './styles';

import InputText from '../../components/InputText';
import ButtonConfirm from '../../components/ButtonConfirm';
import Logo from '../../components/Logo';
import {toPascal} from '../../functions/word';

interface ICountry {
    All: {
        country: string;
        capital_city: string;
        continent: string;
        updated: string;
        abbreviation: string;
    };
}

const Home: React.FC = () => {
    const [newCountry, setNewCountry] = useState('');
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [messageError, setMessageError] = useState('');
    const [formError, setFormError] = useState(false);

    const [loading, setLoading]: [
        boolean,
        (loading: boolean) => void
    ] = useState<boolean>(false);

    async function getCountry(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormError(false);
        setCountries([]);

        if (!newCountry) {
            setFormError(true);
            setMessageError('Insira o nome do país em Inglês');
            return;
        }

        try {
            setLoading(true);

            const response = await api.get<ICountry>(`vaccines?country=${toPascal(newCountry)}`);
            const country = response.data;

            setMessageError('');

            if ('All' in country) {
                setCountries([country]);
            } else {
                setMessageError('Ocorreu um erro na busca deste país, por favor escreve o nome do país em inglês');
            }
        } catch (err) {
            setMessageError('Ocorreu um erro');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Logo/>
            <Content show={true}>
                <h3>Dados de vacinas da</h3>
                <h1>COVID-19</h1>
                <form onSubmit={getCountry}>
                    <InputText placeholder={'Insira o nome do país*'}
                               type={'text'}
                               autoComplete={'false'}
                               name={'formCountry'}
                               id={'formCountry'}
                               onChange={event => setNewCountry(event.target.value)}
                               showDisabled={loading}
                               error={formError}
                    />
                    <ButtonConfirm type={'submit'}
                                   label={'Buscar'}
                                   showLoading={loading}
                    />
                </form>

                {messageError && <Error>{messageError}</Error>}

                <Countries>
                    {countries.map(country => (
                        <Link
                            key={country.All.country}
                            to={`/details/${country.All.country}`}
                        >
                            <div>
                                <strong>{country.All.country} </strong>
                                <strong>{country.All.abbreviation}</strong>
                                <p>Capital: {country.All.capital_city}</p>
                                <p>Continente: {country.All.continent}</p>
                            </div>
                            <FiChevronsRight size={20}/>
                        </Link>
                    ))}
                </Countries>

            </Content>
        </Container>
    )
}

export default Home;
