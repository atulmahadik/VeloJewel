import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CustomerService } from './customer.service';

@Component({
    templateUrl: './customer.component.html',
    providers: [MessageService]
})
export class CustomerComponent implements OnInit {

    customerDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    customers: Customer[] = [];

    customer: Customer = {};

    selectedProducts: Customer[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: CustomerService, private messageService: MessageService) { }

    ngOnInit() {
        this.productService.getCustomers().then(data => this.customers = data);

        // this.cols = [
        //     { field: 'name', header: 'Name'},
        //     { field: 'address', header: 'Address' },
        //     { field: 'mobileno', header: 'Mobile No' },
        //     { field: 'subscriptionDate', header: 'Subscription Date' },
        //     { field: 'renewalDate', header: 'Renewal Date' },
        //     { field: 'callReason', header: 'Call Reason' },
        //     { field: 'refferedBy', header: 'Reffered By' },
        //     { field: 'commision', header: 'Commision' },
        //     { field: 'ammountDueInAdvance', header: 'Amount Due In Advance' },
        //     { field: 'amountDuePast', header: 'Amount Due Past' },
        //     { field: 'amountPaid', header: 'Amount Paid' },
        //     { field: 'amountPaidDate', header: 'Amount Paid Date' },
        // ];

        this.cols = [
            { field: 'name', header: 'Name', style: 'min-width: 130px', isSort: true },
            { field: 'address', header: 'Address', style: 'min-width: 130px', isSort: true },
            { field: 'mobileno', header: 'Mobile No', style: 'min-width: 130px', isSort: true },
            { field: 'subscriptionDate', header: 'Subscription Date', style: 'min-width: 150px', isSort: true },
            { field: 'renewalDate', header: 'Renewal Date', style: 'min-width: 130px', isSort: true },
            { field: 'callReason', header: 'Call Reason', style: 'min-width: 130px', isSort: true },
            { field: 'refferedBy', header: 'Reffered By', style: 'min-width: 130px', isSort: true },
            { field: 'commision', header: 'Commision', style: 'min-width: 130px', isSort: true },
            { field: 'ammountDueInAdvance', header: 'Amount Due In Advance', style: 'min-width: 190px', isSort: true },
            { field: 'amountDuePast', header: 'Amount Due Past', style: 'min-width: 180px', isSort: true },
            { field: 'amountPaid', header: 'Amount Paid', style: 'min-width: 130px', isSort: true },
            { field: 'amountPaidDate', header: 'Amount Paid Date', style: 'min-width: 180px', isSort: true },
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.customer = {};
        this.submitted = false;
        this.customerDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(customer: Customer) {
        this.customer = { ...customer };
        this.customerDialog = true;
    }

    deleteProduct(customer: Customer) {
        this.deleteProductDialog = true;
        this.customer = { ...customer };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.customers = this.customers.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.customers = this.customers.filter(val => val.id !== this.customer.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000 });
        this.customer = {};
    }

    hideDialog() {
        this.customerDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        // if (this.customer.name?.trim()) {
        //     if (this.customer.id) {
        //         // @ts-ignore
        //         this.customer.inventoryStatus = this.customer.inventoryStatus.value ? this.customer.inventoryStatus.value : this.customer.inventoryStatus;
        //         this.customers[this.findIndexById(this.customer.id)] = this.customer;
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Updated', life: 3000 });
        //     } else {
        //         this.customer.id = this.createId();
        //         this.customer.code = this.createId();
        //         this.customer.image = 'customer-placeholder.svg';
        //         // @ts-ignore
        //         this.customer.inventoryStatus = this.customer.inventoryStatus ? this.customer.inventoryStatus.value : 'INSTOCK';
        //         this.customers.push(this.customer);
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Customer Created', life: 3000 });
        //     }

        //     this.customers = [...this.customers];
        //     this.customerDialog = false;
        //     this.customer = {};
        // }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
