// Менеджер нотаток: додаток для створення та організації 
// нотаток з можливістю встановлення зв'язків між ними

interface Note {
    id: number;
    content: string;
}

interface Link {
    note1: number;
    note2: number;
}

class NoteManager {
    private notes: Note[] = [];
    private links: Link[] = [];

    showNotes(): void {
        this.notes.forEach(note => console.log(`Note ${note.id}: ${note.content}`));
    }

    createNote(content: string): void {
        const id = this.notes.length + 1;
        this.notes.push({ id, content });
    }

    showLinks(): void {
        this.links.forEach(link => console.log(`Link between note ${link.note1} and note ${link.note2}`));
    }

    createLink(note1: number, note2: number): void {
        this.links.push({ note1, note2 });
    }
}

const noteManager = new NoteManager();

noteManager.createNote("First note");
noteManager.createNote("Second note");
noteManager.createNote("Third note");
noteManager.createLink(1, 2);
noteManager.createLink(2, 3);

noteManager.showNotes();
noteManager.showLinks();