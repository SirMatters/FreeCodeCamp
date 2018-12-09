const bio = {
"1591" : "Musashi is taken and raised by his uncle as a Buddhist.",
"1596" : "Musashi duels with Arima Kihei in Hirafuku, Hyōgo Prefecture.",
"1599" : "Duels with a man named Akiyama in the northern part of Hyōgo Prefecture.",
"1600" : "Believed to have fought in the Battle of Sekigahara as part of the western army. Whether he actually participated in the battle is currently in doubt.",
"1604" : "Musashi has three matches with the Yoshioka clan in Kyoto. (1) Match with Yoshioka Seijuro in Yamashiro Province, outside the city at Rendai Moor (west of Mt. Funaoka, Kita-ku, Kyoto). (2) Match with Yoshioka Denshichiro outside the city. (3) Match with Yoshioka Matashichiro outside the city at the pine of Ichijō-ji.",
"1604" : "Visits Kōfuku-ji, Nara and ends up dueling with the Buddhist priest trained in the style of Hōzōin-ryū.",
"1607" : "Munisai (Musashi's father) passes his teachings onto Musashi.",
"1607" : "Duels with the kusarigama expert Shishido Baiken in the western part of Mie Prefecture.",
"1608" : "Duels Musō Gonnosuke, master of the five-foot staff in Edo.",
"1610" : "Fights Hayashi Osedo and Tsujikaze Tenma in Edo.",
"1611" : "Begins practicing zazen meditation.",
"1612" : "Duel with Sasaki Kojirō takes place on Ganryujima (Ganryu or Funa Island) off the coast of Shimonoseki in which Kojiro is defeated.",
"1621" : "Duels Miyake Gunbei in Tatsuno, Hyōgo.",
"1622" : "Sets up temporary residence at the castle town of Himeji, Hyōgo.",
"1623" : "Travels to Edo.",
"1626" : "Adopted son Mikinosuke commits seppuku following in the tradition of Junshi.",
"1627" : "Travels again.",
"1628" : "Meets with Yagyū Hyōgonosuke in Nagoya, Owari Province.",
"1630" : "Enters the service of Lord Hosokawa Tadatoshi.",
"1633" : "Begins to extensively practice the arts.",
"1634" : "Settles in Kokura, Fukuoka Prefecture for a short time with son Iori as a guest of Ogasawara Tadazane.",
"1637" : "Serves a major role in the Shimabara Rebellion and is the only documented evidence that Musashi served in battle. Was knocked off his horse by a rock thrown by one of the peasants.",
"1641" : "Writes Hyoho Sanju-go.",
"1642" : "Suffers severe attacks from neuralgia.",
"1643" : "Migrates into Reigandō where he lives as a hermit.",
"1645" : "Finishes Go Rin No Sho/The Book of Five Rings. Dies from what is believed to be lung cancer."
};

let bioArea = [...document.getElementsByClassName('bio-grid')][0];
for (let b in bio) {
  console.log(b);
}

Object.keys(bio).forEach(b => {
  bioArea.innerHTML +=
  `
  <div class="bio-item">
    <p class="bio-item-date">${b}</p>
    <p class="bio-item-text">${bio[b]}</p>
  </div>
  `;
})