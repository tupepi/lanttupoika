module.exports = {
    name: 'beerjantai',
    description: 'Palauttaa kuinka monta päivää perjantaihin',
    execute(message, args) {
        const viikonpäivät = [
            'Sunnuntai',
            'Maanantai',
            'Tiistai',
            'Keskiviikko',
            'Torstai',
            'Perjantai',
            'Lauantai',
        ];
        const paiva = new Date();
        let tanaanINT = paiva.getDay();
        let paivaaPerjantaihin = 5 - tanaanINT;
        let tamaPaiva = viikonpäivät[tanaanINT];

        if (tanaanINT === 0) {
            message.channel.send(
                `Tänään on ${tamaPaiva}. \nPerjantaihin on aikaa 5 päivä. Vaikka kärsisitkin sunnuntai masennuksesta niin huoli pois ja käännä katse kohti tulevaa perjantaita. Se tulee nopeammin kuin kuvittelisitkaan ;)`
            );
            return;
        }

        if (tanaanINT === 6) {
            message.channel.send(
                `Tänään on ${tamaPaiva}. Perjantai oli ja meni, mutta huolipois sillä tänään on lauantai! Lauantain agendaan voi kuulua samat asiat kuin perjantain. Muista nauttia tästäkin päivästä, sillä viikonloppu ei ole lähelläkään loppua. \nPerjantaihin on aikaa 6 päivä`
            );
            return;
        }

        if (tanaanINT === 5) {
            message.channel.send(
                `Onneksi olkoon! Tänään on ${tamaPaiva} AKA BEERJANTAI. \nTänään alkaa viikonlopun vietto! Tarkoittaako se rennosti ottamista, oluen juomista, urheilemista tai peräti huumoripäivää? Sen saat sinä itse päättä ;).\nEnnen kaikkea muista ottaa rennosti ja ladata akut seuraavaa viikkoa varten!`
            );
            return;
        }
        if (tanaanINT !== 4) {
            message.channel.send(
                `Tänään on ${tamaPaiva}. \nPerjantaihin on aikaa ${paivaaPerjantaihin} päivää.`
            );
            return;
        }

        message.channel.send(
            `Tänään on ${tamaPaiva}. \nPerjantaihin on aikaa ${paivaaPerjantaihin} päivä`
        );
    },
};
