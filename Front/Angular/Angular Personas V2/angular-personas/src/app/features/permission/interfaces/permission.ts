export interface SectionPermission {
    section: string;
    permission: Permission[];
}

export interface Permission {
    id: number;
    permission: string;
    section: string;
}