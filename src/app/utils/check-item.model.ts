export class CheckItem {
    static PREV_ID = 0;

    id: number;
    label: string;
    checked: boolean;

    constructor(label: string) {
        this.id = CheckItem.setId();
        this.label = label;
        this.checked = false;
    }

    static setId(): number {
        return this.PREV_ID += 1;
    }

    getId(): number {
        return this.id;
    }

    getLabel(): string {
        return this.label;
    }

    isChecked(): boolean {
        return this.checked;
    }
}
