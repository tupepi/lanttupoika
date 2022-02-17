module.exports = {
  name: "palindromiko",
  description: "Tarkistaa annettu argumentti palindromi",
  execute(message, args) {

    //Tarkistaa onko käyttäjä ollut idiootti ja eikä tajunnut antaa argumenttia
    if (args.length < 1) {
      message.channel.send("Mörhöily (hörpyt pankkiin)" + " " + "Vinkki: laita yksi argumentti '..palindromiko' perään"  + " " + "Esimerkiksi: '..palindromiko mörhöily'")
      return;
    };

    //Tarkistaa onko käyttäjä antanut useamman kuin yhden argumentin
    if (args.length > 1) {
      message.channel.send("Tämän hetkisessä versiossa voi tarkistaa vain yhden argumentin kerrallaan") 
      return;
    };

    //Otetaan argumenttina annettu sana talteen ja muutetaan kaikki kirjaimet pieniksi
    let kirjoitettuSana = args[0].toLowerCase();

    //Pilkotaan annettu argumentti paloiksi -> käännetään järjestys -> Yhdistetään yksittäiset kirjaimet kokonaiseksi sanaksi -> muutetaan kaikki kirjaimet pieniksi
    let pilkottu = kirjoitettuSana.split("").reverse().join('').toLowerCase();

    //Tarkistetaan onko alkuperäinen argumentti ja käännetty argumentti identtiset
    //Jos on niin palautetaan viesti: "No onhan se!"
    if (Object.is(kirjoitettuSana, pilkottu)) message.channel.send("No onhan se!")

    //Jos alkuperäinen argumentti ja käänteinen argumentti ole identtiset palautetaan viesti: "Eipä ollu!"
    else message.channel.send("Eipä ollu!")
       


  },
};
