import React from "react"
import NextNprogress from 'nextjs-progressbar';
import  wrapper from "../store/store";
import 'semantic-ui-css/semantic.min.css'


const MyApp = ({ Component, pageProps}) => (
    <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);