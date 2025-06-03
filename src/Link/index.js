import NexLink from 'next/link'


export default function Link ({children, href, ...props}){

    return(
        <NexLink href={href}>
            <a {...props}>
                {children}
            </a>
        </NexLink>
    )
}