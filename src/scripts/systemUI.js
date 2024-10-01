const admin = document.getElementById("admin")
const main = document.getElementById("main")

const projectsLink = document.getElementById("projectsLink")
const homeLink = document.getElementById("homeLink")
const contactLink = document.getElementById("contactLink")

const mainLink = document.getElementById("mainLink")

export const toggleUI = (uiID) => {
	const id = uiID.replaceAll("Link", "")
	
	switch (id) {
		case "admin":
			main.style.display = "none"
			projectsLink.style.display = "none"
			homeLink.style.display = "none"
			contactLink.style.display = "none"
		
			admin.style.display = "block"
			mainLink.style.display = "block"

			break
		
		case "main":
			main.style.display = "block"
			projectsLink.style.display = "block"
			homeLink.style.display = "block"
			contactLink.style.display = "block"
		
			admin.style.display = "none"
			mainLink.style.display = "none"

			break

		default: 
			return
	}

}