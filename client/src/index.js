import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from './redux/redux-store'
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import ru from "date-fns/locale/ru";
import format from "date-fns/format";

class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
        return format(date, "d MMMM yyyy", { locale: this.locale });
    }
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MuiPickersUtilsProvider utils={LocalizedUtils} locale={ru}>
                    <App/>
                </MuiPickersUtilsProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
