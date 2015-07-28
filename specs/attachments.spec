visit https://plangrid-test.herokuapp.com/:
	query body:
		fill 'input[type="text"]' 'thom.harper@example.com'
		fill 'input[type="password"]' 'qazwsxedc'
		click selector 'button.button.full-width.medium.primary'
		after selector '.projSumNm a' exists
		click selector '.projSumNm a'
		after selector 'li.page-tab.sheets-tab' exists
		click selector '.page-tab.files-tab a'
		selector '.containerSpan.pageTitle.pageTitleFloatLeft' exists

		capture png 'rfis'
		
