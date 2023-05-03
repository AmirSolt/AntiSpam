
export class PublicPageConfig {

    pfp: string = ''
    username: string = ''
    bio: string = ''

    contactPrice: number = 5
    contactCurrency: string = "USD"
    linkItems: LinkItem[]

    constructor(args: any) {
        this.pfp = args.pfp
        this.username = args.username
        this.bio = args.bio
        this.contactPrice = args.contactPrice
        this.contactCurrency = args.contactCurrency
        this.linkItems = args.linkItems
    }

}



export class LinkItem {
    link: string = ''
    icon: string = ''
    label: string = ''
    constructor(args: any) {
        this.link = args.link
        this.icon = args.icon
        this.label = args.label
    }
}



export function getSamplePPC(): PublicPageConfig {
    return new PublicPageConfig(
        {

            pfp: "https://avatars.githubusercontent.com/u/81866624?s=400&u=1a4b0b0b9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0&v=4",
            username: "123",
            bio: "Hi this is 👋",
            contactPrice: 5,
            contactCurrency: "USD",
            linkItems: [
                new LinkItem(
                    {
                        link:"https://tiktok.com/",
                        icon:"tiktok",
                        label:"TikTok"
                    }
                ),
                new LinkItem(
                    {
                        link:"https://instagram.com/",
                        icon:"instagram",
                        label:"Instagram"
                    }
                ),
                new LinkItem(
                    {
                        link:"https://facebook.com/",
                        icon:"facebook",
                        label:"Facebook"
                    }
                ),
            ]
        }
    )

}



