const menuTree = [
    [['sun', 'Solceller'], [[HASH_SOLAR_POWER, 'I dag'], [HASH_SOLAR_POWER_YESTERDAY, 'I går'], [HASH_SOLAR_ENERGY, 'Solenergi']]],
    [['heating', 'Uppvärmning'], [[HASH_STOVE, 'Vedspisen'], [HASH_VP, 'Värmepumpen'], [HASH_VP_USAGE, 'Värmepumpen användning'], [HASH_ACC, 'Ackumulatortanken'], [HASH_FLOOR, 'Golvvärmen']]],
    [['outside', 'Utomhus'], [[HASH_OUTSIDE_NOW, 'Just Nu'], [HASH_OUTSIDE_DAYS, 'Dagar'], [HASH_OUTSIDE_WEEKS, 'Veckor'], [HASH_OUTSIDE_MONTHS, 'Månader'], [HASH_OUTSIDE_YEARS, 'År'], [HASH_RAIN_CHART, 'Regn Graf']]],
    //[['water', 'Vatten'], [[HASH_INCOMING_WATER, 'Inkommande vatten'], [HASH_GROUNDWATER_THIS_YEAR, 'Grundvatten - I år'], [HASH_GROUNDWATER_SMALL, 'Grundvatten - Små magasin'], [HASH_GROUNDWATER_LARGE, 'Grundvatten - Stora magasin']]],
    [['other', 'Annat'], [[HASH_INCOMING_WATER, 'Inkommande vatten'], [HASH_SENSOR_OVERVIEW, 'Sensorer']/*, [HASH_MOWER_MAP, 'Gräsklipparen']*/]]
];
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-sm navbar-dark bg-dark');

var toggler = document.createElement('button');
toggler.setAttribute('class', 'navbar-toggler');
toggler.setAttribute('type', 'button');
toggler.setAttribute('data-toggle', 'collapse');
toggler.setAttribute('data-target', '#navbarNavAltMarkup');
toggler.setAttribute('aria-controls', 'navbarNavAltMarkup');
toggler.setAttribute('aria-expanded', 'false');
toggler.setAttribute('aria-label', 'Toggle navigation');
var togglerSpan = document.createElement('span');
togglerSpan.setAttribute('class', 'navbar-toggler-icon');
toggler.appendChild(togglerSpan);
nav.appendChild(toggler);

var navbarBrand = document.createElement('a');
navbarBrand.setAttribute('class', 'navbar-brand');
navbarBrand.setAttribute('href', HASH_START)
navbarBrand.innerHTML = 'Anviken';
nav.appendChild(navbarBrand)

var navbarCollapse = document.createElement('div');
navbarCollapse.setAttribute('class', 'collapse navbar-collapse');
navbarCollapse.setAttribute('id', 'navbarNavAltMarkup');
nav.appendChild(navbarCollapse);

var navbarUL = document.createElement('ul');
navbarUL.setAttribute('class', 'navbar-nav');

menuTree.forEach(menuGroup => {
    var li = document.createElement('li');
    li.setAttribute('class', 'nav-item dropdown')
    var a = document.createElement('a');
    a.setAttribute('class', 'nav-link dropdown-toggle');
    a.setAttribute('data-toggle', 'dropdown');
    a.setAttribute('data-target', 'dropdown_' + menuGroup[0][0]);
    a.setAttribute('href', '#');
    a.innerHTML = menuGroup[0][1];
    var div = document.createElement('div');
    div.setAttribute('class', 'dropdown-menu');
    div.setAttribute('aria-labelledby', 'dropdown_' + menuGroup[0][0])
    menuGroup[1].forEach(menu => {
        var a = document.createElement('a');
        a.setAttribute('class', 'dropdown-item');
        a.setAttribute('href', menu[0]);
        a.innerHTML = menu[1];
        div.appendChild(a);
    });
    li.appendChild(a);
    li.appendChild(div);
    navbarUL.appendChild(li);
});
navbarCollapse.appendChild(navbarUL);
document.body.appendChild(nav);