/**
 * Handles page routing using location hash
 */

var checkHash= function () {
	switch(location.hash) {
    case "#stove":
    	request = 'HEATING_FP_ACC'; content='chartByType'; drawContent();
        break;
    case "#acc":
    	request = 'HEATING_ACC_HP'; content='chartByType'; drawContent();
        break;
    case "#vp":
    	request = '31';  content='chartByID'; drawContent();;
        break;
    case "#floor":
    	request = 'HEATING_FH';  content='chartByType'; drawContent();
        break;
    case "#tanks":
    	content='tanks'; drawContent();
        break;
    case "#outside_now":
    	request = 'OUTSIDE';  content='chartByType'; drawContent();
    	break;
    case "#outside_days":
    	request = 'DAYS';  content='MinMaxAvg'; drawContent();
    	break;
    case "#outside_weeks":
    	request = 'WEEKS';  content='MinMaxAvg'; drawContent();
    	break;
    case "#outside_months":
    	request = 'MONTHS';  content='MinMaxAvg'; drawContent();
    	break;
    case "#outside_years":
    	request = 'YEARS';  content='MinMaxAvg'; drawContent();
    	break;
}
	//$('#outside_weeks').click(showCog());
}
$(window).on('hashchange', checkHash);

if (window.location.hash) {
    $(window).trigger('hashchange')
}