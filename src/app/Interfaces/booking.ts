export interface Booking {
    id: number;
    userId: number;
    carId: number;
    startDate: Date;
    endDate: Date;
    totalPrice: Float32Array;
}
