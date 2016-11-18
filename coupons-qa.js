{
    "coupons": [
        {
            "url": ".1800flowers.com/(.*)PlaceOrderDisplay",
            "apply": {
                "type": "click",
                "submit": "[name='Apply Promotion Button']",
                "timeout": 4500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".BP-total-amount .BP-PaddingSpace.BP-col2:eq(0)",
                "orderTotal": ".BP-total-label .BP-PaddingSpace.BP-col2:eq(0)",
                "coupon": ".appliedPromoDetails"
            },
            "remove": {
                "type": "click",
                "submit": ".appliedPromoDetails a",
                "timeout": 4500
            },
            "name": "1-800 Flowers",
            "storeId": "44"
        },
        {
            "url": ".ae.com/checkout",
            "apply": {
                "type": "js",
                "js": "$('.discount-code-show-form-btn').click();console.log('conf');setTimeout(function(){$('button[data-tl=apply-promo-code]').click()}, 2950);",
                "timeout": 3500
            },
            "controls": {
                "promo": "input[name=discountCode]",
                "total": "#ember1306",
                "orderTotal": "#ember1314"
            },
            "name": "AE",
            "storeId": "8303"
        },
        {
            "url": ".ae.com/cart",
            "apply": {
                "type": "click",
                "submit": ".qa-discount-code-apply-btn",
                "timeout": 3500
            },
            "controls": {
                "promo": "input[name=discountCode]",
                "orderTotal": ".order-subtotal-total-value > span"
            },
            "remove": {
                "type": "js",
                "js": "$('.discount-code-remove').click(); $('.qa-discount-code-show-form-btn').click();",
                "timeout": 2000
            },
            "scripts": {
                "preprocess": "$('.discount-code-show-form-btn').click();"
            },
            "name": "AE",
            "storeId": "8303"
        },
        {
            "url": ".amiclubwear.com/checkout/cart/",
            "apply": {
                "type": "click",
                "submit": ".btn-apply-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "#shopping-cart-totals-table .price:first",
                "orderTotal": "#shopping-cart-totals-table tbody .price:first",
                "coupon": ".summary-collapse"
            },
            "remove": {
                "type": "click",
                "submit": ".btn-cancel-coupon",
                "timeout": 2500
            },
            "name": "AMIClubwear",
            "storeId": "10618"
        },
        {
            "url": ".asos.com/pgecheckout",
            "apply": {
                "type": "click",
                "submit": "#_ctl0_ContentBody_btnDiscount",
                "timeout": 2000
            },
            "controls": {
                "promo": "#_ctl0_ContentBody_txtDiscountCode",
                "total": "#ctl00_ContentMainPage_ctlDeliveryOptionsAndTotals1_ddSubtotal > span",
                "orderTotal": "#totalAmount",
                "coupon": ".remove-link"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-link",
                "timeout": 2000
            },
            "name": "ASOS",
            "storeId": "10604"
        },
        {
            "url": ".att.com/shop/cart/cartsummary",
            "apply": {
                "type": "click",
                "submit": "#applyPromo",
                "timeout": 3500
            },
            "controls": {
                "promo": "#coupon-code-input",
                "total": ".final-price"
            },
            "name": "AT&T",
            "storeId": "10461"
        },
        {
            "url": ".att.com/shop/common/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "",
                "orderTotal": ""
            },
            "name": "AT&T",
            "storeId": "10461"
        },
        {
            "url": ".atgstores.com/checkout/Checkout",
            "apply": {
                "type": "click",
                "submit": "#btnCouponValidate",
                "wait": "#btnRemoveDiscountCode, #pnlErrorMessages",
                "timeout": 5000
            },
            "controls": {
                "promo": "#tbPromoCode",
                "total": "#lblTotalAmountDue",
                "orderTotal": "#lblSubtotal",
                "coupon": "#btnRemoveDiscountCode:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#btnRemoveDiscountCode:visible",
                "timeout": 2500
            },
            "name": "ATG Stores",
            "storeId": "12755"
        },
        {
            "url": [
                ".avon.com/(?:bag|checkout)"
            ],
            "apply": {
                "type": "click",
                "submit": ".InputContainer a:eq(0)",
                "timeout": 4000
            },
            "controls": {
                "promo": "[placeholder='Enter coupon code']",
                "total": "#OrderSummaryMerchandiseTotal dd, #OrderSummaryCheckouMerchandiseTotal dd",
                "orderTotal": "#OrderSummaryMerchandiseTotal dd, #OrderSummaryCheckoutTotal dd",
                "coupon": "[data-ng-click='RemoveCoupon(!isCreditCardEditMode())']"
            },
            "remove": {
                "type": "click",
                "submit": "[data-ng-click='RemoveCoupon(!isCreditCardEditMode())']",
                "timeout": 4000
            },
            "name": "AVON",
            "storeId": "89"
        },
        {
            "url": [
                ".advanceautoparts.com/web/OrderItemDisplay",
                ".advanceautoparts.com/web/PromotionCodeManage"
            ],
            "apply": {
                "type": "click",
                "submit": ".spR .redGradSmBtn",
                "timeout": 3000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#shipping_total_wrapper_c2",
                "orderTotal": "#price_subtotal_wrapper_c2",
                "coupon": ".spR .price a"
            },
            "remove": {
                "type": "click",
                "submit": ".spR .price a",
                "timeout": 3000
            },
            "name": "Advance Auto Parts",
            "storeId": "10439"
        },
        {
            "url": ".advanceautoparts.com/web/OrderDisplay",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "table[class=item-totals] > tbody > tr:first > td:last",
                "orderTotal": "table[class=item-totals] > tbody > tr > td[class=\"total red\"]"
            },
            "name": "Advance Auto Parts",
            "storeId": "10439"
        },
        {
            "url": ".agoda.com/(.*)/book.",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#roomDetail tr:eq(1) .amount",
                "orderTotal": "#footerDetail .summary .amount"
            },
            "name": "Agoda",
            "storeId": "11955"
        },
        {
            "url": ".alibris.com/cart.view",
            "apply": {
                "type": "click",
                "submit": "#saleCartCouponButton",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon-purchase",
                "total": ".subtotal-price:first",
                "orderTotal": ".subtotal-price:first",
                "coupon": ".coupon-applied a:first"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon-applied a:first",
                "timeout": 2500
            },
            "name": "Alibris",
            "storeId": "324"
        },
        {
            "url": ".allposters.com/(.*)/checkout",
            "apply": {
                "type": "click",
                "submit": "#btnApplyCoupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#txtCoupon",
                "total": ".TotalCharges:visible",
                "orderTotal": ".SubTotalValue:visible",
                "coupon": "#lblCoupon:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#lblRemoveCoupon",
                "timeout": 2000
            },
            "name": "AllPosters",
            "storeId": "9003"
        },
        {
            "url": ".alloyapparel.com/basket.do",
            "apply": {
                "type": "js",
                "js": "$('.sourceCodeApplyBtn').trigger('click')",
                "timeout": 3500
            },
            "controls": {
                "promo": "#sourceCode",
                "total": "#EstTaxShipItemTable_estBasketTotal",
                "orderTotal": ".basketBTNS td:eq(1) tr:first b",
                "coupon": ".basketBTNS td:eq(1) tr .messagediscount"
            },
            "name": "Alloy Apparel",
            "storeId": "8910"
        },
        {
            "url": ".americanapparel.net/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#checkoutOrderPricing .lineItem:first .number",
                "orderTotal": "#checkoutOrderPricing .lineItem:eq(4) .number"
            },
            "name": "American Apparel",
            "storeId": "13497"
        },
        {
            "url": ".ancestry.com/Store/Review",
            "apply": {
                "type": "click",
                "submit": "#redeemCouponBtn",
                "timeout": 10000
            },
            "controls": {
                "promo": "#couponCodeTextBox",
                "total": "#total",
                "orderTotal": "#orderSummary span:eq(2)"
            },
            "remove": {
                "type": "click",
                "submit": ".removeDiscountBtn:eq(1)",
                "timeout": 10000
            },
            "name": "Ancestry",
            "storeId": "5886"
        },
        {
            "url": ".anntaylor.com/checkout",
            "apply": {
                "type": "click",
                "submit": ".submit.mouse-focus-input input",
                "timeout": 3000
            },
            "controls": {
                "promo": "#code",
                "total": ".order-total span",
                "orderTotal": ".order-summary ol li:first span",
                "coupon": ".applied.active"
            },
            "remove": {
                "type": "click",
                "submit": ".applied.active a",
                "timeout": 3000
            },
            "name": "Ann Taylor",
            "storeId": "9141"
        },
        {
            "url": ".anthropologie.com/(.*)/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".checkout-total-value span[ng-bind=\"currentOrder.priceInfo.value.formattedRawSubtotal\"]",
                "orderTotal": ".checkout-total-value span[ng-bind=\"currentOrder.priceInfo.value.formattedTotal\"]"
            },
            "name": "Anthropologie",
            "storeId": "12028"
        },
        {
            "url": ".art.com/asp/place_order",
            "apply": {
                "type": "js",
                "js": "makeAjaxCallToApplyCoupon();",
                "timeout": 2500
            },
            "controls": {
                "promo": "#txtCouponCode",
                "total": "#lblEstimatedTotal",
                "orderTotal": "#lblSubTotal2",
                "coupon": "#discountApplied:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#btnRemoveCoupon",
                "timeout": 2500
            },
            "name": "Art.com",
            "storeId": "65"
        },
        {
            "url": ".ashford.com/us/cart/cart",
            "apply": {
                "type": "js",
                "js": "javascript:applyCouponCode();",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promotionCodeInput",
                "total": ".checkout_total",
                "orderTotal": ".pull-right .text-right li:not('.checkout_text_color_red'):first",
                "coupon": "#atg_store_promotionRemove:visible"
            },
            "remove": {
                "type": "js",
                "js": "javascript:removeCoupon();",
                "timeout": 2000
            },
            "name": "Ashfor",
            "storeId": "2603"
        },
        {
            "url": ".ashleystewart.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total td:last",
                "orderTotal": ".order-subtotal td:last",
                "coupon": ".rowcoupons"
            },
            "remove": {
                "type": "click",
                "submit": ".textbutton:first",
                "timeout": 2000
            },
            "name": "AshleyStewart [Cart Page]",
            "storeId": "11124"
        },
        {
            "url": ".autoanything.com/Checkout/Cart",
            "apply": {
                "type": "click",
                "submit": "#btnRedeem span",
                "timeout": 2000
            },
            "controls": {
                "promo": "#txtPromotionalCode",
                "total": ".cartTotals li:last span",
                "orderTotal": ".cartTotals li:first span"
            },
            "name": "AutoAnything",
            "storeId": "8215"
        },
        {
            "url": ".avenue.com/en_US/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-subtotal .order-totals-value",
                "orderTotal": ".order-total .order-totals-value",
                "coupon": ".cartcoupon.clearfix .value"
            },
            "remove": {
                "type": "click",
                "submit": ".rowcoupons .item-user-actions-remove",
                "timeout": 2500
            },
            "name": "Avenue",
            "storeId": "7969"
        },
        {
            "url": ".avis.com/car-rental/reservation/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "span[class=\"floatheading ltyresgreytxt\"] strong:first",
                "orderTotal": "#estimatedTotal"
            },
            "name": "Avis",
            "storeId": "9909"
        },
        {
            "url": ".beachbody.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".cart:last tfoot tr td:eq(2)",
                "orderTotal": "td[class=\"total orderTotal\"]"
            },
            "name": "BEACHBODY",
            "storeId": "6046"
        },
        {
            "url": ".bhcosmetics.com/viewcart",
            "apply": {
                "type": "click",
                "submit": "#Apply_coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#Coupon",
                "total": ".total td:last",
                "orderTotal": ".cartc:first",
                "coupon": "#OfferDetails"
            },
            "name": "BH Cosmetics",
            "storeId": "11170"
        },
        {
            "url": ".bjs.com/webapp/.*/BJsDeliveryInfoView",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".float-right.wid50.txt_bold.txtRtAlign",
                "orderTotal": ".float-right.txt_bold.wid50.txtRtAlign.red_txt"
            },
            "name": "BJ's",
            "storeId": "10746"
        },
        {
            "url": ".blair.com/checkout/checkout",
            "apply": {
                "type": "click",
                "submit": "#promocodeblock .formButton",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#GRAND_ITEMS_TOTAL-value",
                "orderTotal": "#CC_TOTAL-value"
            },
            "remove": {
                "type": "click",
                "submit": ".promoCodeRemove a",
                "timeout": 2000
            },
            "name": "BLAIR",
            "storeId": "3430"
        },
        {
            "url": ".bareescentuals.com/.*/FluidCheckout-Start",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"grid-cell default-40 item-value order-subtotal-value\"]",
                "orderTotal": "div[class=\"grid-cell default-40 item-value order-total-value\"]"
            },
            "name": "BareesCentuals",
            "storeId": "11230"
        },
        {
            "url": "barkbox.com/subscribe/",
            "apply": {
                "type": "click",
                "submit": ".accept.full.green:visible",
                "timeout": 2500
            },
            "controls": {
                "promo": "[placeholder='Coupon code']:first",
                "total": ".total h4:visible",
                "orderTotal": ".total h4:visible",
                "coupon": ".summary-content .icon-times:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".summary-content .icon-times:visible",
                "timeout": 2500
            },
            "name": "BarkBox",
            "storeId": "11591"
        },
        {
            "url": ".barneys.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal .atg_store_orderSummaryItem",
                "orderTotal": ".atg_store_orderTotal .atg_store_orderSummaryItem"
            },
            "name": "Barneys",
            "storeId": "10581"
        },
        {
            "url": ".bathandbodyworks.com/cart/index",
            "apply": {
                "type": "submit",
                "form": "#promoCodeCommand",
                "submit": "#promoApply"
            },
            "controls": {
                "promo": "[name='promoCode']",
                "total": "#paymentSummaryDisplay span:last",
                "orderTotal": ".costContainer tr.first td:last"
            },
            "name": "Bath and Body works",
            "storeId": "10143"
        },
        {
            "url": ".bathandbodyworks.com/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "td[class=first] > span",
                "orderTotal": "table[id=paymentSummaryDisplay] > tbody > tr > td:last > span"
            },
            "name": "Bath and Body works",
            "storeId": "10143"
        },
        {
            "url": ".baublebar.com/checkout/cart/",
            "apply": {
                "type": "click",
                "submit": ".btnSm_cart:first",
                "timeout": 3000
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "._JS_CartTotalPrice span",
                "orderTotal": ".cart-points-total_earned .price:last",
                "coupon": ".cancel-btn"
            },
            "remove": {
                "type": "click",
                "submit": ".cancel-btn",
                "timeout": 3000
            },
            "name": "BaubleBar",
            "storeId": "11025"
        },
        {
            "url": ".beallsflorida.com/webapp/(.*)/OrderShippingAddressView",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#total-subtotal",
                "orderTotal": "#total-total"
            },
            "name": "Bealls Florida",
            "storeId": "9172"
        },
        {
            "url": ".beauty.com/shoppingbag.asp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".bagtotalamount",
                "orderTotal": ".bagtotalorderamount"
            },
            "name": "Beaty.com",
            "storeId": "5866"
        },
        {
            "url": ".bebe.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#applyButton",
                "timeout": 3000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#CC_TOTAL-value",
                "orderTotal": "#GRAND_ITEMS_TOTAL-value",
                "coupon": "#promoCode-val:visible"
            },
            "remove": {
                "type": "js",
                "js": "removePromoCode();",
                "timeout": 3000
            },
            "name": "Bebe",
            "storeId": "10028"
        },
        {
            "url": ".bedbathandbeyond.com/store/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#total-sale-price td:eq(0)",
                "orderTotal": "#order-total td:eq(0)"
            },
            "name": "Bed Bath and Beyond",
            "storeId": ""
        },
        {
            "url": ".belk.com/(.*)/Shopping_Bag",
            "apply": {
                "type": "click",
                "submit": ".applyCoupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCode_shb",
                "total": "#cart_total",
                "orderTotal": ".lineItems.addable span:eq(1)",
                "coupon": ".editLink"
            },
            "remove": {
                "type": "click",
                "submit": ".editLink",
                "timeout": 2000
            },
            "name": "Belk",
            "storeId": "10764"
        },
        {
            "url": ".belk.com/.*/payment",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#orderList li:eq(0) span",
                "orderTotal": "#cart_total"
            },
            "name": "Belk",
            "storeId": "10764"
        },
        {
            "url": ".bellacor.com/securearea/payment",
            "apply": {
                "type": "js",
                "js": "document.orderForm.submit();",
                "timeout": 4000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".paymentItemSummary ul:last li:last strong",
                "orderTotal": ".paymentItemSummary ul:last li:first",
                "coupon": ".paymentItemSummary ul:first li:contains('Discount Total')"
            },
            "name": "Bellacor",
            "storeId": "8056"
        },
        {
            "url": "[BADCONFIG].bestbuy.com/site/olspage.jsp",
            "apply": {
                "type": "click",
                "submit": ".payment-details .emphasized-copy[rel=\"add\"]:last",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".row.total .pull-right",
                "orderTotal": ".row.product-total .pull-right"
            },
            "remove": {
                "type": "click",
                "submit": ".payment-details [rel=\"remove\"]",
                "timeout": 3500
            },
            "name": "BestBuy",
            "storeId": "4767"
        },
        {
            "url": ".bestbuy.com/site/olspage.jsp",
            "apply": {
                "type": "js",
                "js": "$('.payment__alternatives-panel:eq(1) .panel-collapse').addClass('in').removeAttr('style');$('.promotions:first button').click()",
                "timeout": 3500
            },
            "controls": {
                "promo": ".promotions:first input",
                "total": ".order-summary__total .cash-money",
                "orderTotal": ".order-summary__price:first .cash-money"
            },
            "name": "BestBuy",
            "storeId": "4767"
        },
        {
            "url": ".bigfishgames.com/cart",
            "apply": {
                "type": "js",
                "js": "$('#add_discount_button').click();setTimeout(function(){$('#overlay_ok').click()}, 2950);",
                "timeout": 3000
            },
            "controls": {
                "promo": "#discount_input",
                "total": ".cart_header_total .price",
                "orderTotal": ".cart_total_summary tr:nth-child(3) .price span",
                "coupon": ".item_info.discount_code"
            },
            "remove": {
                "type": "click",
                "submit": ".item_delete.discount_delete a",
                "timeout": 3000
            },
            "name": "Big Fish",
            "storeId": "10638"
        },
        {
            "url": ".biglots.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".total-amount:first",
                "orderTotal": ".total-amount:last"
            },
            "name": "Big Lots",
            "storeId": ""
        },
        {
            "url": ".blinds.com/Ordering/Cart",
            "apply": {
                "type": "click",
                "submit": ".bdc-cart-promo-codes .bdc-btn",
                "timeout": 2500
            },
            "controls": {
                "promo": ".bdc-cart-promo-codes .bdc-input",
                "total": ".bdc-cart-totals dd:last",
                "orderTotal": ".bdc-cart-totals dd:first",
                "coupon": ".bdc-cart-totals-remove-promo:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".bdc-cart-totals-remove-promo:visible",
                "timeout": 2500
            },
            "name": "Blinds",
            "storeId": "8708"
        },
        {
            "url": ".blinq.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#coupon_code_btn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".review-summary-cost:visible:last",
                "orderTotal": ".review-summary-cost:visible:first",
                "coupon": ".icon.icon-circle-delete"
            },
            "conditions": {
                "required": [
                    "#checkout-shipping .checkout-summary",
                    "#checkout-billing .checkout-summary"
                ]
            },
            "remove": {
                "type": "click",
                "submit": ".icon.icon-circle-delete",
                "timeout": 2500
            },
            "name": "Blinq",
            "storeId": "13788"
        },
        {
            "url": ".bloomingdales.com/bag/index",
            "apply": {
                "type": "click",
                "submit": "#lnkApplyPromos",
                "timeout": 3500
            },
            "controls": {
                "promo": ".promoText",
                "total": "#orderTotal",
                "orderTotal": "#orderMerchTotal"
            },
            "name": "Bloomingdale's",
            "storeId": "9376"
        },
        {
            "url": ".blueapron.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "dl[class=subtotal-item] > dd",
                "orderTotal": "dl[class=total-item] > dd"
            },
            "name": "Blue Apron",
            "storeId": "14497"
        },
        {
            "url": "checkout.bodenusa.com/en-US",
            "apply": {
                "type": "click",
                "submit": ".coButtonGrey",
                "timeout": 2000
            },
            "controls": {
                "promo": "#code",
                "total": ".coPListSubTotal span",
                "orderTotal": ".coPListTotal span",
                "coupon": ".coPListSaveSumm"
            },
            "name": "Boden US",
            "storeId": "8969"
        },
        {
            "url": [
                ".bonton.com/checkout/",
                ".bonton.com/PromotionCodeManage"
            ],
            "apply": {
                "type": "click",
                "submit": "#applyPromo",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promo",
                "total": ".subtotalSection.round-border div:eq(1)",
                "orderTotal": ".subtotalSection.round-border div:eq(1)"
            },
            "name": "Bon Ton",
            "storeId": "10796"
        },
        {
            "url": ".bonton.com/CheckoutView",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".orderSubtotal .amount",
                "orderTotal": ".orderTotal"
            },
            "name": "Bon Ton",
            "storeId": "10796"
        },
        {
            "url": ".boxed.com/checkout/",
            "apply": {
                "type": "click",
                "submit": ".line-item.apply-promos .primary span:eq(0)",
                "timeout": 10000
            },
            "controls": {
                "promo": "[placeholder='code']",
                "total": ".line-item.subtotal span:eq(1)",
                "orderTotal": ".line-item.total span:eq(1)"
            },
            "remove": {
                "type": "js",
                "js": "$('#checkout-review .icon.icon-cancel:last').click();",
                "timeout": 10000
            },
            "name": "Boxed",
            "storeId": "13716"
        },
        {
            "url": ".brooksbrothers.com/(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total .price-value:last",
                "orderTotal": ".order-subtotal .price-value",
                "coupon": "#coupon-remove:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#coupon-remove:visible",
                "timeout": 2000
            },
            "name": "Brooks Brothers",
            "storeId": "652"
        },
        {
            "url": ".build.com/index(.*):cart",
            "apply": {
                "type": "click",
                "submit": ".button.light.mini",
                "timeout": 2000
            },
            "controls": {
                "promo": "#coupon_number",
                "total": "#grandtotalamount",
                "orderTotal": "#subtotalamount",
                "coupon": ".button.small.light:contains('Remove')"
            },
            "remove": {
                "type": "click",
                "submit": ".button.small.light:contains('Remove')",
                "timeout": 2000
            },
            "name": "Build",
            "storeId": "10891"
        },
        {
            "url": ".burlingtoncoatfactory.com/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#ctl03_MainContentArea_ctl00_ctl00_ctl00_LblProductTotal",
                "orderTotal": "#LblTotal"
            },
            "name": "BurlingtonCoatFactory",
            "storeId": "13475"
        },
        {
            "url": ".burpee.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".b-order_totals-total_value",
                "orderTotal": ".b-order_totals-subtotal_value",
                "coupon": ".b-cart_coupon_code-remove_btn"
            },
            "remove": {
                "type": "click",
                "submit": ".b-cart_coupon_code-remove_btn",
                "timeout": 2500
            },
            "name": "Burpee",
            "storeId": "105"
        },
        {
            "url": ".buybuybaby.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "dd[class=\"bold itemsPrice\"]",
                "orderTotal": ".totalAllign span"
            },
            "name": "Buy Buy Baby",
            "storeId": "11016"
        },
        {
            "url": ".cb2.com/Checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#frmOrderSummary ul li:first span",
                "orderTotal": "#frmOrderSummary ul li:last span"
            },
            "name": "CB2",
            "storeId": "10208"
        },
        {
            "url": ".carsons.com/(?:checkout|PromotionCodeManage)/",
            "apply": {
                "type": "click",
                "submit": "#applyPromo",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promo",
                "total": ".subtotalSection.round-border div:last",
                "orderTotal": ".subtotalSection.round-border div:last",
                "coupon": ".bigbluelink"
            },
            "remove": {
                "type": "click",
                "submit": ".bigbluelink",
                "timeout": 2500
            },
            "name": "Carson's",
            "storeId": "10801"
        },
        {
            "url": ".carters.com/cart",
            "apply": {
                "type": "submit",
                "form": "#cart-items-form",
                "submit": "#add-coupon",
                "data": {
                    "dwfrm_cart_couponCode": "%promo"
                },
                "timeout": 3000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-subtotal > td:last",
                "orderTotal": ".order-total > td:last",
                "coupon": ".rowcoupons .name:visible"
            },
            "name": "Carter's",
            "storeId": "10752"
        },
        {
            "url": ".cellularoutfitter.com/checkout/cart/",
            "apply": {
                "type": "js",
                "js": "discountFormA.submit(this, false)",
                "timeout": 5500
            },
            "controls": {
                "promo": ".field-wrapper #coupon_code:last",
                "total": "#shopping-cart-totals-table .price .price:last",
                "orderTotal": "#shopping-cart-totals-table .price .price:last",
                "coupon": "strong:contains('Discount'):visible"
            },
            "remove": {
                "type": "click",
                "submit": ".cancel-coupon:last",
                "timeout": 5500
            },
            "name": "Cellular Outfitter",
            "storeId": "10324"
        },
        {
            "url": ".charlotterusse.com/checkout/",
            "apply": {
                "type": "click",
                "submit": ".sanchezBold.formButton",
                "timeout": 3000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#estimated-grand-total",
                "orderTotal": ".subtotal .value",
                "coupon": ".enteredPromoCode"
            },
            "remove": {
                "type": "click",
                "submit": ".enteredPromoCode a",
                "timeout": 3000
            },
            "name": "Charlotte Russe",
            "storeId": "9725"
        },
        {
            "url": ".charlotterusse.com/cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-subtotal td:last",
                "orderTotal": ".order-value"
            },
            "name": "Charlotte Russe",
            "storeId": "9725"
        },
        {
            "url": ".charmingcharlie.com/checkout/",
            "apply": {
                "type": "click",
                "submit": "[value='Apply Promotion Code'] span:last",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "#shopping-cart-totals-table tbody tr:first .a-right .price",
                "orderTotal": "#shopping-cart-totals-table tfoot .last .a-right .price",
                "coupon": ".remove a"
            },
            "remove": {
                "type": "get",
                "url": "https://www.charmingcharlie.com/checkoutsummary/discount/remove/",
                "timeout": 2500
            },
            "name": "Charming Charlie",
            "storeId": "13682"
        },
        {
            "url": ".cheapoair.com/(.*)/Payment/Air/",
            "apply": {
                "type": "click",
                "submit": "#promodiv a",
                "timeout": 2000
            },
            "controls": {
                "promo": "#PromoCode",
                "total": "li[class=bold] > span[class=\"pull-right currencyPayment\"]",
                "orderTotal": ".totprice .currencyPayment"
            },
            "name": "CheapOair",
            "storeId": "9962"
        },
        {
            "url": ".cheapoair.com/FPNextHotel/Payment/Payment/",
            "apply": {
                "type": "click",
                "submit": "#btnApply",
                "timeout": 3500
            },
            "controls": {
                "promo": "#tbCpnCode",
                "total": ".currencyPayment:eq(2)",
                "orderTotal": ".currencyPayment:eq(0)",
                "coupon": "#PromoValidationMessage .clr:eq(1)"
            },
            "remove": {
                "type": "click",
                "submit": "#lnkRemovePromo",
                "timeout": 3500
            },
            "name": "CheapOair",
            "storeId": "9962"
        },
        {
            "url": ".cheapoair.com/Package/PackageAddOns",
            "apply": {
                "type": "click",
                "submit": "#btnPromoCode",
                "timeout": 3500
            },
            "controls": {
                "promo": "#txtPromoCode",
                "total": "#lblTotalCost .fpamount.fpRoundToFixDecimal",
                "orderTotal": "#lblTotalPrice .fpamount.fpRoundToFixDecimal",
                "coupon": "#lnkRemovePromoCode"
            },
            "remove": {
                "type": "click",
                "submit": "#lnkRemovePromoCode",
                "timeout": 3500
            },
            "name": "CheapOair",
            "storeId": "9962"
        },
        {
            "url": ".cheapoair.com/carnext/Payment/Car/",
            "apply": {
                "type": "click",
                "submit": ".carPriceBreakCont .apf a",
                "timeout": 1500
            },
            "controls": {
                "promo": "#PromoCode",
                "total": ".amntPaybleNw .currencyPayment",
                "orderTotal": ".amntPaybleNw .currencyPayment"
            },
            "name": "CheapOair",
            "storeId": "9962"
        },
        {
            "url": [
                ".cheaptickets.com/book/tripDetails"
            ],
            "apply": {
                "type": "submit",
                "form": "form",
                "submit": ".couponCodeButton input"
            },
            "controls": {
                "promo": ".couponCodeField input",
                "total": ".totalCostAmount"
            },
            "name": "Cheaptickets",
            "storeId": "8086"
        },
        {
            "url": ".chegg.com/checkout/",
            "apply": {
                "type": "click",
                "submit": ".btn-secondary-mini.apply",
                "tiemout": 10000
            },
            "controls": {
                "promo": ".form-input-mini.coupon-input.code",
                "total": ".money.test-subtotal",
                "orderTotal": "span[class=\"money test-total\"]"
            },
            "remove": {
                "type": "click",
                "submit": ".remove",
                "timeout": 10000
            },
            "name": "Chegg",
            "storeId": "10226"
        },
        {
            "url": ".chicos.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#pc-subtotal .pc-value",
                "orderTotal": "#pc-grandtotal-wrapper .pc-value"
            },
            "name": "Chico's",
            "storeId": "9899"
        },
        {
            "url": ".childrensplace.com/shop/TCPOrderShippingView",
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_2"
            },
            "name": "Childrensplace",
            "storeId": "8933"
        },
        {
            "url": ".childrensplace.com/webapp/wcs/stores/servlet/OrderBillingView",
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_2",
                "orderTotal": "#WC_SingleShipmentOrderTotalsSummary_td_10"
            },
            "name": "Childrensplace",
            "storeId": "8933"
        },
        {
            "url": ".childrensplace.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView",
            "apply": {
                "type": "click",
                "submit": ".button-orange",
                "timeout": "3000"
            },
            "controls": {
                "promo": "name=['promoCode']",
                "total": ".total-row >span:eq(1)",
                "orderTotal": ".total-row >span:last"
            },
            "name": "Childrensplace [CART PAGE]",
            "storeId": "8933"
        },
        {
            "url": ".choicehotels.com/guestdata",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "span[class=pull-right] > span[cash=\"checkout.totalBeforeTax\"] > span[class=cash]:last",
                "orderTotal": "span[class=pull-right] > span[cash=\"checkout.totalAfterTax\"] > span[class=cash]:last"
            },
            "name": "Choice Hotels",
            "storeId": "9098"
        },
        {
            "url": "//checkout2.choxi.com/",
            "apply": {
                "type": "click",
                "submit": "#redeem_code .button",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promo_code_code",
                "total": ".sub_total.amount"
            },
            "name": "Choxi",
            "storeId": "11968"
        },
        {
            "url": "//checkout.choxi.com/",
            "apply": {
                "type": "click",
                "submit": "#redeem_code .button",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promo_code_code",
                "total": ".sub_total.amount",
                "orderTotal": "td[class=\"your_total amount\"]"
            },
            "name": "Choxi",
            "storeId": "11968"
        },
        {
            "url": ".christopherandbanks.com/(.*)/en_US/-/USD/ViewData-Start/",
            "apply": {
                "type": "click",
                "submit": "#applyPromotion",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promotionCodeNumber",
                "total": ".ws-line-item.ws-total span:last",
                "orderTotal": ".ws-line-item.ws-subtotal span:last"
            },
            "name": "Christopher & Banks",
            "storeId": "9954"
        },
        {
            "url": ".christopherandbanks.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-subtotal .value",
                "orderTotal": ".order-total .value"
            },
            "name": "Christopher & Banks",
            "storeId": "9954"
        },
        {
            "url": ".clarisonic.com/(.*)Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 3500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order_total.js_order_total td:last",
                "orderTotal": ".order_subtotal.js_order_subtotal td:last",
                "coupon": ".remove_coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove_coupon",
                "timeout": 3500
            },
            "name": "Clarisonic",
            "storeId": "9393"
        },
        {
            "url": ".clinique.com/checkout/billing",
            "apply": {
                "type": "click",
                "submit": "[value='Apply Code']",
                "timeout": 5000
            },
            "controls": {
                "promo": "#form--offer_code--field--OFFER_CODE",
                "total": ".checkout-order-status .price:last",
                "orderTotal": ".checkout-order-status .price:first",
                "coupon": ".discount .price"
            },
            "name": "Clinique",
            "storeId": "9723"
        },
        {
            "url": ".clinique.com/checkout/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".checkout-order-status tbody tr:first .price",
                "orderTotal": ".grand-total .price"
            },
            "name": "Clinique",
            "storeId": "9723"
        },
        {
            "url": ".clubmonaco.com/cart/shoppingcart.jsp",
            "apply": {
                "type": "click",
                "submit": ".apply-promo-code",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".total .value",
                "orderTotal": ".subtotal .value",
                "coupon": ".promo"
            },
            "name": "Club Monaco",
            "storeId": "11270"
        },
        {
            "url": ".colehaan.com/cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-subtotal td:last",
                "orderTotal": ".order-total td:last"
            },
            "name": "Colehaan.com",
            "storeId": "11178"
        },
        {
            "url": ".collectionsetc.com/cart",
            "apply": {
                "type": "click",
                "submit": "#ctl00_ContentPlaceHolder1_imgSavePromoCode",
                "timeout": 2500
            },
            "controls": {
                "promo": "#ctl00_ContentPlaceHolder1_txtPromoCode",
                "total": "#ctl00_ContentPlaceHolder1_lblOrderTotal",
                "orderTotal": "#ctl00_ContentPlaceHolder1_lblMerchSubTotal",
                "coupon": "#ctl00_ContentPlaceHolder1_lblTotalSavings"
            },
            "name": "Collections ETC.",
            "storeId": "8201"
        },
        {
            "url": ".collectionsetc.com/onepagecheckout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#SubTotal",
                "orderTotal": "#OrderTotal"
            },
            "name": "Collections ETC.",
            "storeId": "8201"
        },
        {
            "url": ".columbia.com/cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-subtotal td:last",
                "orderTotal": ".order-total-value"
            },
            "name": "Columbia",
            "storeId": "10437"
        },
        {
            "url": ".crateandbarrel.com/Checkout/Basket",
            "apply": {
                "type": "click",
                "submit": "#divApplyPromoCode a",
                "timeout": 2000
            },
            "controls": {
                "promo": "#txtPromoCode",
                "total": "#orderTotalWithoutTaxValueBottom",
                "orderTotal": "#merchandiseGrandTotalBottom"
            },
            "remove": {
                "type": "click",
                "submit": "#lnkRemovePromoCode span",
                "timeout": 2000
            },
            "name": "Crate and Barrel",
            "storeId": "10408"
        },
        {
            "url": ".crateandbarrel.com/Checkout/Payment",
            "apply": {
                "type": "click",
                "submit": "#divPromoCode .btn-block",
                "timeout": 3000
            },
            "controls": {
                "promo": "#PromoCode",
                "total": "#frmOrderSummary span:eq(0)",
                "orderTotal": ".total span"
            },
            "remove": {
                "type": "click",
                "submit": ".btn-small",
                "timeout": 3000
            },
            "name": "Crate and Barrel",
            "storeId": "10408"
        },
        {
            "url": ".crocs.com/(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#addcoup",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponFld",
                "total": "#estimatedTotal",
                "orderTotal": "#orderSubTotal",
                "coupon": ".cost.redText"
            },
            "remove": {
                "type": "click",
                "submit": ".removecoup",
                "timeout": 2000
            },
            "name": "Crocs",
            "storeId": "10199"
        },
        {
            "url": ".crocs.com/.*/COCheckout-Step",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subTotal .cost",
                "orderTotal": "strong[class=\"estimated-total cost\"]"
            },
            "name": "Crocs",
            "storeId": "10199"
        },
        {
            "url": ".currentcatalog.com/basket.do",
            "apply": {
                "type": "click",
                "submit": ".sourceCodeApplyBtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#sourceCode",
                "total": "#EstTaxShipItemTable_estBasketTotal",
                "orderTotal": ".basketruller:eq(1) div",
                "coupon": ".messagediscount:first"
            },
            "name": "Current Catalog [Cart Page]",
            "storeId": "9857"
        },
        {
            "url": ".currentcatalog.com/checkout/accordioncheckout",
            "apply": {
                "type": "js",
                "js": "MarketLive.AccordionCheckout.scApply();",
                "timeout": 3500
            },
            "controls": {
                "promo": "#catalogCode",
                "total": ".accSumRevRightCol b:last",
                "orderTotal": ".accSumRevRightCol b:first",
                "coupon": ".accMessageDiscount:first"
            },
            "name": "Current Catalog [Checkout Page]",
            "storeId": "9857"
        },
        {
            "url": ".dermstore.com/.*/.*checkout.php",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".updateProducts",
                "orderTotal": ".updatePrice"
            },
            "name": "DERMSTORE",
            "storeId": "10481"
        },
        {
            "url": ".dell.com/.*/cart/payments#",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "li .col-xs-4 small:first",
                "orderTotal": "li .col-xs-4 small:last"
            },
            "name": "Dell",
            "storeId": "9"
        },
        {
            "url": [
                ".diapers.com/shoppingcart",
                ".diapers.com/order/shipping"
            ],
            "apply": {
                "type": "click",
                "submit": ".applyBtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#PromotionCodeTextBox",
                "total": ".subtotalText .right span",
                "orderTotal": ".subTotalInfo span",
                "coupon": ".promotionDetails a"
            },
            "conditions": {
                "required": [
                    "#txtFirstName",
                    "#txtLastName",
                    "#txtAddress1Tp",
                    "#txtZip",
                    "#txtCity",
                    "#txtPhone"
                ]
            },
            "remove": {
                "type": "click",
                "submit": ".promotionDetails a",
                "timeout": 2500
            },
            "name": "Diapers",
            "storeId": "9560"
        },
        {
            "url": ".dickssportinggoods.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal td",
                "orderTotal": ".total td"
            },
            "name": "Dick's sporting goods",
            "storeId": "4227"
        },
        {
            "url": ".dollargeneral.com/cart/index",
            "apply": {
                "type": "js",
                "js": "updatePromo()",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promoBx",
                "total": ".costSummaryPriceCell:last",
                "orderTotal": ".costSummaryPriceCell:first"
            },
            "name": "Dollar General",
            "storeId": "11205"
        },
        {
            "url": ".dollargeneral.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".pricing:first",
                "orderTotal": ".pricing:last"
            },
            "name": "Dollar General",
            "storeId": "11205"
        },
        {
            "url": ".dollartree.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#itmTotal",
                "orderTotal": "#subTotal"
            },
            "name": "Dollar Tree",
            "storeId": "14104"
        },
        {
            "url": ".dressbarn.com/cart",
            "apply": {
                "type": "click",
                "submit": "#addCodeButton",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "#grandTotal",
                "orderTotal": "#cart_subtotal",
                "coupon": "#discountTotal[style='display: block;']"
            },
            "remove": {
                "type": "click",
                "submit": ".removeLink a",
                "timeout": 2500
            },
            "name": "Dress Barn [Cart Page]",
            "storeId": "11142"
        },
        {
            "url": ".dressbarn.com/checkout/collect",
            "apply": {
                "type": "click",
                "submit": "#commit_promo",
                "wait": "#source_entry .label a",
                "timeout": 5000
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".subtotal .amount.total",
                "orderTotal": ".block .amount.total:first",
                "coupon": "#source_entry .amount.total"
            },
            "remove": {
                "type": "click",
                "submit": "#source_entry .label a",
                "wait": "#coupon_code",
                "timeout": 5000
            },
            "name": "Dress Barn [Checkout Page]",
            "storeId": "11142"
        },
        {
            "url": ".drugstore.com/shoppingbag",
            "apply": {
                "type": "click",
                "submit": "#btnApplyCoupon",
                "timeout": 1500
            },
            "controls": {
                "promo": "#applyCoupon",
                "total": ".bagtotalamount",
                "orderTotal": ".bagtotalorderamount"
            },
            "name": "Drugstore",
            "storeId": "91"
        },
        {
            "url": ".drugstore.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#tdCosts_Itemtotal_value b",
                "orderTotal": "#tdCosts_Total_value b"
            },
            "name": "Drugstore",
            "storeId": "91"
        },
        {
            "url": "checkout.ebay.com/",
            "apply": {
                "type": "click",
                "submit": "#but_aplycpn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#xocpnety_cnt",
                "total": ".fb.txtargt :nth-child(2)",
                "orderTotal": ".iblkrt.fb"
            },
            "name": "Ebay.com",
            "storeId": "3993"
        },
        {
            "url": ".eddiebauer.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".summaryDetailsHolder-element p[class=\"right os-detail bag-order-amount\"]:first",
                "orderTotal": "div[class=\"summaryDetailsHolder-element os-subtotal\"] p[class=\"right os-detail bold\"]"
            },
            "name": "EddieBauer",
            "storeId": "2136"
        },
        {
            "url": ".ediblearrangements.com/(.*)-Cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=footer] table tbody tr:first td:eq(1) span:eq(1)",
                "orderTotal": "div[class=footer] table tbody tr:first td:eq(1) span:eq(1)"
            },
            "name": "Edible Arrangements",
            "storeId": "13680"
        },
        {
            "url": ".eloquii.com/(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "[name=\"dwfrm_cart_addCoupon\"]",
                "timeout": 3500
            },
            "controls": {
                "promo": "[name=\"dwfrm_cart_couponCode\"]",
                "total": ".ordersubtotal td:last span",
                "orderTotal": ".ordersubtotal .value",
                "coupon": ".remove-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-coupon",
                "timeout": 3500
            },
            "name": "Eeloquii",
            "storeId": "11522"
        },
        {
            "url": ".elfcosmetics.com/Checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"cart-step__order-review cf\"] .fr",
                "orderTotal": "div[class=\"cart-step__order-review cf\"] .fr"
            },
            "name": "Elf Cosmetics",
            "storeId": "9243"
        },
        {
            "url": ".enterprise.com/car_rental/",
            "apply": {
                "type": "click",
                "submit": "???",
                "timeout": 3500
            },
            "controls": {
                "promo": "#optionalCode",
                "total": "#total-savings tfoot .text-right"
            },
            "name": "Enterprise",
            "storeId": "3686"
        },
        {
            "url": ".enterprise.com/(.*)/reserve",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".amount .pay-now-value span:first",
                "orderTotal": ".amount .pay-now-value span:first"
            },
            "name": "Enterprise",
            "storeId": "3686"
        },
        {
            "url": ".etsy.com/cart",
            "apply": {
                "type": "js",
                "js": "$('.accordion-label:first').click();$('.apply-coupon-code-button').click();",
                "timeout": 1500
            },
            "controls": {
                "promo": "[name=\"coupon-code\"]",
                "total": ".payment-costs:first .money .currency-value:last",
                "orderTotal": ".payment-costs:first .money .currency-value:first"
            },
            "remove": {
                "type": "click",
                "submit": ".apply-coupon-code-button",
                "timeout": 1500
            },
            "name": "Etsy",
            "storeId": "13839"
        },
        {
            "url": ".etsy.com.*/cart.*/review",
            "apply": {
                "type": "post",
                "url": "1",
                "data": "1"
            },
            "controls": {
                "promo": "1",
                "total": "monetary:first",
                "orderTotal": "monetary:last"
            },
            "name": "Etsy",
            "storeId": ""
        },
        {
            "url": ".expedia.com/HotelCheckout",
            "apply": {
                "type": "click",
                "submit": ".apply-coupon-reminder > button",
                "timeout": 3500
            },
            "controls": {
                "promo": ".cko-coupon-field",
                "total": ".trip-total .amount-value"
            },
            "remove": {
                "type": "click",
                "submit": "#removeCouponButton",
                "timeout": 4000
            },
            "name": "Expedia",
            "storeId": "3930"
        },
        {
            "url": ".expedia.com/Payments",
            "apply": {
                "type": "click",
                "submit": "#apply_coupon",
                "timeout": 3500
            },
            "controls": {
                "promo": "#coupon_code_text",
                "total": "#amtTotal"
            },
            "remove": [
                {
                    "type": "click",
                    "submit": "#removeCouponButton",
                    "timeout": 2000
                },
                {
                    "type": "click",
                    "submit": "#have_coupon",
                    "timeout": 100
                }
            ],
            "name": "Expedia",
            "storeId": "3930"
        },
        {
            "url": ".expedia.com/(?:Payments|expressCheckout)",
            "apply": {
                "type": "click",
                "submit": "#repriceButton",
                "timeout": 3500
            },
            "controls": {
                "promo": "#couponcode",
                "total": "#totalPrice"
            },
            "remove": [
                {
                    "type": "click",
                    "submit": "#removeCouponButton",
                    "timeout": 4000
                },
                {
                    "type": "click",
                    "submit": "#have_coupon",
                    "timeout": 100
                }
            ],
            "name": "Expedia",
            "storeId": "3930"
        },
        {
            "url": ".express.com/check-out/basket",
            "apply": {
                "type": "click",
                "submit": "#apply-promo",
                "timeout": 3500
            },
            "controls": {
                "promo": "#promo-code",
                "total": "#total-savings tfoot .text-right",
                "orderTotal": "#bag-summary-table-bottom .text-right:first",
                "coupon": ".FSR_Blocking"
            },
            "name": "Express",
            "storeId": "10088"
        },
        {
            "url": ".express.com/check-out/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[id=total-savings] > table > tbody > tr:first > td:last",
                "orderTotal": "div[id=total-savings] > table > tfoot > tr:first > td:last"
            },
            "name": "Express",
            "storeId": "10088"
        },
        {
            "url": ".eyebuydirect.com/cart",
            "apply": {
                "type": "click",
                "submit": "button:contains('Apply')",
                "timeout": 2000
            },
            "controls": {
                "promo": ".coupon-input.catc2InputHighlight",
                "total": "#js-total-amount",
                "orderTotal": "#js-total-amount",
                "coupon": ".coupon-remove:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon-remove:visible",
                "timeout": 2000
            },
            "name": "EyeBuyDirect",
            "storeId": "9658"
        },
        {
            "url": ".ftd.com/billingreview/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#or_subtotal_value_1458503223",
                "orderTotal": "#or_grand_total"
            },
            "name": "FTD",
            "storeId": "75"
        },
        {
            "url": "secure.fabletics.com/index.cfm",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".breakdown-prices tbody tr:eq(0) td:last",
                "orderTotal": "#cart_total"
            },
            "name": "Fabletics",
            "storeId": "14486"
        },
        {
            "url": ".fabric.com/.*/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#lblItemSubTotal",
                "orderTotal": "#ctlCheckout_lblRemainingBalance"
            },
            "name": "Fabric",
            "storeId": "8151"
        },
        {
            "url": ".famousfootwear.com/Checkout/Cart",
            "apply": {
                "type": "click",
                "submit": "#submitPromoCode",
                "timeout": 2000
            },
            "controls": {
                "promo": "#PromoCode",
                "total": ".order-summary-total .right",
                "orderTotal": ".summary-item .right:eq(0)",
                "coupon": ".promo-feedback-content-cell strong"
            },
            "name": "FamousFootwear",
            "storeId": "4489"
        },
        {
            "url": ".famousfootwear.com/Checkout/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[id=order-summary] > div[class=item]:first > span",
                "orderTotal": "#order-total"
            },
            "name": "FamousFootwear",
            "storeId": "4489"
        },
        {
            "url": ".finishline.com/store/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".summaryItem:first .value",
                "orderTotal": "#cartOrderTotal"
            },
            "name": "Finishline",
            "storeId": "9379"
        },
        {
            "url": ".foodsaver.com/cart",
            "apply": {
                "type": "click",
                "submit": ".removeButton",
                "timeout": 2500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": ".order-total td:last",
                "orderTotal": ".order-subtotal td:last",
                "coupon": ".rowcoupons .removeButton:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".removeButton",
                "timeout": 2500
            },
            "name": "FoodSaver",
            "storeId": "8875"
        },
        {
            "url": ".footaction.com/shoppingcart",
            "apply": {
                "type": "click",
                "submit": "#estimator_submit a",
                "timeout": 2000
            },
            "controls": {
                "promo": "#estimator_sourcecode",
                "total": "#estimator_total td:last",
                "orderTotal": "#estimator_subtotal td:last"
            },
            "conditions": {
                "required": [
                    "#estimator_zipcode"
                ]
            },
            "name": "FootAction",
            "storeId": "10200"
        },
        {
            "url": ".forever21.com/Checkout/Basket",
            "apply": {
                "type": "submit",
                "form": "#aspnetForm",
                "submit": "#ctl00_MainContent_imgDiscount",
                "data": {
                    "ctl00$MainContent$promo_value": "%promo",
                    "ctl00$MainContent$hdDiscountCode": "%promo"
                }
            },
            "controls": {
                "promo": "#ctl00_MainContent_promo_value",
                "total": {
                    "selector": ".summary_subtotal",
                    "rx": "[\\d,.]+"
                }
            },
            "name": "Forever21",
            "storeId": "10989"
        },
        {
            "url": ".forever21.com/Checkout/Checkout.aspx",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".total_price",
                "orderTotal": ".shopping_summarylist ul:visible:first .s_value"
            },
            "name": "Forever21",
            "storeId": "10989"
        },
        {
            "url": ".fragrancenet.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#itemSubtotal",
                "orderTotal": "#itemSubtotal"
            },
            "name": "FragranceNet.com",
            "storeId": "11"
        },
        {
            "url": ".framesdirect.com/ssl/cart_summary",
            "apply": {
                "type": "click",
                "submit": "#ctl00_ContentPlaceHolderProductDisplay_imgbtnPromotionCode",
                "timeout": 2000
            },
            "controls": {
                "promo": "#ctl00_ContentPlaceHolderProductDisplay_txtPromotionCode",
                "total": "#cart-grand-total .cart-summary-amount",
                "orderTotal": "#cart-subtotal .cart-summary-amount",
                "coupon": "#cart-promo:visible"
            },
            "name": "FramesDirect",
            "storeId": "7648"
        },
        {
            "url": ".fredericks.com/(.*)/cart",
            "apply": {
                "type": "js",
                "js": "discountForm.submit(false);",
                "timeout": 4200
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "#shopping-cart-totals-table .price:first",
                "orderTotal": "#shopping-cart-totals-table td > .price:first",
                "coupon": ".button[title='Cancel Promo']:visible"
            },
            "remove": {
                "type": "js",
                "js": "discountForm.submit(true);",
                "timeout": 4200
            },
            "name": "Frederick's of Hollywood",
            "storeId": "4746"
        },
        {
            "url": ".freetaxusa.com/taxes2015/taxcontrol?NEWTAX&PRMPT&DX=9",
            "apply": {
                "type": "submit",
                "form": "#cart-items-form",
                "submit": "#add-coupon",
                "data": {
                    "dwfrm_cart_couponCode": "%promo"
                }
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total > td:last",
                "orderTotal": ".order-subtotal > td:last",
                "coupon": ".order-discount.discount"
            },
            "name": "FreeTaxUsa",
            "storeId": "10392"
        },
        {
            "url": ".freedompop.com/(.*)/vcheckout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".productRow:first .cost",
                "orderTotal": "#totalPrice"
            },
            "name": "FreedomPop",
            "storeId": "12286"
        },
        {
            "url": ".frontgate.com/(.*)(ShoppingCartView|OrderRecap)",
            "apply": {
                "type": "click",
                "submit": "#promoButton",
                "timeout": 4000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".totals table:last tr td:nth-child(2) strong",
                "orderTotal": ".totals td:contains('Subtotal:')+td:last",
                "coupon": ".edit-promo-link:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".edit-promo-link:visible",
                "timeout": 4000
            },
            "name": "Frontgate",
            "storeId": "3668"
        },
        {
            "url": ".giltcity.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#subtotal-display",
                "orderTotal": "#total-display"
            },
            "name": "GILT CITY",
            "storeId": "10986"
        },
        {
            "url": ".gnc.com/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".sub-total td",
                "orderTotal": ".total td"
            },
            "name": "GNC",
            "storeId": "9286"
        },
        {
            "url": ".gamestop.com/Checkout/.*/Payments",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotals_pmtopts td:eq(0) label",
                "orderTotal": ".total label"
            },
            "name": "GameStop",
            "storeId": "2993"
        },
        {
            "url": "https://secure-.*.gap.com/checkout/order.do",
            "apply": {
                "type": "js",
                "js": "checkout.controller.modules.billing.promotions.getPromotionCodeApplyRequest('billingInputPromoRewardCode')",
                "timeout": 2000,
                "response": {
                    "type": "discount",
                    "discount": "dd.promoGrey.promoDiscount"
                }
            },
            "controls": {
                "promo": "#billingInputPromoRewardCode:visible",
                "total": "#orderSummaryTotal",
                "error": ".err > label[for!=\"billingInputPromoRewardCode\"] > .labelErrorMessage",
                "coupon": "#billingPromoCodeAppliedList .removePromoLink > a"
            },
            "conditions": {
                "required": [
                    "#billingAddressFieldGroup4-billingFirstName",
                    "#billingAddressFieldGroup4-billingLastName",
                    "#billingAddressFieldGroup4-billingAddressLine1",
                    "#billingAddressFieldGroup4-billingCity",
                    "#billingAddressFieldGroup4-billingState",
                    "#billingAddressFieldGroup4-billingPostalCode",
                    "#billingAddressFieldGroup4-billingDayPhone",
                    "#billingCardNumber",
                    "#billingExpirationMonth",
                    "#billingExpirationYear",
                    "#billingCardCvvNumber"
                ]
            },
            "remove": {
                "type": "js",
                "submit": "#billingPromoCodeAppliedList .removePromoLink > a",
                "js": "ccm.billing.promotions.getPromotionCodeRemoveRequest('%promo')",
                "timeout": 2000
            },
            "name": "Gap",
            "storeId": "3864"
        },
        {
            "url": "cart.gearbest.com/m-flow-a-cart",
            "apply": {
                "type": "click",
                "submit": ".applybtn span",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".cartTotalPrice .my_shop_price",
                "orderTotal": ".cartTotalPrice .my_shop_price",
                "coupon": ".blue.unl"
            },
            "remove": {
                "type": "get",
                "url": "http://cart.gearbest.com/m-flow-a-clearCoupon.htm"
            },
            "name": "GearBest",
            "storeId": "13205"
        },
        {
            "url": ".gearbest.com/m-flow-a-checkout.htm",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#items_sub_total",
                "orderTotal": "#price_total"
            },
            "name": "GearBest",
            "storeId": "13205"
        },
        {
            "url": [
                ".gilt.com/checkout",
                ".gilt.com/web-checkout"
            ],
            "apply": {
                "type": "click",
                "submit": ".apply-promo",
                "timeout": 3500
            },
            "controls": {
                "promo": ".promo-code",
                "total": ".total .sum",
                "orderTotal": "[data-gilt-test=\"subtotal-sum\"]",
                "coupon": ".remove.close.close-light"
            },
            "name": "Gilt",
            "storeId": "11083"
        },
        {
            "url": ".glasses.com/cart/checkout",
            "apply": {
                "type": "click",
                "submit": "#main__submit_offer_disc",
                "timeout": 2500
            },
            "controls": {
                "promo": "#main__discount_code",
                "total": "#total_price",
                "orderTotal": "#order_lines_subtotal",
                "coupon": "a:contains('Remove')"
            },
            "conditions": {
                "required": [
                    "#main__ship__fname",
                    "#main__ship__lname",
                    "#main__ship__address_1",
                    "#main__ship__city",
                    "#main__ship__postal_code",
                    "#main__ship__phone",
                    "#main__ship__email"
                ]
            },
            "remove": {
                "type": "click",
                "submit": "a:contains('Remove')",
                "timeout": 2500
            },
            "name": "Glasses.com",
            "storeId": "13310"
        },
        {
            "url": ".godaddy.com/Basket",
            "apply": {
                "type": "click",
                "submit": "#cart-promo-button",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".cart-subtotal-h1",
                "coupon": "#cart-promo-code",
                "orderTotal": "#cart-subtotal-row .floatRight"
            },
            "remove": {
                "type": "click",
                "submit": "#cart-promo-remove-applied-text:visible",
                "timeout": 2000
            },
            "name": "GoDaddy",
            "storeId": "10548"
        },
        {
            "url": ".godaddy.com/Checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".cart-subtotal-h1",
                "orderTotal": ".cart-subtotal-h1"
            },
            "name": "GoDaddy",
            "storeId": "10548"
        },
        {
            "url": ".graze.com/(.*)/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "tr[class=\"totals sub\"] .amount .price",
                "orderTotal": "tr[class=\"grand totals\"] .amount .price"
            },
            "name": "Graze",
            "storeId": "14129"
        },
        {
            "url": ".groupon.com/.*/confirmation",
            "apply": {
                "type": "click",
                "submit": "#gift-code-apply",
                "timeout": 5000
            },
            "controls": {
                "promo": "#gift-code",
                "total": ".amount.my-price"
            },
            "name": "Groupon",
            "storeId": "10634"
        },
        {
            "url": ".groupon.com/checkout/cart",
            "apply": {
                "type": "js",
                "js": "$('.promo-code button').removeAttr('disabled');$('.promo-code button').click()",
                "timeout": 3000
            },
            "controls": {
                "promo": "[name=\"discount-code\"]",
                "total": ".final-amount",
                "orderTotal": ".subtotal-amount"
            },
            "name": "Groupon",
            "storeId": "10634"
        },
        {
            "url": ".homechef.com/.*/payment",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "dl[class=\"receipt padding--3right--bpUp3 group\"] .is--right:first",
                "orderTotal": "dl[class=\"receipt padding--3right--bpUp3 group\"] .is--right:last"
            },
            "name": "HOME CHEF",
            "storeId": "14403"
        },
        {
            "url": ".hp.com/.*/(?:AjaxOrderItemDisplayView|OrderShippingBillingView)",
            "apply": {
                "type": "click",
                "form": "#PromotionCodeForm",
                "submit": "#applycouponbutton",
                "wait": "[id^=\"promotion_\"]:visible, #addcoupongiftcardbutton:visible, #promotionMessage:visible",
                "timeout": 1000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#customRefreshGrandTotal, #customRefreshSubtotal2",
                "form": "#addcoupongiftcardbutton",
                "coupon": "#couponCodeForDisplay"
            },
            "remove": [
                {
                    "type": "click",
                    "submit": "[id^=\"promotion_\"]",
                    "wait": "#addcoupongiftcardbutton:visible,#promoCode:visible",
                    "timeout": 1000
                },
                {
                    "type": "click",
                    "submit": "#addcoupongiftcardbutton",
                    "wait": "#promoCode:visible",
                    "timeout": 500
                }
            ],
            "name": "HP",
            "storeId": "8223"
        },
        {
            "url": ".hsn.com/checkout/order-review",
            "apply": {
                "type": "click",
                "submit": "#apply-discount",
                "timeout": 3000
            },
            "controls": {
                "promo": "#discount-code",
                "total": ".order-total .summary-total",
                "orderTotal": ".order-total .summary-total",
                "coupons": ".discount-text"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-discount",
                "timeout": 3000
            },
            "name": "HSN",
            "storeId": "4646"
        },
        {
            "url": [
                ".hanes.com/(.*)OrderItemDisplay",
                ".hanes.com/(.*)PromotionCodeManage"
            ],
            "apply": {
                "type": "click",
                "submit": "#applyPromoBtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": "td:last b",
                "orderTotal": "td:last b",
                "coupon": ".removePromo"
            },
            "remove": {
                "type": "click",
                "submit": ".removePromo",
                "timeout": 2500
            },
            "name": "Hanes",
            "storeId": "9707"
        },
        {
            "url": ".hanesbrandscheckout.com/(.*)/OrderShippingBillingView",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_2",
                "orderTotal": "#WC_SingleShipmentOrderTotalsSummary_td_10"
            },
            "name": "Hanes",
            "storeId": "9707"
        },
        {
            "url": ".hannaandersson.com/shipping",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#subTotal",
                "orderTotal": "estTotalSpan"
            },
            "name": "HannaAndersson",
            "storeId": "10277"
        },
        {
            "url": ".harryanddavid.com/(.*)/FDPlaceOrderDisplayCmd",
            "apply": {
                "type": "click",
                "submit": "#divApplyBtnStatic a",
                "timeout": 4000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".BP-total-amount:first div:last",
                "orderTotal": ".BP-total-label:first .BP-row:first div:last",
                "coupon": ".appliedPromoDetails a"
            },
            "remove": {
                "type": "click",
                "submit": ".appliedPromoDetails a",
                "timeout": 4000
            },
            "name": "Harry & David",
            "storeId": "7646"
        },
        {
            "url": ".hellofresh.com/(?:cart/index|checkout)/",
            "apply": {
                "type": "click",
                "submit": ".code-management .btn.btn-success",
                "timeout": 3000
            },
            "controls": {
                "promo": "#voucher-code-input",
                "total": ".text-right.detail-price",
                "orderTotal": ".text-right.detail-price"
            },
            "name": "HelloFresh",
            "storeId": "14196"
        },
        {
            "url": ".hellofresh.com/checkout/finish/",
            "apply": {
                "type": "click",
                "submit": ".input-group-btn .btn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promo",
                "total": ".summary-item-price strong",
                "orderTotal": ".sushi-detail-price",
                "coupon": ".col-md-4 .row a"
            },
            "remove": {
                "apply": {
                    "type": "click",
                    "submit": ".col-md-4 .row a",
                    "timeout": 2000
                }
            },
            "name": "HelloFresh",
            "storeId": "14196"
        },
        {
            "url": ".hertz.com/(.*)/reservation/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"rd-subtotal rd-center\"]:last",
                "orderTotal": "div[class=\"rd-subtotal rd-center\"]:last"
            },
            "name": "Hertz",
            "storeId": "11627"
        },
        {
            "url": ".horchow.com/checkout/(cart|orderreview)",
            "apply": {
                "type": "click",
                "submit": "#btn-promo_msk",
                "timeout": 3000
            },
            "controls": {
                "promo": "#i-promo",
                "total": "#txt_orderTotal",
                "orderTotal": "#txt_orderSubTotal",
                "coupon": ".promo.desc"
            },
            "name": "Horchow",
            "storeId": "8078"
        },
        {
            "url": "checkout.hostgator.com/signup/",
            "apply": {
                "type": "click",
                "submit": "#check-coupon",
                "timeout": 4000
            },
            "controls": {
                "promo": "#coupon-code",
                "total": "#preview_total"
            },
            "name": "HostGator",
            "storeId": "12402"
        },
        {
            "url": ".hottopic.com/(?:cart|checkout)",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_billing_couponCode",
                "total": ".order-subtotal td:eq(1)",
                "orderTotal": ".orderTotal",
                "coupon": ".success"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-coupon",
                "timeout": 2500
            },
            "name": "Hot Topic",
            "storeId": "9070"
        },
        {
            "url": ".hottopic.com/cart",
            "apply": {
                "type": "click",
                "submit": ".submit_coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".orderTotal",
                "orderTotal": ".order-subtotal td:eq(1)",
                "coupon": ".remove"
            },
            "remove": {
                "type": "click",
                "submit": ".remove",
                "timeout": 2500
            },
            "name": "Hot Topic",
            "storeId": "9070"
        },
        {
            "url": ".hotels.com/bookingInitialise.do",
            "apply": {
                "type": "click",
                "timeout": 3000,
                "form": "#coupon-code-form",
                "submit": "#coupon-code-apply-btn",
                "data": {
                    "bookingSignInDiscount.coupon.code": "%promo"
                }
            },
            "controls": {
                "promo": "#coupon-code-field",
                "total": "#financial-details-total-price",
                "orderTotal": "#financial-details-subtotal"
            },
            "remove": {
                "type": "click",
                "submit": "#coupon-code-remove-btn",
                "timeout": 2000
            },
            "name": "Hotels",
            "storeId": "9388"
        },
        {
            "url": ".ihg.com/(.*)/reservation/book",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".averageBasePrice",
                "orderTotal": "span[class=currency]"
            },
            "name": "InterContinental Hotels Group",
            "storeId": "9584"
        },
        {
            "url": ".jcrew.com/checkout2/shoppingbag",
            "apply": {
                "type": "click",
                "submit": "#promoApply",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promotionCode1",
                "total": ".summary-subtotal .summary-value",
                "orderTotal": ".summary-total .summary-value",
                "coupon": ".section--first > .item-remove"
            },
            "remove": {
                "type": "click",
                "submit": ".section--first .item-remove",
                "timeout": 1500
            },
            "name": "J.Crew",
            "storeId": "3865"
        },
        {
            "url": ".jcpenney.com/(?:dotcom/)?jsp/cart/viewShoppingBag",
            "apply": {
                "type": "js",
                "js": "applyCouponRewardCode()",
                "timeout": 5000
            },
            "controls": {
                "promo": "[name=\"promoCode\"]",
                "total": ".order_subtotal_amnt",
                "orderTotal": "#pricing-summary .merch_amt"
            },
            "remove": {
                "type": "js",
                "js": "removePromoCode('promoCodeRemovalForm_1');",
                "timeout": 3000
            },
            "name": "JCPenny",
            "storeId": "69"
        },
        {
            "url": "secure-checkout.jjill.com/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#ucTotals_lblItemTotal",
                "orderTotal": "#ucTotals_lblTotal"
            },
            "name": "JJiLL",
            "storeId": "2730"
        },
        {
            "url": ".jackthreads.com(.*)checkout",
            "apply": {
                "type": "",
                "submit": "",
                "timeout": 2000
            },
            "controls": {
                "promo": "",
                "total": "",
                "orderTotal": "",
                "coupon": ""
            },
            "remove": {
                "type": "",
                "submit": "",
                "timeout": 2000
            },
            "name": "Jack Threads",
            "storeId": "11819"
        },
        {
            "url": ".jcpenney.com/(.*)/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".row.order_total .flt_rgt",
                "orderTotal": ".fontboldForCheckouSummary:last"
            },
            "name": "Jcpenney",
            "storeId": "69"
        },
        {
            "url": ".jimmyjazz.com/cart",
            "apply": {
                "type": "js",
                "js": "document.querySelector('.promotion_submit').click()",
                "timeout": 5000
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".total",
                "orderTotal": ".total",
                "coupon": ".code"
            },
            "remove": {
                "type": "js",
                "submit": "document.getElementByClassName('promo-remove').click()",
                "timeout": 5000
            },
            "name": "JimmyJazz",
            "storeId": "10608"
        },
        {
            "url": ".joann.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 4000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total td:eq(1)",
                "orderTotal": ".order-subtotal td :eq(1)",
                "coupon": ".cartcoupon.clearfix"
            },
            "remove": {
                "type": "click",
                "submit": ".closeButton",
                "timeout": 4000
            },
            "name": "Jo-Ann",
            "storeId": "2765"
        },
        {
            "url": ".jockey.com/(bag|checkout)",
            "apply": {
                "type": "click",
                "submit": "coupon-code-form .btn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#CouponCode",
                "total": ".bordered-summary-row .summary-right:visible",
                "orderTotal": ".summary-detail-row:visible:first span:last",
                "coupon": ".removeCouponLink:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".removeCouponLink:visible",
                "timeout": 2000
            },
            "name": "Jockey",
            "storeId": "5946"
        },
        {
            "url": ".keurig.com/cart",
            "apply": {
                "type": "click",
                "submit": ".btn-box.btn-orange.right.apply",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCode",
                "total": ".total.order-total-price",
                "orderTotal": ".subTotal",
                "coupon": "[action='/coupons/removeCoupon']"
            },
            "remove": {
                "type": "click",
                "submit": ".btn-box.btn-orange.couponremove",
                "timeout": 2000
            },
            "name": "Keurig",
            "storeId": "12448"
        },
        {
            "url": ".keurig.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subTotal",
                "orderTotal": "span[class=\"total order-total-price\"]"
            },
            "name": "Keurig",
            "storeId": "12448"
        },
        {
            "url": ".kidsfootlocker.com/shoppingcart/default",
            "apply": {
                "type": "click",
                "submit": "#estimator_submit a",
                "timeout": 2500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": "#estimator_total td:alltext",
                "orderTotal": "#estimator_subtotal td:alltext",
                "coupons": "#estimator_savings td:contains('$')"
            },
            "name": "Kids Foot Locker [Cart Page]",
            "storeId": "8415"
        },
        {
            "url": ".kidsfootlocker.com/checkout/?uri=checkout",
            "apply": {
                "type": "click",
                "submit": "#applyPromo",
                "timeout": 2500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": "#reviewPaneGrandTotal",
                "orderTotal": "#reviewPaneCartTotal",
                "coupon": "#reviewPaneDiscountTotal:contains('$')"
            },
            "remove": {
                "type": "click",
                "submit": "#promoCodePaneEdit",
                "timeout": 2500
            },
            "name": "Kids Foot Locker [CheckoutPage]",
            "storeId": "8415"
        },
        {
            "url": ".kiehls.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order_subtotal.js_order_subtotal:first td:last",
                "orderTotal": ".order_total.js_order_total:first td:last",
                "coupon": ".remove_coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove_coupon",
                "timeout": 2500
            },
            "name": "Kiehls",
            "storeId": "9443"
        },
        {
            "url": ".kmart.com/crsp/mx/cart",
            "apply": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('shc-btn cc-add')).triggerHandler('click');",
                "timeout": 3000
            },
            "controls": {
                "promo": "#focusPromoInput",
                "total": ".est-total-bottom .ng-binding",
                "orderTotal": ".est-total-bottom .ng-binding"
            },
            "remove": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click');angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click');",
                "timeout": 3000
            },
            "name": "Kmart",
            "storeId": "4827"
        },
        {
            "url": ".kohls.com/checkout/",
            "apply": {
                "type": "click",
                "submit": ".applyCode .applyCodeButton",
                "timeout": 1500,
                "response": {
                    "type": "discount",
                    "discount": ".applied_discounts_tr_col_right .pgreen"
                }
            },
            "controls": {
                "form": ".ordersummary_kohlscash .kohlscashapplylink",
                "promo": "#apply_code_input",
                "total": "#totalcharges",
                "orderTotal": "#subtotal",
                "coupon": "#kohlscashdiscounts"
            },
            "remove": {
                "type": "click",
                "submit": ".removeAppliedDiscount",
                "timeout": 1200
            },
            "name": "Kohl's",
            "storeId": "7206"
        },
        {
            "url": ".llbean.com/.*/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".feature",
                "orderTotal": "dd[class=total]"
            },
            "name": "LLBean",
            "storeId": "3186"
        },
        {
            "url": ".loft.com/checkout/index.jsp",
            "apply": {
                "type": "click",
                "submit": ".promo-code .submit input",
                "timeout": 8000,
                "response": {
                    "type": "discount",
                    "discount": "#discount .amount"
                }
            },
            "controls": {
                "promo": "#code",
                "total": ".total span"
            },
            "name": "LOFT",
            "storeId": "9142"
        },
        {
            "url": ".ltdcommodities.com/checkout/purchase",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal:eq(0)",
                "orderTotal": ".total"
            },
            "name": "LTD Commodities",
            "storeId": "11977"
        },
        {
            "url": ".lakeside.com/checkout/purchase",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal:eq(0)",
                "orderTotal": ".total"
            },
            "name": "Lake side",
            "storeId": "12409"
        },
        {
            "url": ".lancome-usa.com/on/demandware.store/Sites-lancome_us-Site/default/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#promoCodeButton",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".ordertotal .value",
                "orderTotal": ".ordertotalstable .ordersubtotal .value",
                "coupon": ".bonusitem"
            },
            "remove": {
                "type": "click",
                "submit": ".deletecoupon span",
                "timeout": 2500
            },
            "name": "Lancome Cosmetics [Cart Page]",
            "storeId": "8257"
        },
        {
            "url": ".landsend.com/co/checkout/",
            "apply": {
                "type": "click",
                "submit": ".button-container .btn-primary",
                "timeout": 5700
            },
            "controls": {
                "promo": "#promo-code",
                "pin": "#promo-pin",
                "total": ".total-price .price",
                "orderTotal": ".order-subtotal"
            },
            "remove": {
                "type": "click",
                "submit": ".list-inline-group li a:contains('Remove')",
                "timeout": 5700
            },
            "name": "Lands' End",
            "storeId": "3866"
        },
        {
            "url": ".landsend.com/co/checkout/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "ul[class=\"list-unstyled totals-list-prices\"] .ng-scope span[class=\"price ng-binding\"]",
                "orderTotal": ".list-unstyled li[class=\"total-price clearfix\"] span[class=\"price ng-binding\"]"
            },
            "name": "Lands' End",
            "storeId": "3866"
        },
        {
            "url": ".lanebryant.com/checkout/",
            "apply": {
                "type": "click",
                "submit": "#submitPromotionCode",
                "timeout": 4000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".order-totals .amount:eq(0)",
                "orderTotal": ".amount.total",
                "coupon": ".appliedPromoCode"
            },
            "remove": {
                "type": "click",
                "submit": "##promoCodeRemoveLink",
                "timeout": 4000
            },
            "name": "Lane Bryant",
            "storeId": "8293"
        },
        {
            "url": ".lastcall.com/checkout/",
            "apply": {
                "type": "click",
                "submit": "#btn-promo_msk",
                "timeout": 2000
            },
            "controls": {
                "promo": "#i-promo",
                "total": "#txt_orderSubTotal",
                "orderTotal": "#txt_orderTotal"
            },
            "name": "Last Call",
            "storeId": "10731"
        },
        {
            "url": "shop.lenovo.com/(.*)/en_US/cart",
            "apply": {
                "type": "click",
                "submit": "#cart-summary-ecouponForm-button",
                "timeout": 5000
            },
            "controls": {
                "promo": "#CouponCode",
                "total": ".cart-summary-pricing-webPrice-price",
                "orderTotal": ".cart-summary-pricingTotal dd",
                "coupon": ".remove"
            },
            "remove": {
                "type": "click",
                "submit": ".remove",
                "timeout": 5000
            },
            "name": "Lenovo",
            "storeId": "9208"
        },
        {
            "url": ".lenovo.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "td[class=\"cart-float-price-final cart-sum-pricecol\"] span",
                "orderTotal": "#checkout-total-price-formattedValue"
            },
            "name": "Lenovo",
            "storeId": "9208"
        },
        {
            "url": ".levi.com/(.*)/cart",
            "apply": {
                "type": "click",
                "submit": "#promo-btn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promo-input",
                "total": ".bottom-estimated-total-right",
                "orderTotal": ".bottom-subtotal-right",
                "coupon": ".inner-content .bottom-subtotal-right:eq(1)"
            },
            "name": "Levi's",
            "storeId": "10449"
        },
        {
            "url": ".lightinthebox.com/(.*)checkout_payment_process",
            "apply": {
                "type": "click",
                "submit": "#couponApply",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCode",
                "total": "#ot_total",
                "orderTotal": "#ot_subtotal"
            },
            "remove": {
                "type": "click",
                "submit": "#removeCoupon",
                "timeout": 2000
            },
            "name": "LightInTheBox",
            "storeId": "10315"
        },
        {
            "url": ".lightingdirect.com/(.*)page=cart",
            "apply": {
                "type": "click",
                "submit": ".button.light.mini",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_number",
                "total": "#grandtotalamount",
                "orderTotal": "#subtotalamount",
                "coupon": "#discountamount:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".button:contains('Remove')",
                "timeout": 2500
            },
            "name": "Lightning Direct",
            "storeId": "8962"
        },
        {
            "url": ".livingsocial.com/.*/checkout/",
            "apply": {
                "type": "submit",
                "form": "form#checkout_form",
                "submit": "#apply-promo-code"
            },
            "controls": {
                "form": "#checkout_form_buy:not([disabled])",
                "promo": "#promo-code",
                "total": "#grand_total",
                "coupon": "#promo-code"
            },
            "name": "LivingSocial",
            "storeId": "11445"
        },
        {
            "url": ".livingsocial.com/.*/checkouts/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#subtotal-amount",
                "orderTotal": "#total-amount"
            },
            "name": "LivingSocial",
            "storeId": "11445"
        },
        {
            "url": ".lowes.com/OrderItemDisplay",
            "apply": {
                "type": "click",
                "submit": ".apply-promo-code",
                "timeout": 1500
            },
            "controls": {
                "promo": "#promoCode1",
                "total": ".estimated-total .value span",
                "orderTotal": ".cart-totals .value :eq(0)"
            },
            "name": "Lowe's",
            "storeId": "10722"
        },
        {
            "url": ".luckyvitamin.com/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".summary tbody tr:first .col-price",
                "orderTotal": ".summary tbody .order .col-price"
            },
            "name": "Lucky Vitamin",
            "storeId": "10674"
        },
        {
            "url": ".lulus.com/checkout(.*)shipping",
            "apply": {
                "type": "click",
                "submit": "[name='apply_coupon']",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".subtotal .value",
                "orderTotal": ".total .value",
                "coupon": "[name='remove_coupon']"
            },
            "remove": {
                "type": "click",
                "submit": "[name='remove_coupon']",
                "timeout": 2500
            },
            "name": "Lulu's",
            "storeId": "10854"
        },
        {
            "url": ".macys.com/bag/index.ognc",
            "apply": {
                "type": "post",
                "url": "http://www1.macys.com/bag/view",
                "data": {
                    "promoCode[0]": "%promo"
                },
                "submit": "#applyPromoCode",
                "response": {
                    "type": "json",
                    "discount": "promotions//0//amountDiscounted",
                    "total": "grandTotal"
                }
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#bagTotal",
                "orderTotal": "#bagMerchandiseTotal",
                "coupon": ".promoDiscount"
            },
            "name": "Macy's",
            "storeId": "8333"
        },
        {
            "url": ".macys.com/chkout/",
            "apply": {
                "type": "post",
                "url": "https://www.macys.com/chkout/ordersummary/addpromocode",
                "data": {
                    "event": "addPromoCode",
                    "promoCode": "%promo"
                },
                "response": {
                    "type": "json",
                    "discount": "orderSummaryVB//orderSummary//orderDiscountTotal",
                    "total": "grandTotal"
                }
            },
            "controls": {
                "promo": "#promoCodeValue",
                "total": "#totalAmount",
                "orderTotal": "#subTotalAmount"
            },
            "name": "Macy's",
            "storeId": "8333"
        },
        {
            "url": ".madewell.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "li[class=\"summary-item summary-subtotal clearfix\"] span[class=\"summary-value notranslate\"]",
                "orderTotal": "li[class=\"summary-item summary-total clearfix\"] span[class=\"summary-value notranslate\"]"
            },
            "name": "Madewell",
            "storeId": "10599"
        },
        {
            "url": ".marriott.com/reservation/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "td[class=\"l-right-align l-width-one-thirds t-font-bold l-charge-before-tax\"]",
                "orderTotal": ".t-stay-total"
            },
            "name": "Marriott",
            "storeId": "8084"
        },
        {
            "url": ".michaelkors.com/checkout/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "li[class=row--extra-margin]:first .product-values .pull-right",
                "orderTotal": "li[class=\"row--normal-margin row--last-skinny-margin\"] .product-values .pull-right"
            },
            "name": "Michael Kors",
            "storeId": "11710"
        },
        {
            "url": ".michaels.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total-value .value",
                "orderTotal": ".order-summary-container ul .value:eq(0)",
                "coupon": ".bonus-item"
            },
            "remove": {
                "type": "click",
                "submit": "#remove-cuppon",
                "timeout": 2000
            },
            "name": "Michaels",
            "storeId": "12553"
        },
        {
            "url": ".microsoftstore.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal .val:last",
                "orderTotal": ".total .val:last"
            },
            "name": "Microsoft Store",
            "storeId": "10103"
        },
        {
            "url": ".minted.com/cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".cart .inner_4 h3 b",
                "orderTotal": ".cart .inner_4 h3 b"
            },
            "name": "Minted",
            "storeId": "10335"
        },
        {
            "url": ".missguidedus.com/checkout/cart/",
            "apply": {
                "type": "js",
                "js": "discountForm.submit(false)",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".grandtotal-amount span:last",
                "orderTotal": ".grandtotal-amount span:last",
                "coupon": "[value='Cancel Code']"
            },
            "remove": {
                "type": "js",
                "js": "discountForm.submit(true)",
                "timeout": 2500
            },
            "name": "MissGuided",
            "storeId": "13362"
        },
        {
            "url": ".monoprice.com/cart/index",
            "apply": {
                "type": "click",
                "submit": ".js-add-promo",
                "timeout": 2500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": "#extracost_container span:last",
                "orderTotal": ".js-order-summary div:first .row:first",
                "coupon": ".js-remove-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".js-remove-coupon",
                "timeout": 2500
            },
            "name": "Monoprice [Cart Page]",
            "storeId": "11469"
        },
        {
            "url": ".monoprice.com/checkout/checkoutstep4",
            "apply": {
                "type": "click",
                "submit": ".js-add-promo",
                "timeout": 3500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": ".border-container-blue div:eq(0) span",
                "orderTotal": ".border-container-blue .row",
                "coupon": ".js-remove-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".js-remove-coupon",
                "timeout": 3500
            },
            "name": "Monoprice [Checkout Page]",
            "storeId": "11469"
        },
        {
            "url": ".moo.com/(.*)/cart/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".retail-price .price-with-tax .price-actual",
                "orderTotal": ".grand-total .price-with-tax .price-actual"
            },
            "name": "Moo",
            "storeId": ""
        },
        {
            "url": ".mymms.com/basket.do",
            "apply": {
                "type": "click",
                "submit": ".sourceCodeApplyBtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#sourceCode",
                "total": ".ml-basket-total-value:first",
                "orderTotal": ".ml-basket-total-value:first",
                "coupon": ".ml-discount-label:first:visible"
            },
            "name": "My M&M's [Cart Page]",
            "storeId": "6306"
        },
        {
            "url": ".mymms.com/checkout/accordioncheckout",
            "apply": {
                "type": "click",
                "submit": ".ml-payment-source-code-apply div",
                "timeout": 2500
            },
            "controls": {
                "promo": "#sourceCode",
                "total": ".ml-summary-total .ml-accordion-summary-item-value",
                "orderTotal": ".ml-accordion-summary-item-value:first",
                "coupon": ".ml-accordion-summary-item.ml-summary-message .ml-accordion-summary-item-label:first:visible"
            },
            "conditions": {
                "required": [
                    ".ml-payment-coupon-msg:visible"
                ]
            },
            "name": "My M&M's [Checkout Page]",
            "storeId": "6306"
        },
        {
            "url": ".ninewest.com/.*/FluidStorefront-RenderCheckout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"grid-cell default-40 item-value order-subtotal-value\"]",
                "orderTotal": "div[class=\"grid-cell default-40 item-value order-total-value\"]"
            },
            "name": "NINE WEST",
            "storeId": "10190"
        },
        {
            "url": ".nastygal.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subtotal:first",
                "orderTotal": ".total"
            },
            "name": "Nasty Gal",
            "storeId": "12437"
        },
        {
            "url": ".neimanmarcus.com/(?:.*/)?checkout/",
            "apply": {
                "type": "submit",
                "form": "#promo-form",
                "submit": "#btn-promo",
                "timeout": 3500
            },
            "controls": {
                "promo": "#i-promo",
                "total": "#txt_orderSubTotal",
                "orderTotal": "#txt_orderTotal",
                "coupon": ".promo.desc"
            },
            "name": "Neiman Marcus",
            "storeId": "8052"
        },
        {
            "url": ".nyandcompany.com/(.*)(?:shopping-bag|cart)",
            "apply": {
                "type": "click",
                "submit": "#couponApplyButton",
                "timeout": 2300
            },
            "controls": {
                "promo": "#couponText",
                "total": ".bag-total .floatright:eq(1)",
                "orderTotal": ".bag-total .floatright:eq(0)",
                "coupon": ".remove-add-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-add-coupon .price-mod",
                "timeout": 2300
            },
            "name": "New York & Company",
            "storeId": "9527"
        },
        {
            "url": ".nyandcompany.com/.*/checkout/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".your-charges > div:first > div:last",
                "orderTotal": ".your-charges > div[class=t-row] > div[class=\"t-cell line-value checkout-total\"]"
            },
            "name": "New York & Company",
            "storeId": "9527"
        },
        {
            "url": ".newbalance.com/(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": ".action-apply-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promocode_minisummary",
                "total": ".subtotal .total-value:first",
                "orderTotal": ".total .total-value:first",
                "coupon": ".action-remove-promo"
            },
            "remove": {
                "type": "click",
                "submit": ".action-remove-promo",
                "timeout": 2500
            },
            "name": "NewBalance",
            "storeId": "10142"
        },
        {
            "url": ".secure.newegg.com/Shopping/ShoppingCart",
            "apply": {
                "type": "click",
                "submit": "table.foot tr:eq(1) a.button",
                "timeout": 2000
            },
            "controls": {
                "promo": "#PromotionCode",
                "coupon": "table.foot tr:eq(1) .applied-code .discount",
                "total": ".grand-total .amount:first",
                "orderTotal": ".group-pricing .amount:first"
            },
            "remove": {
                "type": "click",
                "submit": "table.foot tr:eq(1) .applied-code a",
                "timeout": 2000
            },
            "name": "Newegg",
            "storeId": "9344"
        },
        {
            "url": ".newegg.com/.*/CheckoutStep2",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-item-price:first",
                "orderTotal": ".price-current span"
            },
            "name": "Newegg.com [Checkout Page]",
            "storeId": "9344"
        },
        {
            "url": ".*nike.com?(.+)checkout/html/cart",
            "apply": {
                "type": "click",
                "submit": "[name='/atg/commerce/promotion/CouponFormHandler.claimCoupons']",
                "timeout": 1500
            },
            "controls": {
                "promo": "#promoInput",
                "total": "#totalAmt",
                "orderTotal": "#subTotalAmount"
            },
            "name": "Nike Store",
            "storeId": "9528"
        },
        {
            "url": ".*.nike.com(.+)/checkout/html/billing.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#totalAmt",
                "orderTotal": "#subTotalAmount"
            },
            "name": "Nike store",
            "storeId": "9528"
        },
        {
            "url": "secure.nordstrom.com/os",
            "apply": {
                "type": "click",
                "submit": ".promo-actions .apply.button:visible",
                "timeout": 3000
            },
            "controls": {
                "promo": "[data-ng-model=\"manualPromoCode.value\"]",
                "total": "#review-order .price:last"
            },
            "name": "Nordstrom",
            "storeId": "2423"
        },
        {
            "url": ".nordstromrack.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".checkout-review__value:first",
                "orderTotal": ".checkout-review__total"
            },
            "name": "Nordstrom rack",
            "storeId": "13349"
        },
        {
            "url": ".officedepot.com/cart/shoppingCart.do",
            "apply": {
                "type": "js",
                "js": "$('.toolbar_fix .vspace_top:eq(1)').removeClass('js_hide');$('#cartV3AddCouponButton').click();window.setTimeout(function(){$('.btn.primary.dialog_close_button').click();}, 1000);",
                "timeout": 1500
            },
            "controls": {
                "promo": "#referralCode",
                "total": "#cartV3Summary tfoot td:eq(0)",
                "orderTotal": "#cartV3Summary tfoot td:eq(0)",
                "coupon": ".cart_applied_coupon"
            },
            "remove": {
                "type": "js",
                "js": "$('.coupon_remove_link').trigger('click');window.setTimeout(function(){$('.btn.primary.dialog_close_button').trigger('click');}, 2000);",
                "timeout": 1000
            },
            "name": "OfficeDepot",
            "storeId": "3548"
        },
        {
            "url": ".officedepot.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".orderSummary_subtotal",
                "orderTotal": ".order_summary_total"
            },
            "name": "OfficeDepot",
            "storeId": "3548"
        },
        {
            "url": "secure-oldnavy.gap.com/checkout/order.do",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#orderSummaryMerchandiseCharge",
                "orderTotal": "#orderSummaryTotal"
            },
            "name": "Old Navy",
            "storeId": "3726"
        },
        {
            "url": ".omahasteaks.com/servlet/OnlineShopping",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".clear",
                "orderTotal": ".clear div"
            },
            "name": "Omaha Steaks",
            "storeId": "36"
        },
        {
            "url": ".onetravel.com/(.*)/Payment/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".priceDetailsColumn .bold span[class=\"pull-right currencyPayment\"]",
                "orderTotal": "#GrandTotal span[class=\"pull-right currencyPayment\"]"
            },
            "name": "One Travel",
            "storeId": "10624"
        },
        {
            "url": ".onlineshoes.com/Cart",
            "apply": {
                "type": "click",
                "submit": "#Input_ApplyPromo",
                "timeout": 2500
            },
            "controls": {
                "promo": "#Input_Promotion_CheckoutNewPromoCode",
                "total": ".order-summary-total .amount",
                "orderTotal": ".order-summary-total .amount",
                "coupon": ".promo-link-devider"
            },
            "remove": {
                "type": "click",
                "submit": ".promotion a:eq(1)",
                "timeout": 2500
            },
            "name": "OnlineShoes [Cart Page]",
            "storeId": "8222"
        },
        {
            "url": ".onlineshoes.com/Checkout/Details",
            "apply": {
                "type": "click",
                "submit": "#Input_ApplyPromo",
                "timeout": 2500
            },
            "controls": {
                "promo": "#Input_Promotion_CheckoutNewPromoCode",
                "total": ".order-amount__amount",
                "orderTotal": ".order-amount__amount",
                "coupon": ".promotion p a:eq(1)"
            },
            "name": "OnlineShoes [Checkout Page]",
            "storeId": "8222"
        },
        {
            "url": ".onlineshoes.com/Checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-amount__amount",
                "orderTotal": ".order-amount__amount"
            },
            "name": "OnlineShoes [Checkout page]",
            "storeId": "8222"
        },
        {
            "url": ".opensky.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#apply-coupon-btn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#coupon",
                "total": "#cart-subtotalWithDiscounts .dollars",
                "orderTotal": "#cart-total .dollars"
            },
            "remove": {
                "type": "click",
                "submit": "#remove-coupon-btn",
                "timeout": 2000
            },
            "name": "OpenSky",
            "storeId": "11141"
        },
        {
            "url": [
                ".orbitz.com/HotelCheckout",
                ".orbitz.com/FlightCheckout"
            ],
            "apply": {
                "type": "submit",
                "form": "form",
                "submit": ".couponCodeButton input"
            },
            "controls": {
                "promo": ".couponCodeField input",
                "total": ""
            },
            "name": "Orbitz",
            "storeId": "8318"
        },
        {
            "url": "secure.orientaltrading.com/.*/checkout/payment",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".amt-subtotal",
                "orderTotal": ".amt-grand-total:last"
            },
            "name": "Oriental Trading",
            "storeId": "697"
        },
        {
            "url": ".orvis.com/store/checkout",
            "apply": {
                "type": "js",
                "js": "ApplySpecialOffer();",
                "timeout": 2500
            },
            "controls": {
                "promo": "#special_offer",
                "total": "#lblOrderTotalSpan",
                "orderTotal": "#lblOrderSubtotalSpan",
                "coupon": "#divspecialoffer [alt='Remove Offer']"
            },
            "remove": {
                "type": "js",
                "js": "DeleteSpecialOffer();",
                "timeout": 2500
            },
            "name": "Orvis",
            "storeId": "2157"
        },
        {
            "url": ".otterbox.com/(.*)/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-total:last .value p",
                "orderTotal": ".order-subtotal:last .value",
                "coupon": ".bonus-item:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon-quantity-data button",
                "timeout": 2500
            },
            "name": "OtterBox",
            "storeId": "9944"
        },
        {
            "url": ".overnightprints.com/cart",
            "apply": {
                "type": "click",
                "submit": "#cpn-redeem",
                "timeout": 2500
            },
            "controls": {
                "promo": "[name='discount_code']",
                "total": "#order-total",
                "orderTotal": "#order-subtotal",
                "coupon": "#discountitem_removelink"
            },
            "remove": {
                "type": "click",
                "submit": "#discountitem_removelink",
                "timeout": 2500
            },
            "name": "Overnight Prints",
            "storeId": "10153"
        },
        {
            "url": ".overstock.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#promoCodeApply",
                "timeout": 3500
            },
            "controls": {
                "promo": "#PromoCode",
                "total": "#orderTotalDisplayAmount",
                "orderTotal": "#subtotalDisplayAmount"
            },
            "name": "Overstock",
            "storeId": "3466"
        },
        {
            "url": ".petsmart.com/.*=ViewCheckoutPayment",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".ws-aside-cost-value.subtotal-value.value",
                "orderTotal": ".ws-aside-cost-value.total-value.value"
            },
            "name": "PETSMART",
            "storeId": "896"
        },
        {
            "url": ".pacsun.com/(.*)/default/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "[name='dwfrm_cart_addCoupon']",
                "timeout": 3000
            },
            "controls": {
                "promo": ".couponinput",
                "total": ".ordertotal span:last",
                "orderTotal": ".ordersubtotal span:last",
                "coupon": ".couponcode [name='dwfrm_cart_coupons_i0_deleteCoupon']"
            },
            "remove": {
                "type": "click",
                "submit": ".couponcode [name='dwfrm_cart_coupons_i0_deleteCoupon']",
                "timeout": 3000
            },
            "name": "PacSun",
            "storeId": "2161"
        },
        {
            "url": ".pepboys.com/cart",
            "apply": {
                "type": "click",
                "submit": "#tcCartPromoApply",
                "timeout": 3500
            },
            "controls": {
                "promo": "[name=\"promoCode\"]",
                "total": ".cartTotalsTop .price strong",
                "orderTotal": ".cartTotalsTop .price strong",
                "coupon": "span:contains('Instant Discounts:'):visible"
            },
            "name": "Pep boys",
            "storeId": "13469"
        },
        {
            "url": ".personalizationmall.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "td[align='right'][width='70']",
                "orderTotal": ".S12.Bold"
            },
            "name": "PersonalizationMall",
            "storeId": "8429"
        },
        {
            "url": [
                ".petfooddirect.com/checkout/cart/",
                ".petfooddirect.com/checkout/onepage/"
            ],
            "apply": {
                "type": "click",
                "submit": ".btn-default.btn-primary",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".grandTotal .price",
                "orderTotal": ".subtotal .price:last",
                "coupon": "a:contains('Cancel')"
            },
            "remove": {
                "type": "click",
                "submit": "a:contains('Cancel')",
                "timeout": 2500
            },
            "name": "Pet Food Direct",
            "storeId": "2363"
        },
        {
            "url": ".pet360.com/shop/checkout/(cart|onepage)",
            "apply": {
                "type": "click",
                "submit": ".btn-default.btn-primary",
                "timeout": 3000
            },
            "controls": {
                "promo": "#coupon_code",
                "total": ".grandTotal .price",
                "orderTotal": ".subTotalPrice .price",
                "coupon": "td a:contains('Cancel')[href='#']:visible"
            },
            "remove": {
                "type": "click",
                "submit": "td a:contains('Cancel')[href='#']:visible",
                "timeout": 3000
            },
            "name": "Pet360",
            "storeId": "11643"
        },
        {
            "url": ".petcarerx.com/cart/",
            "apply": {
                "type": "js",
                "js": "if($('.use-different-coupon:last:visible').lenght > 0) {$('.use-different-coupon:last:visible').click()};$('.formBtn').click();",
                "timeout": 2500
            },
            "controls": {
                "promo": "#newcoupon_textbox",
                "total": "#summary_total .ordr9Rxstl",
                "orderTotal": "#summary_regtotal .ordr2Rxstl",
                "coupon": "#summary_totsavings:visible"
            },
            "name": "PetCareRx",
            "storeId": "8255"
        },
        {
            "url": ".petco.com/shop/OrderItemDisplay",
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 2000
            },
            "controls": {
                "promo": "#enter-promo-code",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_13 strong",
                "orderTotal": "#WC_SingleShipmentOrderTotalsSummary_td_2",
                "coupon": "[data-target='#promoDetails_1']"
            },
            "remove": {
                "type": "click",
                "submit": ".panel-body td a:last()",
                "timeout": 2000
            },
            "name": "Petco",
            "storeId": "6646"
        },
        {
            "url": ".petco.com/shop/OrderShippingBillingView",
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 2000
            },
            "controls": {
                "promo": "#enter-promo-code",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_10 strong",
                "orderTotal": "#WC_SingleShipmentOrderTotalsSummary_td_2",
                "coupon": "[data-target='#promoDetails_1']"
            },
            "remove": {
                "type": "click",
                "submit": ".panel-body td a:last()",
                "timeout": 2000
            },
            "name": "Petco",
            "storeId": "6646"
        },
        {
            "url": ".petco.com/shop/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#WC_SingleShipmentOrderTotalsSummary_td_2",
                "orderTotal": "#WC_SingleShipmentOrderTotalsSummary_td_10 strong"
            },
            "name": "Petco",
            "storeId": ""
        },
        {
            "url": ".pharmapacks.com/cart",
            "apply": {
                "type": "click",
                "submit": ".button.dark.cart-btns:visible",
                "timeout": 2500
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": "#CheckoutTotals strong:last",
                "orderTotal": "#CheckoutTotals strong:eq(1)",
                "coupon": "#CheckoutTotals a:contains('Remove')"
            },
            "remove": {
                "type": "click",
                "submit": "#CheckoutTotals a:contains('Remove')",
                "timeout": 2500
            },
            "name": "Pharmapacks",
            "storeId": "11265"
        },
        {
            "url": ".pharmapacks.com/checkout",
            "apply": {
                "type": "click",
                "submit": ".button.dark.cart-btns:visible",
                "timeout": 2500
            },
            "controls": {
                "promo": "#couponcode",
                "total": "#CheckoutTotals td:last",
                "orderTotal": "#CheckoutTotals td:eq(1)",
                "coupon": "#CheckoutTotals a:contains('Remove')"
            },
            "remove": {
                "type": "click",
                "submit": "#CheckoutTotals a:contains('Remove')",
                "timeout": 2500
            },
            "name": "Pharmapacks [Checkout Page]",
            "storeId": "11265"
        },
        {
            "url": "https://www.pier1.com/(.*)Checkout-Start",
            "apply": {
                "type": "click",
                "submit": ".submit-coupon.btn-inverted:eq(1)",
                "response": {
                    "discount": "product_items.coupons_items.discount.value"
                }
            },
            "controls": {
                "promo": ".coupon_code:eq(1)",
                "total": ".orderdetails-row.order-total .orderdetails-pricing",
                "orderTotal": ".orderdetails-row.clearfix .orderdetails-pricing",
                "coupon": ".coupon-message:eq(1)"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon-remove.icon.icon-close:eq(1)",
                "timeout": 1000
            },
            "name": "Pier 1",
            "storeId": "11802"
        },
        {
            "url": ".pipingrock.com/cart",
            "apply": {
                "type": "click",
                "submit": ".cpc-apply-btn",
                "timeout": 2500
            },
            "controls": {
                "promo": ".cpc-input-box",
                "total": ".cart-value-g_subtotal_after_discounts",
                "orderTotal": ".cart-value-g_subtotal_after_product_discounts",
                "coupon": ".cart-prev-offer-link a"
            },
            "remove": {
                "type": "click",
                "submit": ".cart-prev-offer-link a",
                "timeout": 2500
            },
            "name": "PipingRock",
            "storeId": "11924"
        },
        {
            "url": ".puma.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-subtotal .pull-right",
                "orderTotal": ".order-total .pull-right"
            },
            "name": "Puma",
            "storeId": "8722"
        },
        {
            "url": ".puritan.com/pages/addprod",
            "apply": {
                "type": "click",
                "submit": ".noborder.apply",
                "timeout": 2000
            },
            "controls": {
                "promo": ".form-input",
                "total": ".subtotal.bold-text span",
                "orderTotal": ".carttotal-container span:eq(0)",
                "coupon": ".carttotal-container.shadow .callout-red"
            },
            "name": "Puritan's Pride",
            "storeId": "8724"
        },
        {
            "url": ".puritan.com/.*/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"carttotal-container shadow\"] p:first span",
                "orderTotal": "p[class=\"subtotal bold-text\"] span"
            },
            "name": "Puritan's Pride",
            "storeId": "8724"
        },
        {
            "url": ".quill.com/Checkout/Checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#SubTotalLabel",
                "orderTotal": "#TotalLabel"
            },
            "name": "Quill",
            "storeId": "5646"
        },
        {
            "url": ".rei.com/CheckCart",
            "apply": {
                "type": "click",
                "submit": "[data-analytics-id='apply-coupon']",
                "timeout": 2000
            },
            "controls": {
                "promo": "#coupon-code",
                "total": "#summary-total",
                "orderTotal": "#summary-subtotal"
            },
            "remove": {
                "type": "click",
                "submit": "[data-ui='remove-applied-coupon']",
                "timeout": 2000
            },
            "name": "REI",
            "storeId": "2302"
        },
        {
            "url": ".raise.com/receipts/new",
            "apply": {
                "type": "click",
                "submit": ".span5 .btn",
                "timeout": 3500
            },
            "controls": {
                "promo": "#order_coupon_code",
                "total": ".summary .right"
            },
            "name": "Raise",
            "storeId": ""
        },
        {
            "url": ".ralphlauren.com/cart/shoppingcart",
            "apply": {
                "type": "click",
                "submit": "#promoApply",
                "timeout": 1500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".total .last .col-bordertop :eq(1)",
                "orderTotal": ".total .last .col-bordertop :eq(1)"
            },
            "name": "Ralph Lauren",
            "storeId": "9539"
        },
        {
            "url": ".ralphlauren.com/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "table[class=summary] > tbody > tr:first > td",
                "orderTotal": "tr[class=\"total last\"] > td[class=col-bordertop]"
            },
            "name": "Ralph Lauren",
            "storeId": "9539"
        },
        {
            "url": ".smokymountains.rentals-vacationhomes.com/GetMultiBooking1Screen",
            "apply": {
                "type": "click",
                "submit": ".apply-promo",
                "timeout": 3500
            },
            "controls": {
                "promo": ".promo-code",
                "total": ".total .sum"
            },
            "name": "Rentals VacationHomes",
            "storeId": ""
        },
        {
            "url": ".restaurant.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".subTotal .amount",
                "orderTotal": ".total .amount"
            },
            "name": "Restaurant.com",
            "storeId": "9755"
        },
        {
            "url": "shop.riteaid.com/checkout/onepage/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".first .price:last",
                "orderTotal": ".last .price:last"
            },
            "name": "Rite Aid",
            "storeId": "12384"
        },
        {
            "url": "cart.rosewholesale.com/m-flow-a-cart.htm",
            "apply": {
                "type": "click",
                "submit": "#applybtn",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".grandTotal .my_shop_price",
                "orderTotal": ".colorpink .my_shop_price",
                "coupon": ".a-clear-coupon"
            },
            "name": "Rose Wholesale",
            "storeId": "14318"
        },
        {
            "url": ".rosewholesale.com/m-flow-a-checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#items_sub_total",
                "orderTotal": "#price_total"
            },
            "name": "Rose Wholesale",
            "storeId": "14318"
        },
        {
            "url": ".rue21.com/store/checkout/",
            "apply": {
                "type": "click",
                "submit": "#promo-code-submit",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promo-code-text-input",
                "total": ".cart-total div:last",
                "orderTotal": ".grand-total div:last",
                "coupon": ".removeCouponFromCart"
            },
            "remove": {
                "type": "click",
                "submit": ".removeCouponFromCart",
                "timeout": 2500
            },
            "name": "Rue21",
            "storeId": "12530"
        },
        {
            "url": ".stage.com/store/checkout/shippingAddress",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".cart-itms-shpng .fltrght b",
                "orderTotal": ".cart-itms-shpng .fltrght b"
            },
            "name": "STAGE",
            "storeId": "11996"
        },
        {
            "url": ".stagestores.com/store/checkout/payment",
            "apply": {
                "type": "click",
                "submit": "#promoButton",
                "timeout": 2500
            },
            "controls": {
                "promo": "#applyPromo",
                "total": ".fltrght b",
                "orderTotal": ".fltrght b",
                "coupon": "#remove_cpn_btn:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#remove_cpn_btn:visible",
                "timeout": 2500
            },
            "name": "STAGE STORES [Checkout page]",
            "storeId": "11996"
        },
        {
            "url": ".stagestores.com/store/cart/shoppingCart",
            "apply": {
                "type": "click",
                "submit": "#claimCoupon",
                "timeout": 2000
            },
            "controls": {
                "promo": ".catc2InputHighlight",
                "total": ".fltrght b",
                "orderTotal": ".fltrght b",
                "coupon": ".remove-deleteBtn"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-deleteBtn",
                "timeout": 2000
            },
            "name": "STAGEstores [Cart page]",
            "storeId": "11996"
        },
        {
            "url": ".saksfifthavenue.com/checkout/SaksBag",
            "apply": {
                "type": "js",
                "js": "$('#promoApply').click(); setTimeout(function(){ $('.ui-button.ui-dialog-titlebar-close').click() }, 1000);",
                "timeout": 1500
            },
            "controls": {
                "promo": "#promoCodeEntry",
                "total": "#jsVal-grandTotal",
                "orderTotal": "#jsVal-itemsTotal"
            },
            "remove": {
                "type": "click",
                "submit": ".action-link.jsRemovePromo",
                "timeout": 1500
            },
            "name": "Saks",
            "storeId": "9154"
        },
        {
            "url": ".saksoff5th.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".paddingTop:eq(1)",
                "orderTotal": ".order-subtotal td:eq(1)",
                "coupon": ".promo-code-text"
            },
            "remove": {
                "type": "click",
                "submit": "[name='dwfrm_cart_coupons_i0_deleteCoupon']",
                "timeout": 2000
            },
            "name": "Saksoff5th",
            "storeId": "12205"
        },
        {
            "url": ".saksoff5th.com/checkout/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#jsVal-itemsTotal",
                "orderTotal": "#jsVal-grandTotal"
            },
            "name": "Saksoff5th",
            "storeId": "12205"
        },
        {
            "url": ".sallybeauty.com/(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".order-subtotal .rightalign",
                "orderTotal": ".order-total .rightalign",
                "coupon": ".item-price [value='Remove']"
            },
            "remove": {
                "type": "click",
                "submit": ".item-price [value='Remove']",
                "timeout": 2500
            },
            "name": "Sally Beauty",
            "storeId": "10158"
        },
        {
            "url": ".samsclub.com/sams/checkout/payment/payment",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".shippingTitle .price",
                "orderTotal": ".shipgrouptotal .price"
            },
            "name": "Sam'sClub",
            "storeId": ""
        },
        {
            "url": "cart.sammydress.com/m-flow-a-cart",
            "apply": {
                "type": "click",
                "submit": ".applyBtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".row3 .my_shop_price",
                "orderTotal": ".row2 .my_shop_price",
                "coupon": ".cancel_coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".cancel_coupon",
                "timeout": 2500
            },
            "name": "SammyDress",
            "storeId": "14144"
        },
        {
            "url": "shop.samsonite.com/cart",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "[data-catc='coupon_input']",
                "total": ".order-subtotal td:last",
                "orderTotal": ".order-subtotal td:last",
                "coupon": ".textbutton"
            },
            "remove": {
                "type": "click",
                "submit": ".textbutton",
                "timeout": 2500
            },
            "name": "Samsonite [Cart Page]",
            "storeId": "5326"
        },
        {
            "url": ".samsung.com/store/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#dr-shipping-row div[class=\"col-xs-4 text-right\"]:first",
                "orderTotal": "#dr-sub-total-price"
            },
            "name": "Samsung",
            "storeId": "12109"
        },
        {
            "url": ".scorebig.com/Checkout2",
            "apply": {
                "type": "js",
                "js": "$('#add-promo').click(); $('.apply').click();",
                "timeout": 2000
            },
            "controls": {
                "promo": "#StepPaymentInformation:visible #AdjustorRequest_PromoCode",
                "total": ".text-custom-line-bigger .text-right span:last",
                "orderTotal": ".text-custom-line-bigger .text-right span:last",
                "coupon": ".adjustor.remove:visible"
            },
            "remove": {
                "type": "click",
                "submit": ".adjustor.remove:visible",
                "timeout": 2000
            },
            "name": "ScoreBig",
            "storeId": "11351"
        },
        {
            "url": ".scrubsandbeyond.com/Cart",
            "apply": {
                "type": "click",
                "submit": "#_ctl13_btAddCode",
                "timeout": 2500
            },
            "controls": {
                "promo": "#_ctl13_txtAddCode",
                "total": "#_ctl13_lblGrandTotal",
                "orderTotal": "#_ctl13_lblSubtotal",
                "coupon": "#_ctl13_btRemoveCode:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#_ctl13_btRemoveCode",
                "timeout": 2500
            },
            "name": "Scrubs & Beyond",
            "storeId": "12789"
        },
        {
            "url": ".sears.com/crsp/mx/checkout",
            "apply": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('shc-btn cc-add')).triggerHandler('click');",
                "timeout": 5000
            },
            "controls": {
                "promo": "#focusPromoInput",
                "total": ".est-total .ng-binding:eq(0)",
                "orderTotal": ".est-total-bottom.ng-binding"
            },
            "remove": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click'); angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click');",
                "timeout": 3000
            },
            "name": "Sears.com",
            "storeId": "8309"
        },
        {
            "url": ".sears.com/crsp/mx/cart",
            "apply": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('shc-btn cc-add')).triggerHandler('click');",
                "timeout": 3000
            },
            "controls": {
                "promo": "#focusPromoInput",
                "total": ".order-sum-line .ng-binding:last",
                "orderTotal": ".order-sum-line .ng-binding:first"
            },
            "remove": {
                "type": "js",
                "js": "angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click'); angular.element(document.getElementsByClassName('remove-coupon')).triggerHandler('click');",
                "timeout": 3000
            },
            "name": "Sears.com",
            "storeId": "8309"
        },
        {
            "url": "seatgeek.com/checkout?",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".value:first",
                "orderTotal": ".value:last"
            },
            "name": "SeatGeek",
            "storeId": "14485"
        },
        {
            "url": ".sephora.com/basket/basket.jsp",
            "apply": {
                "type": "post",
                "url": "https://www.sephora.com/rest/user/cart/promo",
                "data": {
                    "promo_code": "%promo"
                },
                "submit": "[ng-click='onPromoApply($event)']",
                "response": {
                    "type": "json",
                    "discount": "discount_amount",
                    "total": "subtotal"
                }
            },
            "controls": {
                "promo": "[ng-model='promo_code']",
                "total": ".Receipt-price.ng-binding:eq(0)",
                "orderTotal": ".Receipt-price.u-h2 span",
                "coupon": "[ng-show='promo.promo_message']:visible"
            },
            "remove": {
                "type": "click",
                "submit": "[ng-click='removePromo()']",
                "timeout": 1500
            },
            "name": "Sephora",
            "storeId": "4548"
        },
        {
            "url": ".shein.com/index.php",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#sub_total span[class=item_total]:first",
                "orderTotal": "#total_price h2[class=\"promo-price item_total goods_price_USD_44595\"]"
            },
            "name": "Shein",
            "storeId": ""
        },
        {
            "url": ".shindigz.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#do-apply-promo",
                "timeout": 2000
            },
            "controls": {
                "promo": "#inp-promo",
                "total": ".totalamount",
                "orderTotal": ".subtotalamount",
                "coupon": ".ordersummarytotals .discountamount"
            },
            "remove": {
                "type": "click",
                "submit": "#do-remove-promo",
                "timeout": 2000
            },
            "name": "Shindigz",
            "storeId": "2606"
        },
        {
            "url": ".shoemetro.com/shoppingcart",
            "apply": {
                "type": "click",
                "submit": "#ctl00_PageContent_btnUpdateCart3",
                "timeout": 2000
            },
            "controls": {
                "promo": "#ctl00_PageContent_CouponCode",
                "total": "#ctl00_PageContent_ctrlCartSummary_lblTotal",
                "orderTotal": "#ctl00_PageContent_ctrlCartSummary_lblSubTotal",
                "coupon": "#ctl00_PageContent_ctrlCartSummary_lblDiscountCaption:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#ctl00_PageContent_btnRemoveCoupon:visible",
                "timeout": 2000
            },
            "name": "Shoe Metro",
            "storeId": "10937"
        },
        {
            "url": [
                ".shoebuy.com/cart/cart",
                ".shoebuy.com/cart/checkout"
            ],
            "apply": {
                "type": "click",
                "submit": ".crt-submit-promo",
                "timeout": 2000
            },
            "controls": {
                "promo": "#crt-promoCode",
                "total": ".crt-summary-val:eq(0)",
                "orderTotal": ".crt-summary-total-price",
                "coupon": ".crt-summary-val.crt-summary-val--dis"
            },
            "remove": {
                "type": "click",
                "submit": ".crt-remove-promo",
                "timeout": 2000
            },
            "name": "Shoebuy",
            "storeId": "1823"
        },
        {
            "url": ".shopjustice.com/.*/checkout/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "label[class=\"mar-price  asc-cart-value\"] .asc-shipping-display",
                "orderTotal": "label[class=\"mar-price asc-cart-value\"] .asc-total-value"
            },
            "name": "Shop Justice",
            "storeId": "9571"
        },
        {
            "url": ".shopbop.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#productEstimatedTotal .togglable .toggleOff",
                "orderTotal": "#totalCalculatedAmount .togglable .toggleOff"
            },
            "name": "Shopbop",
            "storeId": "9457"
        },
        {
            "url": ".sierratradingpost.com/cart/",
            "apply": {
                "type": "click",
                "submit": "#applyKeycode",
                "timeout": 5000
            },
            "controls": {
                "promo": "#keycodeInput",
                "total": "#orderTotal",
                "orderTotal": "#orderSubtotal"
            },
            "name": "Sierra Trading Post",
            "storeId": "8001"
        },
        {
            "url": ".sierratradingpost.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=panel-body] div:first span:last",
                "orderTotal": "#orderTotalFormatted"
            },
            "name": "Sierra Trading Post",
            "storeId": "8001"
        },
        {
            "url": ".sigmabeauty.com/cart",
            "apply": {
                "type": "click",
                "submit": ".mz-btncoupon",
                "tiemout": 4000
            },
            "controls": {
                "promo": "#coupontxt",
                "total": ".mz-carttable-total:last label",
                "orderTotal": ".mz-carttable-total:last label",
                "coupon": ".delete-couponcode"
            },
            "remove": {
                "type": "click",
                "submit": ".delete-couponcode",
                "tiemout": 4000
            },
            "name": "Sigma",
            "storeId": "14064"
        },
        {
            "url": ".skinstore.com/skstr/my.basket",
            "apply": {
                "type": "js",
                "js": "ApplyCouponCode_OnClientClick(); __doPostBack('ApplyCouponCode','')",
                "timeout": 2500
            },
            "controls": {
                "promo": "#CouponCode",
                "total": "#cartFinalTotalAmount",
                "orderTotal": "#cartSubtotal strong",
                "coupon": "#DiscountTotalLabel .redCallout"
            },
            "name": "Skin Store",
            "storeId": "6986"
        },
        {
            "url": ".skinstore.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#summary-items-price",
                "orderTotal": "#summary-order-total-price"
            },
            "name": "Skin Store",
            "storeId": "6986"
        },
        {
            "url": ".snapfish.com/cart/shoppingcart",
            "apply": {
                "type": "click",
                "submit": "#apply_coupon_btn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon_id",
                "total": "#total_to_pay_now",
                "orderTotal": "#total_cart_items_price",
                "coupon": "#coupon_name"
            },
            "remove": {
                "type": "click",
                "submit": "#remove_coupon_link a",
                "timeout": 2000
            },
            "name": "Snapfish",
            "storeId": "9294"
        },
        {
            "url": ".snapfish.com/cart/billing",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#total_cart_items_price",
                "orderTotal": "td[class=\"sub-heading1 text-no-wraping\"]"
            },
            "name": "Snapfish",
            "storeId": "9294"
        },
        {
            "url": ".soma.com/store/checkout/cart",
            "apply": {
                "type": "click",
                "form": "#sb-promos .asyncForm",
                "submit": ".apply",
                "timeout": 2000,
                "response": {
                    "type": "json",
                    "discount": "items//promoDiscounts//discountAmount",
                    "total": "items//itemsTotal"
                }
            },
            "controls": {
                "promo": "#claimCodeField",
                "total": "#sb-sum-total .sb-price",
                "orderTotal": "#sb-sum-subtotal .sb-price",
                "coupon": ".sbPromoRemove"
            },
            "remove": {
                "type": "click",
                "submit": ".sbPromoRemove",
                "timeout": 2000
            },
            "name": "Soma [Cart Page]",
            "storeId": "9901"
        },
        {
            "url": ".soma.com/store/checkout/checkout",
            "apply": {
                "type": "click",
                "form": "#sb-promos .asyncForm",
                "submit": ".apply",
                "timeout": 2000,
                "response": {
                    "type": "json",
                    "discount": "items//promoDiscounts//discountAmount",
                    "total": "items//itemsTotal"
                }
            },
            "controls": {
                "promo": "#claimCodeField",
                "total": "#pc-subtotal .pc-value",
                "orderTotal": "#pc-grandtotal .pc-value",
                "coupon": ".sbPromoRemove"
            },
            "remove": {
                "type": "click",
                "submit": ".sbPromoRemove",
                "timeout": 2000
            },
            "name": "Soma [Checkout Page]",
            "storeId": "9901"
        },
        {
            "url": ".sprint.com/(.*)/cart/cart",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".today .box .price",
                "orderTotal": ".today .box .price"
            },
            "name": "Sprint",
            "storeId": "4708"
        },
        {
            "url": ".staples.com/office/supplies/yourorder",
            "apply": {
                "type": "click",
                "submit": ".stp--btn.stp--btn-gray.stp--btn-micro.scTrack.scLink",
                "timeout": 4500
            },
            "controls": {
                "promo": "#couponCode",
                "total": ".orderSummary-Info td:eq(1)",
                "orderTotal": ".orderSummary-Info tfoot th:eq(1)"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon a span:eq(1)",
                "timeout": 1500
            },
            "name": "Staples.com",
            "storeId": "4986"
        },
        {
            "url": ".staples.com/office/supplies/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "tbody tr:eq(2) td:last",
                "orderTotal": ".remain-bal td:last"
            },
            "name": "Staples.com",
            "storeId": ""
        },
        {
            "url": ".starbucks.com(.*)/Cart-Show",
            "apply": {
                "type": "click",
                "submit": "#addCouponCode",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCodeValue",
                "total": ".val-lable.ordertot .value",
                "orderTotal": ".val-lable.subtotal .value2"
            },
            "name": "Starbucks",
            "storeId": "9102"
        },
        {
            "url": ".stevemadden.com/checkout",
            "apply": {
                "type": "js",
                "js": "ApplyPromotionCode();",
                "timeout": 5000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#estimated-grand-total",
                "orderTotal": ".order-summary dd:first",
                "coupon": ".enteredPromoCode a"
            },
            "remove": {
                "type": "click",
                "sumbit": ".enteredPromoCode a",
                "timeout": 5000
            },
            "name": "Steve Madden ",
            "storeId": "8441"
        },
        {
            "url": [
                ".striderite.com/(.*)/cart",
                ".striderite.com/(.*)/billing"
            ],
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": ".check-couponCode",
                "total": ".order-total td:last",
                "orderTotal": ".order-subtotal td:last",
                "coupon": ".rowcoupons .remove-item"
            },
            "remove": {
                "type": "click",
                "submit": ".rowcoupons .remove-item",
                "timeout": 2500
            },
            "name": "Stride Rite",
            "storeId": "11281"
        },
        {
            "url": [
                ".sunglasshut.com(.*)/AjaxOrderItemDisplayView",
                ".sunglasshut.com(.*)/Checkout",
                ".sunglasshut.com(.*)/PromotionCodeManage"
            ],
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".total:last",
                "orderTotal": "#UtagOrderSubTotalField",
                "coupon": ".remove-promotion"
            },
            "conditions": {
                "required": [
                    "[name='firstName']",
                    "[name='lastName']",
                    "[name='address1']",
                    "[name='zipCode']",
                    "[name='email1confirm']"
                ]
            },
            "remove": {
                "type": "click",
                "submit": ".remove-promotion",
                "timeout": 2500
            },
            "name": "Sunglass Hut",
            "storeId": "6206"
        },
        {
            "url": ".surlatable.com/checkout/opc/singleShippingGroup",
            "apply": {
                "type": "click",
                "submit": ".button.reverse.right",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCode",
                "total": ".cartbox:last span",
                "orderTotal": ".itemprice2",
                "coupon": ".cardNumber"
            },
            "remove": {
                "type": "click",
                "submit": ".giftcarddisp a span",
                "timeout": 2000
            },
            "name": "Sur La Table",
            "storeId": "6626"
        },
        {
            "url": ".surlatable.com/cart/shoppingCart",
            "apply": {
                "type": "click",
                "submit": "#promotion_DIV .button.reverse span",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponCode",
                "total": ".estimatedTotal:last",
                "orderTotal": ".box dd:first",
                "coupon": ".displayCouponCode"
            },
            "remove": {
                "type": "click",
                "submit": "[onclick='removePromoCoupon();']",
                "timeout": 2000
            },
            "name": "Sur La Table [Cart Page]",
            "storeId": "6626"
        },
        {
            "url": ".swimsuitsforall.com/checkout/",
            "apply": {
                "type": "js",
                "js": "document.getElementById('applyCoupon').submit();",
                "timeout": 2000
            },
            "controls": {
                "promo": "[name='couponCode']",
                "total": ".orderSummary p:first",
                "orderTotal": "#order-summary-total p:last",
                "coupon": "a:contains('remove')"
            },
            "remove": {
                "type": "click",
                "submit": "a:contains('remove')",
                "timeout": 2000
            },
            "name": "SwimSuitsForAll",
            "storeId": "9722"
        },
        {
            "url": ".t-mobile.com/shop/cart/default",
            "apply": {
                "type": "js",
                "js": "__doPostBack('btnApplyCoupon','');",
                "timeout": 2500
            },
            "controls": {
                "promo": "#txtPromoCode",
                "total": "#divDueTodayPrice .price:first",
                "orderTotal": "#divDueTodayPrice .price:first",
                "coupon": ".promotype a:last"
            },
            "remove": {
                "type": "js",
                "js": "__doPostBack('rptCoupon$ctl00$lnkRemoveCoupon','');",
                "timeout": 2500
            },
            "name": "T-Mobile",
            "storeId": "8083"
        },
        {
            "url": ".toms.com/checkout/ship/ship",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#order_subtotal",
                "orderTotal": ".ln-amt.tot"
            },
            "name": "TOMS",
            "storeId": "10105"
        },
        {
            "url": ".talbots.com/online/checkout/checkoutShoppingBag",
            "apply": {
                "type": "click",
                "submit": "#offerCodeSubmitBtn",
                "timeout": 5000
            },
            "controls": {
                "promo": "#promoCode1",
                "total": "#estimatedTotal",
                "orderTotal": ".calciTxtRightAlign .totalTextPrice:eq(0)",
                "coupon": ".promoRemoveLink"
            },
            "remove": {
                "type": "js",
                "js": "$('.promoRemoveLink').click();$('.promoRemoveLink').click();$('.promoRemoveLink').click();",
                "timeout": 3000
            },
            "name": "Talbots",
            "storeId": "12514"
        },
        {
            "url": ".talbots.com/online/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".summaryLists .summaryPrice:first",
                "orderTotal": ".summaryLists .summaryPrice:last"
            },
            "name": "Talbots",
            "storeId": "12514"
        },
        {
            "url": "www-secure.target.com/co-payment",
            "apply": {
                "type": "click",
                "response": {
                    "type": "discount",
                    "discount": ".ftDiscounts .summaryCol2-red"
                },
                "submit": "#fromButton.prom-button",
                "timeout": 5000
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".order--summary-title:last .h-float-rightt",
                "orderTotal": "#subtotal .h-float-right:last",
                "coupon": "#defaultOfferDetailsLink"
            },
            "name": "Target",
            "storeId": "5246"
        },
        {
            "url": "www-secure.target.com/co-cart",
            "apply": {
                "type": "js",
                "js": "$('#enterPromoButton').click();$('#applyPromoButton').click()",
                "timeout": 2500
            },
            "controls": {
                "promo": "#TMPromoCode",
                "total": ".order--summary-title span:last",
                "orderTotal": "#subtotal span:last"
            },
            "name": "Target",
            "storeId": "5246"
        },
        {
            "url": ".tartecosmetics.com/my-shopping-cart",
            "apply": {
                "type": "js",
                "js": "$('.small2:contains(\"Apply Code\")').click();setTimeout(function(){$('.ui-button-text:first').click();},300);",
                "timeout": 2000
            },
            "controls": {
                "promo": ".edgeForm[name=\"promo\"]",
                "total": ".cartSubtotal",
                "orderTotal": ".cartTotal:last",
                "coupon": ".cartTotalPromoRight:visible"
            },
            "name": "TarteCosmetics",
            "storeId": "10978"
        },
        {
            "url": ".teavana.com/us/en/cart",
            "apply": {
                "type": "click",
                "submit": "#addCouponCode",
                "timeout": 2500
            },
            "controls": {
                "promo": "#couponCodeValue",
                "total": ".ordertot .value",
                "orderTotal": ".subtotal span:last",
                "coupon": ".removecoupon"
            },
            "remove": {
                "type": "js",
                "js": "$('.removecoupon').click();setTimeout(function(){$('.ui-state-default:last').click();}, 100);",
                "timeout": 2500
            },
            "name": "Teavana",
            "storeId": "10338"
        },
        {
            "url": ".thebodyshop-usa.com/checkout/delivery",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".tot",
                "orderTotal": ".tot"
            },
            "name": "The Body Shop USA",
            "storeId": "8845"
        },
        {
            "url": ".thebouqs.com/(.*)/quick-order",
            "apply": {
                "type": "click",
                "submit": ".btn-primary.btn-small",
                "timeout": 2500
            },
            "controls": {
                "promo": "#voucher-code",
                "total": ".review-amount.net-total",
                "orderTotal": ".review-amount:first",
                "coupon": "[onclick^=\"discountRemove\"]"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-icon",
                "timeout": 2500
            },
            "name": "The Bouqs",
            "storeId": "13371"
        },
        {
            "url": ".thelimited.com/cart",
            "apply": {
                "type": "click",
                "submit": ".coupon-code-container .grey-btn",
                "timeout": 2500
            },
            "controls": {
                "promo": "[name='dwfrm_cart_couponCode']",
                "total": ".ordersubtotal .value",
                "orderTotal": ".ordertotal .value",
                "coupon": ".remove-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-coupon",
                "timeout": 2500
            },
            "name": "The Limited",
            "storeId": "10209"
        },
        {
            "url": ".theoutnet.com/.*/purchasepath",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#itemTotal",
                "orderTotal": "#finalTotal"
            },
            "name": "The Outnet",
            "storeId": "13293"
        },
        {
            "url": ".containerstore.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".order-totals-table tbody tr:nth-child(2) .value",
                "orderTotal": ".order-totals-table tbody tr:nth-child(5) .value"
            },
            "name": "TheContainerStore",
            "storeId": "5586"
        },
        {
            "url": ".thingsremembered.com/checkout/",
            "apply": {
                "type": "click",
                "submit": ".apply-promotion-code-button",
                "timeout": 5500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".order-summary dd:last",
                "orderTotal": ".order-summary dd:first",
                "coupon": ".order-summary dd.discount"
            },
            "name": "Things Remembered",
            "storeId": "2684"
        },
        {
            "url": ".thinkgeek.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".ajax_sub_total",
                "orderTotal": ".ajax_total:first"
            },
            "name": "ThinkGeek",
            "storeId": "9339"
        },
        {
            "url": "thrivemarket.com/onestepcheckout/index/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[id=aw-onestepcheckout-order-review-cart-wrapper] > div[class=cart-sidebar-box]:first > div[class=cart-sidebar-row]:first > div[class=row-description] > span[class=price]",
                "orderTotal": "div[id=aw-onestepcheckout-order-review-cart-wrapper] > div[class=cart-sidebar-box]:last > div[class=cart-sidebar-row]:first > div[class=row-description] > span[id=total-price] > span[class=price]"
            },
            "name": "Thrive Market",
            "storeId": "14420"
        },
        {
            "url": ".tillys.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".orderPrice",
                "orderTotal": ".panel-body table tbody tr:last td:last"
            },
            "name": "TiLLYS",
            "storeId": "9484"
        },
        {
            "url": ".tobi.com/checkout",
            "apply": {
                "type": "click",
                "submit": "[value='Apply']:last",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".text-right.totals-retail",
                "orderTotal": "#total",
                "coupon": ".small.show-link a"
            },
            "remove": {
                "type": "click",
                "submit": ".small.show-link a",
                "timeout": 2500
            },
            "name": "Tobi",
            "storeId": "9727"
        },
        {
            "url": [
                ".tommy.com/webapp/wcs/stores/servlet/OrderShippingBillingView",
                ".tommy.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView?"
            ],
            "apply": {
                "type": "click",
                "submit": "#WC_PromotionCodeDisplay_links_1",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".cart-total td:last",
                "orderTotal": "#order_total tr:first td:last",
                "coupon": ".currentPromoCode"
            },
            "remove": {
                "type": "click",
                "submit": "#promotion_1",
                "timeout": 2500
            },
            "name": "Tommy Hilfiger",
            "storeId": "8920"
        },
        {
            "url": ".torrid.com/(?:checkout|cart)",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_billing_couponCode",
                "total": ".order-subtotal td:last",
                "orderTotal": ".orderTotal",
                "coupon": ".remove-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-coupon",
                "timeout": 2000
            },
            "name": "Torrid",
            "storeId": "9329"
        },
        {
            "url": ".torrid.com/cart",
            "apply": {
                "type": "click",
                "submit": ".submit_coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#dwfrm_cart_couponCode",
                "total": ".orderTotal",
                "orderTotal": ".order-subtotal td:last",
                "coupon": ".coupon-applied"
            },
            "remove": {
                "type": "click",
                "submit": ".coupon-applied .remove",
                "timeout": 2000
            },
            "name": "Torrid",
            "storeId": "9329"
        },
        {
            "url": ".toysrus.com/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "td.subTotal",
                "orderTotal": ".total td"
            },
            "name": "Toysrus",
            "storeId": "9386"
        },
        {
            "url": ".tracfone-orders.com(.*)/ViewCart",
            "apply": {
                "type": "click",
                "submit": "#promoBtn",
                "timeout": 2000
            },
            "controls": {
                "promo": ".floatLeft .catc2InputHighlight",
                "total": ".cartTotalText:last",
                "orderTotal": ".cartRow.cartTotalText:eq(0)",
                "coupon": "[colspan='4']:eq(1)"
            },
            "name": "Tracfone",
            "storeId": "8731"
        },
        {
            "url": ".travelocity.com/HotelCheckout",
            "apply": {
                "type": "click",
                "submit": ".apply-coupon-reminder.show-reminder .btn-secondary.btn-sub-action",
                "timeout": 2000
            },
            "controls": {
                "promo": "[name='couponCode']",
                "total": "[data-price-update='total']",
                "orderTotal": "[data-price-update='total']"
            },
            "name": "Travelocity",
            "storeId": "4528"
        },
        {
            "url": ".travelocity.com/Payments-Flight",
            "apply": {
                "type": "click",
                "submit": "#apply_coupon",
                "timeout": 2000
            },
            "controls": {
                "promo": "#coupon_code_text",
                "total": "#amtTotal",
                "orderTotal": "#val_amtFlightHotel"
            },
            "name": "Travelocity",
            "storeId": "4528"
        },
        {
            "url": ".uscellular.com/uscellular/order/ncsOrderRecap",
            "apply": {
                "type": "click",
                "submit": "#add-coupon",
                "timeout": 2500
            },
            "controls": {
                "promo": "#coupon-code",
                "total": ".price.price-medium:last",
                "orderTotal": ".price.price-medium:last",
                "coupon": ".remove-coupon-icon"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-coupon-icon",
                "timeout": 2500
            },
            "name": "U.S. Cellular",
            "storeId": "13792"
        },
        {
            "url": ".ulta.com/ulta/checkout/",
            "apply": {
                "type": "submit",
                "form": "#cartform",
                "submit": "#chekoutCoupBtn",
                "data": {
                    "_D:/atg/commerce/order/purchase/CartModifierFormHandler.update": "",
                    "/atg/commerce/order/purchase/CartModifierFormHandler.couponCode": "%promo",
                    "_D:/atg/commerce/order/purchase/CartModifierFormHandler.couponCode": "",
                    "/atg/commerce/order/purchase/CartModifierFormHandler.update": "APPLY COUPON"
                }
            },
            "controls": {
                "promo": "#couponField",
                "total": ".shipping.value",
                "orderTotal": ".totaldetails:first .value:first"
            },
            "name": "Ulta",
            "storeId": "4207"
        },
        {
            "url": ".ulta.com/ulta/cart/cart",
            "apply": {
                "type": "submit",
                "form": "#cartform",
                "submit": "#couponadd",
                "data": {
                    "_D:/atg/commerce/order/purchase/CartModifierFormHandler.update": "",
                    "/atg/commerce/order/purchase/CartModifierFormHandler.couponCode": "%promo",
                    "_D:/atg/commerce/order/purchase/CartModifierFormHandler.couponCode": "",
                    "/atg/commerce/order/purchase/CartModifierFormHandler.update": "APPLY COUPON"
                }
            },
            "controls": {
                "promo": "#couponField",
                "total": ".totaldetails:last .value:first",
                "orderTotal": ".totaldetails:first .value:first"
            },
            "name": "Ulta",
            "storeId": "4207"
        },
        {
            "url": ".vrbo.com/.*/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "span[data-at-id=total-amount]",
                "orderTotal": "td[class=\"due-now-cell nowrap\"] > b:last"
            },
            "name": "VRBO",
            "storeId": "10567"
        },
        {
            "url": ".vans.com/(.*)/servlet/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "dd[class=\"checkout-subtotal checkout-subtotal-js\"]",
                "orderTotal": "#amount-after-giftcards-apply-summary"
            },
            "name": "Vans",
            "storeId": "4693"
        },
        {
            "url": ".verabradley.com/.*/checkout.cmd",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=formsectionWrapper] .cost:first",
                "orderTotal": "div[class=formsectionWrapper] div[class=\"cost total\"]:last"
            },
            "name": "Vera Bradley",
            "storeId": "9871"
        },
        {
            "url": "verizonwireless.com/.*/cart/cart",
            "apply": {
                "type": "click",
                "submit": "[data-tracking='Apply Promo Code']",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promo-code-1-input",
                "total": ".priceDetails_total:eq(0) td:eq(1)",
                "orderTotal": "#orderTotal",
                "coupon": ".itemCode:visible"
            },
            "remove": {
                "type": "click",
                "submit": "[data-tracking='Remove Promo Code']",
                "timeout": 2000
            },
            "name": "VerizonWireless",
            "storeId": "10794"
        },
        {
            "url": ".verizonwireless.com/.*/checkout/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "",
                "orderTotal": ""
            },
            "name": "VerizonWireless",
            "storeId": "10794"
        },
        {
            "url": ".victoriassecret.com/.*/checkout",
            "apply": {
                "type": "submit",
                "form": "[action=\"/commerce2/continue/offers\"]",
                "submit": "#apply",
                "response": {
                    "type": "json",
                    "discount": "orderModel//orderTotal//specialOffer",
                    "total": "orderModel//orderTotal//ordrTotal"
                }
            },
            "controls": {
                "promo": ".js-offersInput input",
                "total": ".totalSection dd:visible",
                "orderTotal": ".total-price",
                "coupons": ".successfully-added-offer.confirm:first"
            },
            "remove": {
                "type": "get",
                "url": "https://www.victoriassecret.com/commerce2/offers/remove?offerCode=%promo:12345"
            },
            "name": "VictoriaSecret",
            "storeId": "9800"
        },
        {
            "url": ".virginamerica.com/purchase",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"fare-details-list__amount ng-binding\"]:first",
                "orderTotal": "div[class=\"fare-details-list__amount ng-binding\"]:last"
            },
            "name": "Virgin America",
            "storeId": ""
        },
        {
            "url": ".visiondirect.com/(.*)/order/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".basket_subtotal_block tbody tr:first th:last",
                "orderTotal": ".basket_subtotal_block tbody tr:first th:last"
            },
            "name": "VisionDirect",
            "storeId": "8125"
        },
        {
            "url": "(?:secure|www)\\.vistaprint\\.com\\/cart",
            "apply": {
                "type": "click",
                "submit": "#applyCoupon",
                "timeout": 3500
            },
            "controls": {
                "promo": "#CouponEntry",
                "total": ".sub-total .price",
                "orderTotal": ".pay .discount-price",
                "coupon": ".discount-display.coupon"
            },
            "name": "Vistaprint",
            "storeId": "7971"
        },
        {
            "url": ".vitacost.com/Checkout/ShoppingCart",
            "apply": {
                "type": "submit",
                "form": "#Form1",
                "submit": "#IamMasterFrameYesIam_ctl03_btnPromoUpdate",
                "timeout": 5000,
                "data": {
                    "IamMasterFrameYesIam$ctl03$txtPromotion": "%promo"
                }
            },
            "controls": {
                "promo": "#IamMasterFrameYesIam_ctl03_txtPromotion",
                "total": "#orderSummary td:first"
            },
            "name": "Vitacost",
            "storeId": "3509"
        },
        {
            "url": ".vitacost.com/checkout.aspx",
            "apply": {
                "type": "submit",
                "form": "#spcFrm",
                "submit": "#spcFrmPrmCdeSelectApply",
                "timeout": 5000
            },
            "controls": {
                "promo": "#spcFrmPrmCde",
                "total": ".spcSFld:first"
            },
            "name": "Vitacost",
            "storeId": "3509"
        },
        {
            "url": ".vitaminshoppe.com/cart/shopping-cart",
            "apply": {
                "type": "click",
                "submit": ".code-input .button-dark-blue.corisande-regular.size18",
                "timeout": 2000
            },
            "controls": {
                "promo": "#promocd",
                "total": ".estimate-total span:last",
                "orderTotal": "table .text-right:first",
                "coupon": ".amount-details"
            },
            "remove": {
                "type": "click",
                "submit": ".remove-promo-code",
                "timeout": 2000
            },
            "name": "Vitamin Shoppe",
            "storeId": "3892"
        },
        {
            "url": ".walgreens.com/store/checkout/cart",
            "apply": {
                "type": "click",
                "submit": "#apply_code",
                "timeout": 3500
            },
            "controls": {
                "promo": "#enter_code",
                "total": ".wag-cac-costsumprice .ng-scope .ng-binding"
            },
            "remove": {
                "type": "click",
                "submit": ".wag-cac-removetxt a",
                "timeout": 2000
            },
            "name": "Walgreens",
            "storeId": "10141"
        },
        {
            "url": "photo(\\d)?.walgreens.com/walgreens/shoppingcart",
            "apply": {
                "type": "click",
                "submit": "#applyCouponButton",
                "timeout": 2000
            },
            "controls": {
                "promo": "#couponcode_B_1, #couponcode_B_2",
                "total": ".osmTotal:eq(1)",
                "coupon": ".osmCoupon"
            },
            "remove": {
                "type": "click",
                "submit": ".osmCoupon a",
                "timeout": 2000
            },
            "name": "Walgreens photo",
            "storeId": "10141"
        },
        {
            "url": ".walmart.com/checkout/#checkout/",
            "apply": {
                "type": "post",
                "url": "1",
                "data": "1"
            },
            "controls": {
                "promo": "1",
                "total": ".pos-grand-total-price:visible",
                "orderTotal": ".pos-totals-row-price:eq(0)"
            },
            "name": "Walmart",
            "storeId": "2946"
        },
        {
            "url": ".whitehouseblackmarket.com/store/checkout/",
            "apply": {
                "type": "js",
                "js": "_ctoTagging.asyncAction.couponFormSubmit();",
                "timeout": 2500
            },
            "controls": {
                "promo": "#claimCodeField",
                "total": "#pc-totals .pc-value:eq(0)",
                "orderTotal": "#pc-grandtotal-wrapper .pc-value",
                "coupon": ".sbPromoRemove"
            },
            "remove": {
                "type": "click",
                "submit": ".sbPromoRemove",
                "timeout": 2500
            },
            "name": "White House Black Market",
            "storeId": "9900"
        },
        {
            "url": ".wine.com/checkout",
            "apply": {
                "type": "click",
                "submit": ".applyCode input",
                "timeout": 2500
            },
            "controls": {
                "promo": "input[name='PromoCode']:visible",
                "total": "strong:contains('TOTAL') + strong .totalsAmount",
                "orderTotal": "td.totalPrice > div",
                "coupon": ".specialPromo:visible"
            },
            "name": "Wine.com",
            "storeId": "3672"
        },
        {
            "url": ".worldmarket.com/checkout/accordioncheckout.do",
            "apply": {
                "type": "click",
                "submit": ".couponCode .accLinks",
                "timeout": 4000
            },
            "controls": {
                "promo": ".couponCode .fsrVisible",
                "total": ".accSumRevRightCol b",
                "orderTotal": ".accOrderTotal:eq(1)",
                "coupon": "#codeApplied .codeRemove"
            },
            "remove": {
                "type": "click",
                "submit": "#codeApplied .codeRemove",
                "timeout": 4000
            },
            "name": "World Market Cost Plus ",
            "storeId": "10214"
        },
        {
            "url": ".worldmarket.com/basket.do",
            "apply": {
                "type": "click",
                "submit": ".form_but.sourceCodeApplyBtn",
                "timeout": 4000
            },
            "controls": {
                "promo": "#sourceCode",
                "total": "#EstTaxShipItemTable_estBasketTotal",
                "orderTotal": "tbody .right:eq(0)",
                "coupon": ".codeRemove"
            },
            "remove": {
                "type": "click",
                "submit": ".codeRemove",
                "timeout": 4000
            },
            "name": "World Market Cost Plus ",
            "storeId": "10214"
        },
        {
            "url": [
                ".worldofwatches.com/(?:.*)AjaxOrderItemDisplayView",
                ".worldofwatches.com/(?:.*)OrderShippingBillingView"
            ],
            "apply": {
                "type": "click",
                "submit": "#PromotionCodeForm .button_text",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".total_figures.final_price",
                "orderTotal": ".total_figures:first",
                "coupon": ".promotion_used a"
            },
            "remove": {
                "type": "click",
                "submit": ".promotion_used a",
                "timeout": 2500
            },
            "name": "World Of Watches",
            "storeId": "6930"
        },
        {
            "url": ".yoox.com/Checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"price fontBold\"]",
                "orderTotal": "div[class=\"price fontBold\"]"
            },
            "name": "YOOX.COM",
            "storeId": "8704"
        },
        {
            "url": "cart.zaful.com/shopping-cart",
            "apply": {
                "type": "click",
                "submit": "#applybtn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promotion_code",
                "total": ".grandTotal .my_shop_price",
                "orderTotal": ".cartTotal .my_shop_price:first",
                "coupon": "li:contains('-') .my_shop_price"
            },
            "remove": {
                "type": "click",
                "submit": "#applybtn",
                "timeout": 2500
            },
            "name": "Zaful",
            "storeId": "14319"
        },
        {
            "url": ".zagg.com/(.*)/cart/",
            "apply": {
                "type": "click",
                "submit": ".btn.btn-gray-dark",
                "timeout": 3600
            },
            "controls": {
                "promo": "#coupon_code",
                "total": "tfoot .price",
                "orderTotal": "tbody .a-right .price",
                "coupon": ".cancel-coupon"
            },
            "remove": {
                "type": "click",
                "submit": ".cancel-coupon",
                "timeout": 3600
            },
            "name": "Zagg",
            "storeId": "11480"
        },
        {
            "url": ".zennioptical.com/browse/shoppingCart",
            "apply": {
                "type": "click",
                "submit": "#sc_pc_btnApply",
                "timeout": 3000
            },
            "controls": {
                "promo": "#sc_pc_tInput",
                "total": ".os_total dd",
                "orderTotal": ".os_total dd",
                "coupon": ".pc_l .i_remove"
            },
            "remove": {
                "type": "click",
                "submit": ".pc_l .i_remove",
                "timeout": 3000
            },
            "name": "Zenni Optical",
            "storeId": "11477"
        },
        {
            "url": ".zennioptical.com/orderCheckout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": ".os_l fieldset dl:first dd",
                "orderTotal": ".os_total dl:first dd"
            },
            "name": "Zenni Optical",
            "storeId": "11477"
        },
        {
            "url": "checkout.zoro.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#promo-code-apply-btn",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promocode",
                "total": ".cart-summary-total-formatted",
                "orderTotal": ".cart-summary-subtotal-formatted",
                "coupon": ".promo-code-text-chk"
            },
            "remove": {
                "type": "click",
                "submit": ".promo-code-text-chk a",
                "timeout": 2500
            },
            "name": "Zoro",
            "storeId": "12539"
        },
        {
            "url": ".backcountry.com/.*/checkout/checkout.jsp",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#summary-order-subtotal",
                "orderTotal": "#order-total"
            },
            "name": "backcountry",
            "storeId": "10019"
        },
        {
            "url": ".barenecessities.com/(.*)/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#cphMainContent_OrderSummary1_lblListSubTotal",
                "orderTotal": "#cphMainContent_OrderSummary1_lblGrandTotal"
            },
            "name": "bare necessities",
            "storeId": "1836"
        },
        {
            "url": ".bkstr.com/.*/servlet/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#storeOrderDetails_374905 .efCheckout-rightcol:first",
                "orderTotal": "div[class=\"efCheckout-rightcol emphasis\"]"
            },
            "name": "bkstr",
            "storeId": "13358"
        },
        {
            "url": ".disneystore.com/disney/store/DSIShoppingCartDisplayView",
            "apply": {
                "type": "click",
                "submit": ".applyPromo",
                "timeout": 2000
            },
            "controls": {
                "promo": "#addPromoPopup p input",
                "total": "#orderSummaryTotal span.cost",
                "orderTotal": "[data-dojo-attach-point=\"subtotal\"] .cost",
                "coupon": "#promoCodes"
            },
            "remove": {
                "type": "click",
                "submit": "#promoCodes input",
                "timeout": 2000
            },
            "name": "disneystore.com",
            "storeId": "98"
        },
        {
            "url": ".ebags.com/cart/preview",
            "apply": {
                "type": "submit",
                "form": "form[action=\"/cart/SetSourceCode\"]",
                "submit": "#Submit2",
                "timeout": 3500
            },
            "controls": {
                "promo": "#enterMeCode",
                "total": ".bfx-total-grandtotal"
            },
            "name": "eBags",
            "storeId": "82"
        },
        {
            "url": "https://www.ebags.com/checkout",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "#merchandisetotal",
                "orderTotal": ".summaryTotal"
            },
            "name": "eBags",
            "storeId": ""
        },
        {
            "url": ".hotwire.com/checkout/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[data-bdd=trip-subtotal]",
                "orderTotal": "div[data-bdd=total-price]"
            },
            "name": "hotwire",
            "storeId": "2609"
        },
        {
            "url": ".lordandtaylor.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView",
            "apply": {
                "type": "click",
                "submit": ".promo-apply-link a",
                "timeout": 10000
            },
            "controls": {
                "promo": "#promoCode",
                "total": "#estimateTotalCharges",
                "coupon": ".promo-code-name"
            },
            "remove": {
                "type": "click",
                "submit": ".promo-code-remove a",
                "timeout": 10000
            },
            "name": "lordandtaylor",
            "storeId": "10089"
        },
        {
            "url": ".lordandtaylor.com/webapp/wcs/stores/servlet/OrderShippingBillingView",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=sub-total] > div[class=right] > span[class=price]",
                "orderTotal": "div[class=order-total] > div[class=right] > span[class=price]"
            },
            "name": "lordandtaylor",
            "storeId": "10089"
        },
        {
            "url": ".tanga.com/orders/",
            "apply": {
                "type": "post",
                "url": "",
                "data": ""
            },
            "controls": {
                "promo": "",
                "total": "div[class=\"order-summary__number is-top\"] .number",
                "orderTotal": "div[class=\"order-summary__number is-important\"] span[class=\"number total\"]"
            },
            "name": "tanga",
            "storeId": "10575"
        },
        {
            "url": ".thredup.com/checkout",
            "apply": {
                "type": "click",
                "submit": "#code_submit",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promo_code",
                "total": ".large.value",
                "orderTotal": ".subtotal .value",
                "coupon": "#remove_code:visible"
            },
            "remove": {
                "type": "click",
                "submit": "#remove_code:visible",
                "timeout": 2500
            },
            "name": "thredUP",
            "storeId": "12385"
        },
        {
            "url": ".cheryls.com/webapp/wcs/stores/servlet/FDPlaceOrderDisplayCmd",
            "apply": {
                "type": "click",
                "submit": "#divApplyBtnStatic a",
                "timeout": 2500
            },
            "controls": {
                "promo": "#promoCode",
                "total": ".BP-total-amount .BP-PaddingSpace.BP-col2:first",
                "orderTotal": ".BP-total-label .BP-PaddingSpace.BP-col2:first",
                "coupon": ".appliedPromoDetails a"
            },
            "conditions": {
                "required": [
                    "#passContainer [name='zipCode']"
                ]
            },
            "remove": {
                "type": "click",
                "submit": ".appliedPromoDetails a",
                "timeout": 2500
            },
            "name": "Сheryl's",
            "storeId": "9215"
        }
    ]
}
