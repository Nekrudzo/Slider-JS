const cityList = document.getElementById('city-list');

const cityName = document.getElementById('city-name');
const areaValue = document.getElementById('area-value');
const repairTimeValue = document.getElementById('repair-time-value');
const costValue = document.getElementById('cost-value');

const backButton = document.getElementById('back');

const forwardButton = document.getElementById('forward');

const pointList = document.getElementById('point-list');

const slideImgDesktop = document.getElementById('slide-img-desktop');

// формирование массива из трёх слайдов с описаниями в dl.
const info = [{
        cityName: 'Rostov-on-Don LCD admiral',
        areaValue: '81 m2',
        repairTimeValue: '3.5 months',
        costValue: 'Upon request',
        slideImgDesktop: './pics/Photo1.png',
    },
    {
        cityName: 'Sochi Thieves',
        areaValue: '105 m2',
        repairTimeValue: '4 months',
        costValue: 'Upon request',
        slideImgDesktop: './pics/Photo2.png',
    },
    {
        cityName: 'Rostov-on-Don Patriotic',
        areaValue: '93 m2',
        repairTimeValue: '3 months',
        costValue: 'Upon request',
        slideImgDesktop: './pics/Photo3.png',
    }
];

// переменные навигации вперёд/назад
let currentIndex = 0;
let prevIndex = 0;

// функция устанавливающая слайд и заменяющая информацию в dl.
const setSlide = function (index, prevIndex) {
    cityName.innerText = info[index].cityName;
    areaValue.innerText = info[index].areaValue;
    repairTimeValue.innerText = info[index].repairTimeValue;
    costValue.innerText = info[index].costValue;
    slideImgDesktop.src = info[index].slideImgDesktop;

    cityList.children[index].children[0].classList.add('completed-projects__button-top-nav--active');

    cityList.children[prevIndex].children[0].classList.remove('completed-projects__button-top-nav--active');

    // смена картинки точки
    pointList.children[index].children[0].src = './pics/icon/icon_point_active.svg'
    pointList.children[prevIndex].children[0].src = './pics/icon/icon_point_no-active.svg'
};

// функция с условием (чтобы был реверс) при клике вперёд
const onForwardButtonClick = function () {
    prevIndex = currentIndex;
    currentIndex++;
    
    if (currentIndex > 2) {
        currentIndex = 0;
    }
    
    setSlide(currentIndex, prevIndex);
}

// функция с условием (чтобы был реверс) при клике назад
const onBackButtonClick = function () {
    prevIndex = currentIndex;
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = 2;
    }

    setSlide(currentIndex, prevIndex);
}

// cтрелки десктоповые и мобилки
forwardButton.addEventListener('click', onForwardButtonClick);

backButton.addEventListener('click', onBackButtonClick);

// функция по событию, хэндлер (когда происходит событие (клик) вызывается эта функция).
const onSliderClick = function (evt, list) {
    prevIndex = currentIndex;
    let index = currentIndex;

    for (let i = 0; i < list.children.length; i++) {
        const element = list.children[i].children[0];

        if (element === evt.target) {
            index = i;
        }
    };

    if (index === currentIndex) {
        return;
    }

    currentIndex = index;
    setSlide(index, prevIndex);
}

// навигация верхнего списка
cityList.addEventListener('click', function (evt) {
    onSliderClick(evt, cityList);
});

// точки
pointList.addEventListener('click', function (evt) {
    onSliderClick(evt, pointList);
});