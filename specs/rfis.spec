visit https://plangrid-test.herokuapp.com/:
	query body:
		fill 'input[type="text"]' 'thom.harper@example.com'
		fill 'input[type="password"]' 'qazwsxedc'
		click selector 'button.button.full-width.medium.primary'
		after selector '.projSumNm a' exists
		click selector '.projSumNm a'
		after selector 'li.page-tab.sheets-tab' exists
		click selector '.page-tab.rfis-tab a'
		after selector '.page-tab.rfis-tab.current' exists

		selector '.crumb' exists
		selector '.crumb a' exists
		selector '.header-div h2.filters-header' exists
		5 '.filters-section-title' exists
		1 'label.rfi-overdue-label' exists
		2 '.filters-section-title-type' exists
		selector 'button.btn.btn-large.new-report.disabled' exists
		selector '.filters-section-title' exists
		selector '.rfi-filter-row' exists
		
		1 '.label-selector.rfi-status-labels.green' exists 
		1 '.label-selector.rfi-status-labels.blue' exists
		1 '.label-selector.rfi-status-labels.yellow' exists
		1 '.label-selector.rfi-status-labels.red' exists
		1 '.label-selector.rfi-status-labels.orange' exists
		1 '.label-selector.rfi-status-labels.purple' exists
		6 '.label-selector.rfi-status-labels' exists

		capture png 'rfis'
		
