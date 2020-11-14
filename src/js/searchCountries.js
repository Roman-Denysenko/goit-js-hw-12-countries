import API from './fetchCountries.js';
import debounce from 'lodash.debounce';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import ref from './ref';
import oneCountryTpl from '../templetes/oneCountry.hbs';
import countriesTpl from '../templetes/countries.hbs';

// Set default styling.
 PNotify.defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
 PNotify.defaults.icons = 'material';

let nameCountry = ``;
ref.input.addEventListener(`input`, debounce(onGetValue, 500));
ref.form.reset()
 
function onGetValue(e) {
    e.preventDefault();
    nameCountry = e.target.value;
    
    API.fetchCountries(nameCountry).then(data => {  
        const markupOneCountry = oneCountryTpl(data);
        const markupCountries = countriesTpl(data);

       function createsCountryMarkup() {
        ref.countryList.insertAdjacentHTML('afterbegin', markupCountries);
         };

        clearMarkupContainer();
        
        if (data.length > 10) {

           PNotify.error({
               text: 'Too many matches found. Please enter a more specific query!',
               delay: 2000,            
        });
            createsCountryMarkup ();

        } else if (data.length > 1 & data.length <= 10) {
            
             createsCountryMarkup();
           

        } else if (data.length === 1) { 

            ref.countryContainer.insertAdjacentHTML('afterbegin', markupOneCountry);

        } else if (data.length === 0){

            clearMarkupContainer();

        }
         else if (data.message === "Not Found") {
             PNotify.error({
               text: 'Not found :(',
               delay: 2000
        });
        }
    })
        .catch(clearMarkupContainer());
}

function clearMarkupContainer() { 
        ref.countryContainer.innerHTML = '';
        ref.countryList.innerHTML = '';
};

 


 
