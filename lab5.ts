// Створіть додаток, який дозволяє додавати, видаляти та сортувати художників 
// за стилями мистецтва, використовуючи словник для зберігання назв художників 
// та їх стилів мистецтва.

class ArtistManager {
    artists: { [style: string]: string[] };

    constructor() {
        this.artists = {};
    }

    addArtist(artist: string, style: string) {
        if (this.artists[style]) {
            this.artists[style].push(artist);
        } else {
            this.artists[style] = [artist];
        }
    }

    removeArtist(artist: string, style: string) {
        if (this.artists[style]) {
            const index = this.artists[style].indexOf(artist);
            if (index !== -1) {
                this.artists[style].splice(index, 1);
                if (this.artists[style].length === 0) {
                    delete this.artists[style];
                }
            }
        }
    }

    sortArtistsByStyle() {
        const sortedArtists: { [style: string]: string[] } = {};
        Object.keys(this.artists).sort().forEach(style => {
            sortedArtists[style] = this.artists[style].sort();
        });
        this.artists = sortedArtists;
    }

    printArtists() {
        Object.keys(this.artists).forEach(style => {
            console.log(`Style: ${style}`);
            this.artists[style].forEach(artist => {
                console.log(`- ${artist}`);
            });
        });
    }
}

const manager = new ArtistManager();
manager.addArtist('Vincent van Gogh', 'Impressionism');
manager.addArtist('Pablo Picasso', 'Cubism');
manager.addArtist('Leonardo da Vinci', 'Renaissance');
manager.addArtist('Claude Monet', 'Impressionism');
manager.addArtist('Salvador Dali', 'Surrealism');

console.log("Додано художників:");
manager.printArtists();

manager.removeArtist('Salvador Dali', 'Surrealism');
console.log("\nПісля видалення:");
manager.printArtists();

console.log("\nПісля сортування:");
manager.sortArtistsByStyle();
manager.printArtists();
