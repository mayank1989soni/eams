// The noenter() function disables the ENTER key for all items except
// form submit buttons and hyperlinks. It is intended to be used with
// the 'onkeypress' attribute, although it will probably work with
// 'onkeydown' and 'onkeyup'. Note that the bulk of the code deals 
// with the fact that Internet Explorer's javascript is different 
// from that of all other browsers.
//
function noenter(e) {

	// Get the code for the key, and get the active element
	if (typeof(window.event) != 'undefined')  // Internet Explorer
	{
		if (typeof(window.event.keyCode) == 'undefined')
			return true;
		theKey = window.event.keyCode;
		if (typeof(window.event.srcElement) == 'undefined')
			return (theKey != 13);
		theElement = window.event.srcElement;
	}
	else if (typeof(e) != 'undefined')  // All other browsers
	{
		if (typeof(e.which) == 'undefined')
			return true;
		theKey = e.which;
		if (typeof(e.target) == 'undefined')
			return (theKey != 13);
		theElement = e.target;
	}
	else
	{
		return true;   // Just in case
	}

	// Not an ENTER key, allow it to proceed
	if (theKey != 13)
		return true;

	// An HTML hyperlink (<a>) element, allow it to proceed
	if (typeof(theElement.tagName) != 'undefined' && theElement.tagName == 'A')
		return true;
		
	// An HTML <input> element that submits the form, allow it to proceed
	if (typeof(theElement.type) != 'undefined' && (theElement.type == 'image' || theElement.type == 'submit'))
		return true;
		
	// All others are blocked
	return false;
}