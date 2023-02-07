function Cards() {
    class MenuCard {
        constructor(imgSrc, title, descr, price, parentSelector, ...classes) {
            this.imgSrc = imgSrc;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const elem = document.createElement('div');
            if (this.classes.length === 0) {
                this.elem = 'menu__item';
                elem.classList.add(this.elem);
            } else {
                this.classes.forEach(className => elem.classList.add(className));
            }
            elem.innerHTML =
                `
                    <img src="${this.imgSrc}" alt="vegy">
                    <h3 class="menu__item-subtitle">"${this.title}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> тг/день</div>
                    </div>
                    `;
            this.parent.append(elem);
        }
    }

    // const getRecourse = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // };

    // getRecourse('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, title, descr, price}) => {
    //             new MenuCard(img, title, descr, price * 500, '.menu__field .container', 'menu__item').render();
    //         });
    //     });

        axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, title, descr, price}) => {
                new MenuCard(img, title, descr, price * 500, '.menu__field .container', 'menu__item').render();
            });
        });
}

export default Cards;