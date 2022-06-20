import './style.css';
import './font_awesome/css/all.css';
import { clearAllCompletedTask, addData, populateUI } from './modules/events.js';
import deleteItem from './modules/edit&Delete.js'

const clearAll = document.querySelector('#clear');
clearAll.addEventListener('click', clearAllCompletedTask);

const dataEntry = document.querySelector('.dataEntry');
dataEntry.addEventListener('keypress', addData);

// Window Load event
window.addEventListener('load', populateUI);

deleteBtn.addEventListener('click',  deleteItem)