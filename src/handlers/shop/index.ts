import { PANDABASE_SHOP_ID } from "../../defaults";

import { GetShopResponse } from "shop-interfaces";

export default function handleGetShop() {
  const response = {
    id: parseInt(PANDABASE_SHOP_ID),
    image_hash:
      "0bf0c0124e831d27db47970ea8c8328081e3440c5c9555c953acbbeebd3bbdd3",
    title: "Pandabase Official Shop",
    description:
      "This is the official Pandabase shop owned by platform operators.",
    meta_data: ["official"],
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Mooli&display=swap');

    * {
        background-color: black;
        font-family: 'Mooli', sans-serif !important;
    }
    `,
    category: ["online-store", "t-shirt"],
    plan: "Enterprise",
    domain: true,
    handle: "pandabase",
    has_storefront: true,
    force_ssl: true,
    checkout_api_supported: false,
    timezone: "UTC+1",
    created_at: "2021-12-23T17:41:59+11:00",
  } as GetShopResponse;

  return response;
}
