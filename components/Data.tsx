import { ImageSourcePropType } from "react-native"

    export const PodShows = [
        {
            name: "Top Songs Nigeria",
            image: require('my-app/assets/blaqbonez.jpeg')
        },
        {
            name: "Sia Mix",
            image: require('my-app/assets/Motivate1.png')
        },
        {
            name: "Afrobeats 2022",
            image: require('my-app/assets/skepta.jpeg')
        },
        {
            name: "Justine Skye Mix",
            image: require('my-app/assets/msbanks.jpeg')
        },
        {
            name: "Daily Mix 1",
            image: require('my-app/assets/Motivate2.png')
        },
        {
            name: "Drake Mix",
            image: require('my-app/assets/Drake1.png')
        },
    
    ]

    interface User {
        name : string,
        image: ImageSourcePropType,
        title?: string,
        time: string
    }

export const Notifications : User[]= [
    {
        name: "Sia",
        image: require('my-app/assets/Motivate2.png'),
        title: "Everyday is Christmas (Snowman Deluxe Edition)",
        time: "1"
    },
    {
        name: "Wizkid",
        image: require('my-app/assets/icon.png'),
        title: "More Love, Less Ego",
        time: "1"
    }
]


export const follow : User[] = [
    {
        name: "Jamie Green",
        image: require('my-app/assets/Drake1.png'),
        time: "2"
    },
    {
        name: "Eve Cronwell",
        image: require('my-app/assets/SnoppDog.png'),
        time: "2"
    },
]

export const MusicList = [
    {
        name: "Lil Baby",
        role: "Artist",
        image: require('my-app/assets/LilBaby.png'),
        content: "Lil Baby's third project of 2018, Street Gossip caps off a year most artists of his stature would die for. He kicked in the door... more "
    },
    {
        name: "Erik The Architect",
        role: "Artist",
        image: require('my-app/assets/SnoppDog.png'),
        content: "Lil Baby's third project of 2018, Street Gossip caps off a year most artists of his stature would die for. He kicked in the door... more "
    }
]

    export const Episodes = [
        {
            Title: "Things You Thought You Knew - What Is Exit Velocity?",
            subTitle: "What is exit velocity? On this episode, Neil deGrasse Tyson asks",
            Date: "Fri",
            Time: "53 min",
            image: require('my-app/assets/Motivate1.png')
        },
        {
            Title: "62. Navigating a quarter life crisis and feeling lost.",
            subTitle: "What is exit velocity? On this episode, Neil deGrasse Tyson asks",
            Date: "Fri",
            Time: "53 min",
            image: require('my-app/assets/Motivate2.png')
        }
    ]

    export const searchArtiste = [
        {
            image: require('my-app/assets/Image(1).png'),
            name: "Elzhi",
            role: "Artist"
        },
        {
            image: require('my-app/assets/Image(2).png'),
            name: "Lil Baby",
            role: "Artist",
            activity: "online"
        },
        {
            image: require('my-app/assets/Image.png'),
            name: "Reasonable Doubt",
            role: "Album.JAY-Z"
        },
        {
            image: require('my-app/assets/LilBaby.png'),
            name: "Erick the Architect",
            role: "Artist"
        },
        {
            image: require('my-app/assets/SnoppDog.png'),
            name: "2000",
            role: "Album.Joey Bada$$",
            activity: "online"
        },
        {
            image: require('my-app/assets/Image(2).png'),
            name: "Higher(feat. Nipsey Hussle & Joey...",
            role: "Song.DJ Khaled"
        },
        
    ]
