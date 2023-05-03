
export class PublicProfileConfig {

    pfp: string = ''

    
    linkItems: LinkItem[]

    constructor(
        pfp: string,
        
        linkItems: LinkItem[],
        ) {
        this.pfp = pfp


        this.linkItems = linkItems
    }

}



export class LinkItem{
    link: string = ''
    icon: string = ''
    label: string = ''
    constructor(link: string, icon: string, label: string){
        this.link = link
        this.icon = icon
        this.label = label
    }
}