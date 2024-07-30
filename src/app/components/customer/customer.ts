export interface Customer {
    id?: string;
    number?: string;
    name?: string;
    address?: string;
    mobileno?: string;
    subscriptionDate?: string;
    renewalDate?: string;
    callReason?: string;
    refferedBy?: string;
    commision?: number;
    ammountDueInAdvance?: number;
    amountDuePast?: number;
    amountPaid?: number;
    amountPaidDate?: string;
}