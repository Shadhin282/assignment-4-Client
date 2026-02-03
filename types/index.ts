export interface TutorProfile {
    id: string;
    userId: string;
    name: string;
    email: string;
    role: 'TUTOR';
    avatar?: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    rating: number;
    reviewCount: number;
    availability: AvailabilitySlot[];
    categories: string[];
}

export interface AvailabilitySlot {
    day: string; // 'Monday', 'Tuesday', etc.
    startTime: string; // '09:00'
    endTime: string; // '17:00'
}