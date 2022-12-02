export type Status = "Queue" | "Development" | "Done";
export interface Data {
    id: number;
    content: string;
    status: Status;
}
