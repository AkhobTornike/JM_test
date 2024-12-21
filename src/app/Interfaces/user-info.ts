export interface UserInfo {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    profileImage?: string;
    isVerified: boolean;
}
