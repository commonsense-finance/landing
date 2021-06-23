import Image from 'next/image'

const title = "Meet the Founders";
const description = "United by the passion for investment, blockchain and good wine.";
const persons = [
    {
        name: 'Edu Forte',
        post: 'CEO & Founder',
        description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
        avatar: "/images/edu-profile.jpg",
        socials: [
            { social: 'LinkedIn', link: '#1', id: '1', icon: null },
            { social: 'Twitter', link: '#1', id: '1', icon: null },
            { social: 'Google', link: '#1', id: '1', icon: null },
        ],
        link: "#"
    },
    {
        name: 'Claudia Giraldo',
        post: 'CCO & Founder',
        description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
        avatar: "/images/claudia-profile.jpg",
        socials: [
            { social: 'LinkedIn', link: '#1', id: '1', icon: null },
            { social: 'Twitter', link: '#1', id: '1', icon: null },
            { social: 'Google', link: '#1', id: '1', icon: null },
        ],
        link: "#"
    },
    {
        name: 'Luciano Insua',
        post: 'CTO & Founder',
        description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. ',
        avatar: "/images/luciano-profile.jpg",
        socials: [
            { social: 'LinkedIn', link: '#1', id: '1', icon: null },
            { social: 'Twitter', link: '#1', id: '1', icon: null },
            { social: 'Google', link: '#1', id: '1', icon: null },
        ],
        link: "#"
    }
]

export default function Team() {
    return (
        <div className="container-flex py-5">
            <div className="container text-center">
                <h1 className="py-4">{title}</h1>
                <p>{description}</p>
                <div className="row py-5">
                    {persons.map((item, index) =>
                        <div key={index} className="col-sm-12 col-md-4 py-5">
                            <Image
                                priority
                                src={item.avatar}
                                className="rounded-circle"
                                height={150}
                                width={150}
                                alt={item.name}
                            />
                            <h3>{item.name}</h3>
                            <p>{item.post}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}