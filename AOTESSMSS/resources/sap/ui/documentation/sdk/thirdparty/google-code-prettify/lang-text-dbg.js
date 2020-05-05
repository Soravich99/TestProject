/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// dummy prettify extension for plain text
PR['registerLangHandler'](
	PR['createSimpleLexer']([], [
		[PR['PR_PLAIN'], /[\s\S]*/],
	]), ['plain', 'text']);