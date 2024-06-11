import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './home/Files/components/items/items.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { CustomersComponent } from './home/Files/components/customers/customers.component';
import { SuppliersComponent } from './home/Files/components/suppliers/suppliers.component';
import { SalesTransactionComponent } from './home/Sales/components/sales-transaction/sales-transaction.component';
import { SalesReceiptUIComponent } from './home/Sales/components/sales-receipt-ui/sales-receipt-ui.component';
import { EditSalesRecordsComponent } from './home/Sales/components/edit-sales-records/edit-sales-records.component';
import { PrintReceiptComponent } from './layouts/print-receipt/print-receipt.component';
import { PrintReceiptsComponent } from './layouts/print-receipts/print-receipts.component';
import { PrintComponent } from './layouts/print/print.component';
const routes: Routes = [
  {
    path: '',component: LandingComponent,
    children: [
      {
        path: 'files/items',component: ItemsComponent,
      
      },
      {
        path: 'files/customers',component: CustomersComponent,
      },
      {
        path: 'files/suppliers',component: SuppliersComponent,
      },
      {
        path: 'sales/sales_transaction',component: SalesTransactionComponent,
      },
      {
        path: 'sales/sales_receipt',component: SalesReceiptUIComponent,
      },
      {
        path: 'sales/edit_sales_records',component: EditSalesRecordsComponent,
      },
     
      

    ]
  },
  {
    path: 'print',component: PrintComponent,
    children: [
      {
        path: 'printreceipts',component: PrintReceiptsComponent
      },
      {
        path: 'printreceipt',component: PrintReceiptComponent
      },
    ]
  }

];


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})


export class AppRoutingModule { }
