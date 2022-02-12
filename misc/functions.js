/**
 *  Sisältää funktioita, joista voi olla hyötyä useamassa paikassa
 *
 */

module.exports = {
    /**
     * @param Date tyyppinen olio johon lasketaan aika ero nykyhetkestä
     * @return  Olion, jossa attribuutteina kuinka paljon aikaa on jäljellä
     * "{
            millisekunnit: millisekunnit,
            sekunnit: sekunnit,
            minuutit: minuutit,
            tunnit: tunnit,
            paivat: paivat,
        }"
     */
    laske_deadline: (deadline) => {
        let nyt = Date.now();
        lopputulos = deadline - nyt;
        let paivat = Math.floor(lopputulos / 86400000);
        let tunnit = Math.floor((lopputulos - paivat * 86400000) / 3600000);
        let minuutit = Math.floor(
            (lopputulos - (paivat * 86400000 + tunnit * 3600000)) / 60000
        );
        let sekunnit = Math.floor(
            (lopputulos -
                (paivat * 86400000 + tunnit * 3600000 + minuutit * 60000)) /
                1000
        );
        let millisekunnit = Math.floor(
            lopputulos -
                paivat * 86400000 -
                tunnit * 3600000 -
                minuutit * 60000 -
                sekunnit * 1000
        );
        return {
            millisekunnit: millisekunnit,
            sekunnit: sekunnit,
            minuutit: minuutit,
            tunnit: tunnit,
            paivat: paivat,
        };
    },
};
