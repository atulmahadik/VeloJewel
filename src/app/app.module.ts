import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomersService } from './demo/service/customer.service';
import { CustomerService } from './components/customer/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        // { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomersService, EventService, IconService, NodeService,
        PhotoService, ProductService, CustomerService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
