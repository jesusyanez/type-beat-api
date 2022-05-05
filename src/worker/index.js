import youtube from '@yimura/scraper'

const yt = new youtube.default();
yt.search('free kodak black type beat').then(results => {
    for (let i = 0; i < 18; i++) {
        if (results.videos[i].views > 30000 ) {
            console.log(results.videos[i]);
        }

    }
});