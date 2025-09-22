export interface BakeryItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

export interface TimelineEvent {
    year: number;
    event: string;
}

export interface CheckboxOption {
    id: number;
    label: string;
    isChecked: boolean;
}