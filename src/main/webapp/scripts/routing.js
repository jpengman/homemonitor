
/**
 * Handles page routing using location hash
 */

var checkHash = function () {
	clean = true;
	switch (location.hash) {
		case "#stove":
			drawContentWith(CHART_BY_TYPE, 'Vedspisen till Ackumulatortanken',
				'HEATING_FP_ACC');
			break;
		case "#acc":
			drawContentWith(CHART_BY_TYPE, 'Ackumulator tanken till Värmepumpen',
				'HEATING_ACC_HP');
			break;
		case "#vp":
			drawContentWith(CHART_BY_ID, 'Köldbäraren i Värmepumpen', '31');
			break;
		case "#floor":
			drawContentWith(CHART_BY_TYPE, 'Temperaturen i golvärmesystemet',
				'HEATING_FH');
			break;
		case "#outside_now":
			drawContentWith(CHART_BY_TYPE, 'Utomhustemperaturen', 'OUTSIDE');
			break;
		case "#outside_days":
			drawContentWith(OUTSIDE_HISTORY, 'Min-Max-Medel över dagar', 'DAYS');
			break;
		case "#outside_weeks":
			drawContentWith(OUTSIDE_HISTORY, 'Min-Max-Medel över veckor', 'WEEKS');
			break;
		case "#outside_months":
			drawContentWith(OUTSIDE_HISTORY, 'Min-Max-Medel över månader',
				'MONTHS');
			break;
		case "#outside_years":
			drawContentWith(OUTSIDE_HISTORY, 'Min-Max-Medel över år', 'YEARS');
			break;
		case "#overview":
			drawContentWith(OVERVIEW, null, null);
			break;
		case "#vp_usage":
			drawContentWith(METER_YEAR_CHART, 'Antalet starter för Värmepumpen', 'HP_STARTS-DAILY');
			break;
		case "#rain_acc":
			drawContentWith(RAIN_CHART, 'Ackumulerad mängd regn', 2);
			break;
		case "#rain_history":
			drawContentWith(RAIN_HISTORY, 'Regn historik', null);
			break;
		case "#mower_map":
			drawContentWith(MOWER_MAP, "Gräsklipparen", null);
			break;
		case "#groundwater_this_year":
			drawContentWith(GROUNDWATER_CHART, "Grundvatten", (new Date())
				.getFullYear());
			break;
		case "#groundwater_small":
			drawContentWith(GROUNDWATER_CHART, "Grundvatten", "Små");
			break;
		case "#groundwater_large":
			drawContentWith(GROUNDWATER_CHART, "Grundvatten", "Stora");
			break;
		case "#incoming_water":
			drawContentWith(METER_YEAR_CHART, "Inkommande vatten", "INCOMING_WATER");
			break;
		case "#solar_power":
			drawContentWith(SOLARPOWER_CHART, "Solcellerna i dag", "TODAY");
			break;
		case "#solar_energy":
			drawContentWith(METER_CHART, "Solenergi", "SOLAR_ENERGY_DAY");
			break;
		default:
			drawContentWith(START, '', null);
			break;
	}
	if ($('#navbarNavAltMarkup').is(":visible")) {
		$('#navbarNavAltMarkup').collapse('hide');
	}
}
$(window).on('hashchange', checkHash);
$(window).trigger('hashchange')
