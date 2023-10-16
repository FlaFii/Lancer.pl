let navbarLinks = document.querySelector('navbar-links')

function navbarLinksToggle() {
	if (navbarLinks.style.display === 'flex') {
		navbarLinks.style.display = 'none'
	} else {
		navbarLinks.style.dispay = 'flex'
	}
}
