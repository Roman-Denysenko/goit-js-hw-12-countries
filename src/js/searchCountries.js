import API from './fetchCountries.js';
import debounce from 'lodash.debounce';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import ref from './ref';

let nameCountrie = ``;
ref.input.addEventListener(`input`, onGetValue())

function onGetValue() {
    nameCountrie = ref.input.value;
}

API.fetchCountries(nameCountrie).then(data=>console.log(data));

PNotify.alert('Notice me, senpai!');

 