
export interface Job {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
    location: string;
    minExp: number;
    maxExp: number;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

export interface Filters {
    jobRole: string[],
    exp: string[],
    location: string[],
    remote: string[],
    minBasePay: string[],
}