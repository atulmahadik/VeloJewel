interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
    rating?: number;
}
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