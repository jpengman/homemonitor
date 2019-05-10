/**
 * Handles page routing using location hash
 */

var checkHash = function() {
	clean = true;
	switch (location.hash) {
	case "#stove":
		drawContentWith('chartByType', 'Vedspisen till Ackumulatortanken',
				'HEATING_FP_ACC');
		break;
	case "#acc":
		drawContentWith('chartByType', 'Ackumulator tanken till Värmepumpen',
				'HEATING_ACC_HP');
		break;
	case "#vp":
		drawContentWith('chartByID', 'Köldbäraren i Värmepumpen', '31');
		break;
	case "#floor":
		drawContentWith('chartByType', 'Temperaturen i golvärmesystemet',
				'HEATING_FH');
		break;
	case "#outside_now":
		drawContentWith('chartByType', 'Utomhustemperaturen', 'OUTSIDE');
		break;
	case "#outside_days":
		drawContentWith('OutsideHistory', 'Min-Max-Medel över dagar', 'DAYS');
		break;
	case "#outside_weeks":
		drawContentWith('OutsideHistory', 'Min-Max-Medel över veckor', 'WEEKS');
		break;
	case "#outside_months":
		drawContentWith('OutsideHistory', 'Min-Max-Medel över månader',
				'MONTHS');
		break;
	case "#outside_years":
		drawContentWith('OutsideHistory', 'Min-Max-Medel över år', 'YEARS');
		break;
	case "#overview":
		drawContentWith('overview', null, null);
		break;
	case "#vp_usage":
		drawContentWith('meterYearChart', 'Antalet starter för Värmepumpen', 'HP_STARTS-DAILY');
		break;
	case "#rain_acc":
		drawContentWith('rainChart', 'Ackumulerad mängd regn', 2);
		break;
	case "#rain_history":
		drawContentWith('rainHistory', 'Regn historik', null);
		break;
	case "#mower_map":
		drawContentWith("mowerMap", "Gräsklipparen", null);
		break;
	case "#groundwater_this_year":
		drawContentWith("groundwaterChart", "Grundvatten", (new Date())
				.getFullYear());
		break;
	case "#groundwater_small":
		drawContentWith("groundwaterChart", "Grundvatten", "Små");
		break;
	case "#groundwater_large":
		drawContentWith("groundwaterChart", "Grundvatten", "Stora");
		break;
	case "#incoming_water":
		drawContentWith("meterYearChart", "Inkommande vatten", "INCOMING_WATER");
		break;
	case "#solar_power":
			drawContentWith("solarPowerChart", "Solcellerna i dag", "TODAY");
			break;
	default:
		drawContentWith('start', '', null);
		break;
	}
	if ($('#navbarNavAltMarkup').is(":visible")) {
		$('#navbarNavAltMarkup').collapse('hide');
	}
}
$(window).on('hashchange', checkHash);
$(window).trigger('hashchange')
