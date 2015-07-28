visit https://plangrid-test.herokuapp.com/:

	query body:
		selector 'button.button.medium.additive' exists
		click selector 'button.button.medium.additive'

		text 'Your first name is required.' doesNotExist
		text 'Your last name is required.' doesNotExist
		text 'Your full name is required.' doesNotExist
		text 'Your email is required.' doesNotExist
		text 'Your first name is required.' doesNotExist
		text 'Your password is required.' doesNotExist
		text 'Your first name is required.' doesNotExist
		text 'Your password is required.' doesNotExist
		text 'An account already exists with that email.' doesNotExist
		text 'Your password needs to be at least 8 characters.' doesNotExist
		text 'This account has been deactivated.' doesNotExist
		text 'Something went wrong' doesNotExist

		selector 'input[placeholder="First"]' exists
		fill 'input[placeholder="First"]' 'Helen'
		selector 'input[placeholder="Last"]' exists
		fill 'input[placeholder="Last"]' 'Thomas'
		selector 'input[placeholder="betty@construction.com"]' exists
		fill 'input[placeholder="betty@construction.com"]' 'helen.thomas1234@example.com'
		selector 'input[placeholder="Minimum 8 characters"]' exists
		click selector 'button.full-width.medium.additive'
		
		text 'Your password is required.' exists
		fill 'input[placeholder="Last"]' '\n'
		text 'Your last name is required.' exists
		fill 'input[placeholder="First"]' '\n'
		text 'Your full name is required.' exists
		fill 'input[placeholder="Last"]' 'Something'
		text 'Your first name is required.' exists
		fill 'input[placeholder="First"]' 'Helen'
		fill 'input[placeholder="Minimum 8 characters"]' 'qaz'
		text 'Your password needs to be at least 8 characters.' exists
		fill 'input[placeholder="Minimum 8 characters"]' 'qazwsxedc'
		fill 'input[placeholder="betty@construction.com"]' 'example'
		text 'You need to enter a valid email.'  exists
		fill 'input[placeholder="betty@construction.com"]' 'helen@example'
		fill 'input[placeholder="betty@construction.com"]' 'dead@plangrid.com'
		click selector 'button.full-width.medium.additive'
		after selector '.row.alert.error' exists
		text 'This account has been deactivated.' exists
				
		capture png 'signup'
