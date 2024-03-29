import {getCoordinates} from "../services/geocodingApi";

export class City {
    constructor(nom) {
        this.nom = nom;
        this.id = crypto.randomUUID();
        return (async () => {
            await this.recupererCoordonnees();
            return this; // Return the newly-created instance
        })();
    }




    async recupererCoordonnees() {
        let coords = await getCoordinates(this.nom);
        if (coords != null) {
            this.lat = coords[0];
            this.long = coords[1];
            console.log(coords)
        }
        else {
            throw new Error("City unknown !");
        }
    }
}