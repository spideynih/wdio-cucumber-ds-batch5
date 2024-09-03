import Page from "./page";
import {$, expect} from '@wdio/globals'

class HomePage extends Page {

    get cartIcon() {
        return $('#shopping_cart_container');
    }
    get addToCart() {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get productImage() {
        return $('#item_0_img_link');
    }

    async validateOnHomePage() {
         await expect(this.cartIcon).toBeExisting();
         await expect(this.addToCart).toBeExisting();
         await expect(this.productImage).toBeExisting();
    }

    async addToCart(productName) {
        const button = await $(`button[data-test='add-to-cart-${productName}']`);
        await button.click();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }
    
        open() {
        return super.open("inventory.html");
    }
}

export default new HomePage();