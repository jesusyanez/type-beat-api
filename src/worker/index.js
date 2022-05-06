import youtube from '@yimura/scraper'
import fs from 'fs'

const artists = ['kendrick', 'jid', 'pooh shiesty', 'j cole', '21 savage', 'Jack Harlow', 'lil durk', 'lil baby', 'future', 'JELEEL!', 'yeat', 'YoungBoy Never Broke Again', 'Lil Tjay', 'Gunna', 'Young Nudy', 'Lil Uzi Vert', 'Playboi Carti', 'A BOOGIE WIT DA HOODIE', 'Tee Grizzley', ]

const scrapedList = [];

const yt = new youtube.default();


for (let elem in artists) {
    console.log(artists[elem])
    await yt.search('free '+ artists[elem]+ ' type beat').then(results => {
        for (let i = 0; i < 18; i++) {
            if (results.videos[i].views > 30000 ) {
                console.log(results.videos[i]);
                scrapedList.push(results.videos[i])
            }
    
        }
    });
}

const data = JSON.stringify(scrapedList);

fs.writeFile('beats.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log(data.length + " beats data saved to beats.json");
});
