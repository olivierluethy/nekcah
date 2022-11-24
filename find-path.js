/* Algorithmus um mögliche Pfaden von einer Webseite zu finden */
let BASE_URL = "https://login-challenge.developerakademie.net";

/* Most used paths to find a valid path on the website */
let PATHS = [
	"/",
    "/admin",
    "/login",
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