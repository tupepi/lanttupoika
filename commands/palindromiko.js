module.exports = {
  name: "palindromiko",
  description: "Tarkistaa annettu argumentti palindromi. Komennolla help saat lisätietoja komennon toimivuudesta",
  execute(message, args) {


       //Tarkistaa onko käyttäjä ollut idiootti ja eikä tajunnut antaa argumenttia
       if (args.length < 1) {
        message.channel.send(`Anna argumentti!
        \nHelp-komennolla saa lisäinformaatiota komennon toiminnasta`)
        return;
      };
   
      //Tarkistaa onko ensimmäinen argumentti "help", jos on niin tarjoaa lisäinformaatiota komennontoiminnasta.
      if (Object.is(args[0].toLowerCase().toString(), "help")) {
        message.channel.send(`Jos annat yhden argumentin, joka ei ole "help" niin komento tarkistaa onko kyseinen argumentti palindromi.
        \nJos annat enemmänkuin yhden argumentin (esimerkiksi kokonaisen lauseen) niin komento tarkistaa onko annettu lause/argumentit palindromi.`)
        return;

      }


    //Jos argumenttejä on enemmän kuin yksi niin liitetään kaikki argumentit yhteen pötköön ja tarkistetaan onko palindromi.
    if (args.length > 1) {

      let koottunaYhteen = args.join('').toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');;
      let kaikkipilkottu = koottunaYhteen.split("").reverse().join('').toLowerCase();
      if (Object.is(koottunaYhteen, kaikkipilkottu)) {
        message.channel.send("No onhan se!") 
        return;
      }

    }

      //Otetaan argumenttina annettu sana talteen ja muutetaan kaikki kirjaimet pieniksi
      let kirjoitettuSana = args[0].toLowerCase();

      //Pilkotaan annettu argumentti paloiksi -> käännetään järjestys -> Yhdistetään yksittäiset kirjaimet kokonaiseksi sanaksi -> muutetaan kaikki kirjaimet pieniksi
      let pilkottu = kirjoitettuSana.split("").reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');

      //Tarkistetaan onko alkuperäinen argumentti ja käännetty argumentti identtiset
      //Jos on niin palautetaan viesti: "No onhan se!"
      if (Object.is(kirjoitettuSana, pilkottu)) {
        message.channel.send("No onhan se!") 
        return;
      }

      //Jos alkuperäinen argumentti ja käänteinen argumentti ole identtiset palautetaan viesti: "Eipä ollu!"
      message.channel.send("Eipä ollu!")
        


  },
};
