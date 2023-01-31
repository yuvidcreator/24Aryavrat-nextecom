import { EnquiryOnWhatsApp } from "@/utils/BizSettings";

const _products = [
    {
        id: 1,
        title: "Redmi K30",
        cover:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597138340.1852584.jpg",
        salePrice: 7999,
        category: "Mobile",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    },
    {
        id: 2,
        title: "Lava",
        cover:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494045.31058391.jpg",
        salePrice: 8999,
        category: "Mobile",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    },
    {
        id: 3,
        title: "Mix Alpha",
        cover:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569297752.58027060.jpg",
        salePrice: 12999,
        category: "Mobile",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    },
    {
        id: 4,
        title: "samsung",
        cover:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/597dc0f15e44d85928711966d540ed71.jpg",
        salePrice: 49999,
        category: "Mobile",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    },
    {
        id: 5,
        title: "RedmiBook 16",
        cover:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1594107583.22838030.jpg",
        salePrice: 5699,
        category: "Note",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    },
    {
        id: 6,
        title: "Redmi",
        cover:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584930592.91415090.jpg",
        salePrice: 11999,
        category: "Mobile",
        quantity: [
                {
                    id: 1,
                    value: 250
                },
                {
                    id: 2,
                    value: 500
                },
            ],
        currency: "INR"
    }
];

export default _products;


export const featuredProducts = [
    {
        id: 1,
        title: "Desi Ghee",
        slug: "desi-ghee",
        shortDescription: "Buy Desi Bilona Ghee at best prices available on Gau Srushti. Order high quality Vedic Ghee from online grocery shop and avail free home delivery.",
        coverImage: "/images/products/desi-ghee/desi-ghee.png", 
        otherImages: [
            {
                id: 1,
                image: "/images/products/desi-ghee/desi-ghee.jpg",
                altText: "image 1"
            },
            {
                id: 2,
                image: "/images/products/desi-ghee/desi-ghee.jpg",
                altText: "image 2"
            },
            {
                id: 3,
                image: "/images/products/desi-ghee/desi-ghee.jpg",
                altText: "image 3"
            },
            {
                id: 4,
                image: "/images/products/desi-ghee/desi-ghee.jpg",
                altText: "image 4"
            },
        ], 
        regularPrice: 1199,
        salePrice: 999,
        offer: 15,
        category: "Panchagavya",
        categorySlug: "panchagavya",
        size: [
            {
                id: 15454,
                value: "250 ml",
            },
            {
                id: 2545,
                value: "500 ml",
            },
            {
                id: 32154,
                value: "1 kg",
            },
        ],
        ratings: 5,
        reviews: 12,
        enquiryLink: `${EnquiryOnWhatsApp}%20Product%20Name%20-%20Desi%20Ghee%20`
    },
    {
        id: 2,
        title: "Amritdhara",
        slug: "amrtidhara",
        shortDescription: "लाभ - सिरदर्द, गॅस बनने पर नाभि को लगायें, खटमल कीड़े आदि के काटने पर लगायें। मुख्य घटक - भीमसेनी कपूर, अजवाइन सत, पुदीना सत",
        coverImage: "/images/products/panchagavya/amritdhara1.png", 
        otherImages: [
            {
                id: 1754,
                image: "/images/products/amrtidhara/amrtidhara.jpg",
                altText: "image 1"
            },
            {
                id: 254546,
                image: "/images/products/amrtidhara/amrtidhara.jpg",
                altText: "image 2"
            },
            {
                id: 35545,
                image: "/images/products/amrtidhara/amrtidhara.jpg",
                altText: "image 3"
            },
            {
                id: 40515,
                image: "/images/products/amrtidhara/amrtidhara.jpg",
                altText: "image 4"
            },
        ], 
        regularPrice: 280,
        salePrice: 200,
        offer: 15,
        category: "Panchagavya",
        categorySlug: "panchagavya",
        size: [
            {
                id: 1455,
                value: "10 ml",
            },
        ],
        ratings: 5,
        reviews: 12,
        enquiryLink: `${EnquiryOnWhatsApp}%20Product%20Name%20-%20Amritdhara%2010ml`
    },
    {
        id: 3,
        title: "Organic Mango",
        slug: "organic-mango",
        shortDescription: "Buy 100% Organic Premium mangoes online straight from the fields of Ratnagiri. Visit gausrushti.com to get mangoes delivered at your doorstep anywhere in India.",
        coverImage: "/images/products/organic/organic-mangoes.jpeg", 
        otherImages: [
            {
                id: 12522,
                image: "/images/products/organic/organic.jpg",
                altText: "image 1"
            },
            {
                id: 212131,
                image: "/images/products/organic/organic.jpg",
                altText: "image 2"
            },
            {
                id: 3212,
                image: "/images/products/organic/organic.jpg",
                altText: "image 3"
            },
            {
                id: 421212,
                image: "/images/products/organic/organic.jpg",
                altText: "image 4"
            },
        ], 
        regularPrice: 3500,
        salePrice: 3000,
        offer: 15,
        category: "Organic",
        categorySlug: "organic",
        size: [
            {
                id: 15455,
                value: "500 Units",
            },
            {
                id: 122121,
                value: "1200 Units",
            },
            {
                id: 157878,
                value: "2500 Units",
            },
        ],
        ratings: 5,
        reviews: 12,
        enquiryLink: `${EnquiryOnWhatsApp}%20Product%20Name%20-%Organic%20Mangos`
    },
]