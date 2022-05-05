import youtube from '@yimura/scraper'

const artists = ['kendrick', 'jid', 'pooh shiesty', 'j cole', '21 savage']



const yt = new youtube.default();

for (let elem in artists) {
    console.log(artists[elem])
    yt.search('free '+ artists[elem]+ ' type beat').then(results => {
        for (let i = 0; i < 18; i++) {
            if (results.videos[i].views > 30000 ) {
                console.log(results.videos[i]);
            }
    
        }
    });
}
