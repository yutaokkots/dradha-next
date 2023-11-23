import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import { createWrapper } from 'react-redux'

function Dradha({ Component, pageProps}: AppProps){

    return (
        <Provider store={wrapper.store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default wrapper.withRedux(Dradha);