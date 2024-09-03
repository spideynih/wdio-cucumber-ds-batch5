import Page from "./page";
import {$, expect} from '@wdio/globals'

class CartPage extends Page {

    get checkoutButton() {
        return $('#checkout');
    }

    get continueshoppingButton() {
        return $('#continue-shopping');
    }

    get removeproductButton(){
        return $('#remove-sauce-labs-backpack');
    }

    async validateOnCartPage() {
        await expect(this.checkoutButton).toBeExisting();
        await expect(this.continueshoppingButton).toBeExisting();
        await expect(this.removeproductButton).toBeExisting();
    }

    open() {
        return super.open("cart.html");
    }
}

export default new CartPage();