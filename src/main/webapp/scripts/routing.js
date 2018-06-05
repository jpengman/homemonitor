/**
 * Handles page routing using location hash
 */

var checkHash = function() {
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
	case "#tanks":
		drawContentWith('tanks', 'Ögonblicksbild över värmesystemet', null);
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
		drawContentWith('meterChart', 'Antalet starter för Värmepumpen', 1);
		break;
	default:
		drawContentWith('tanks', 'Ögonblicksbild över värmesystemet', null);
		break;
	}
	if ($('#navbarNavAltMarkup').is(":visible")) {
		$('#navbarNavAltMarkup').collapse('hide');
	}
}
$(window).on('hashchange', checkHash);
$(window).trigger('hashchange')
