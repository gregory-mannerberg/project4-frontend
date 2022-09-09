export interface Goal {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    targetDate: Date;
    targetAmount: number;
    currentAmount: number;
}