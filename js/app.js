/**
 * -----------------------------------------------------------------------------
 * Demo: Working With a Form.
 * -----------------------------------------------------------------------------
 * Here, we review how a form is being manipulated by JS. In the process, we use
 * the JS built-in FormData object to easily manipulate the form fields, and to 
 * store the form values in the local storage. Since the model holds the form 
 * values, instead of form values we could have saved the model in the local 
 * storage. 
 * 
 * In addition, the form inputs are being dynamically created based on the 
 * Model properties. Also, the usage of the arrow functions is demonstrated in 
 * the Controller class. More about different features we use can be found at:
 * 
 * {@link https://www.w3schools.com/html/html_forms.asp HTML Forms}
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 * {@link https://www.w3schools.com/js/js_arrow_function.asp JS Arrow Function}.
 * {@link https://developers.google.com/fonts/docs/getting_started Google Fonts API}
 * 
 * TODO: On input change, update the model with the input value.
 */
import {Model}      from "./Model.js";
import {View}       from "./View.js";
import {Controller} from "./Controller.js";

const app = new Controller(new Model(), new View());