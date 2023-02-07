import Calculator from "./modules/Calculator";
import Cards from "./modules/Cards";
import Forms from "./modules/Forms";
import Modal from "./modules/Modal";
import Slider from "./modules/Slider";
import Tabs from "./modules/Tabs";
import Timer from "./modules/Timer";
import { openModal } from "./modules/Modal";

document.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 15000);

    Calculator();
    Cards();
    Forms('form', modalTimerId);
    Modal('[data-modal]', '.modal', modalTimerId);
    Slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    Tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Timer('.timer', '2023, 02, 20');
}); 


