/* Algorithmus um mögliche Pfaden von einer Webseite zu finden */
let BASE_URL = "https://login-challenge.developerakademie.net";

/* Most used paths to find a valid path on the website */
let PATHS = [
	"/",
    	"/admin",
	"/api",
	"/help",
	"/connect",
	"/menu",
	"/mail",
	"/messages",
	"/test",
	"/imprint",
	"/legal",
	"/data-protection",
	"/notifications",
	"/notes",
	"/uploads",
	"/custom",
	"/edit",
	"/wp-admin",
	"/content",
	"/profiles",
	"/users",
	"/profile",
    	"/login",
	"/register",
	"/search",
	"/products",
	"/services",
	"/blog",
	"/contact",
	"/about",
	"/faq",
	"/sitemap",
	"/404",
    	"/settings",
];

async function load(){
	PATHS.forEach(async (path) => {
		try {
            console.log();
            let resp = await fetch(BASE_URL + path);
            console.log(path, resp.status);
		} catch(error) {

		}

    });
}
load();
